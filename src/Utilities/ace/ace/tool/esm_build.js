#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const { jsFileList, modeList } = require("../Makefile.dryice");

const ACE_HOME = path.resolve(__dirname, "..");

function parseArgs(argv) {
    let target = path.join(ACE_HOME, "build", "esm");
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === "--target" && argv[i + 1]) {
            target = path.isAbsolute(argv[i + 1])
                ? argv[i + 1]
                : path.resolve(ACE_HOME, argv[i + 1]);
            i += 1;
        }
    }
    return { target };
}

function getEntries() {
    const entries = new Set();

    entries.add("src/ace.js");

    modeList("src/mode").forEach((name) => entries.add(`src/mode/${name}.js`));
    jsFileList("src/snippets").forEach((name) => entries.add(`src/snippets/${name}.js`));
    jsFileList("src/theme").forEach((name) => entries.add(`src/theme/${name}.js`));
    ["vim", "emacs", "sublime", "vscode"].forEach((name) => entries.add(`src/keyboard/${name}.js`));
    jsFileList("src/ext").forEach((name) => entries.add(`src/ext/${name}.js`));

    jsFileList("src/mode")
        .filter((name) => /_worker$/.test(name))
        .forEach((name) => entries.add(`src/mode/${name}.js`));

    return Array.from(entries).sort().map((entry) => path.join(ACE_HOME, entry));
}

function aceModuleNameFromEntry(relPathFromSrc) {
    const withoutExt = relPathFromSrc.replace(/\.js$/, "");
    if (withoutExt === "ace") return null;

    if (withoutExt.startsWith("keyboard/")) {
        return `ace/keyboard/${path.basename(withoutExt)}`;
    }

    if (withoutExt.startsWith("mode/")) {
        const modeName = path.basename(withoutExt);
        if (/_worker$/.test(modeName)) {
            return `ace/mode/${modeName.replace(/_worker$/, "")}_worker`;
        }
        return `ace/mode/${modeName}`;
    }

    if (withoutExt.startsWith("snippets/")) {
        return `ace/snippets/${path.basename(withoutExt)}`;
    }

    if (withoutExt.startsWith("theme/")) {
        return `ace/theme/${path.basename(withoutExt)}`;
    }

    if (withoutExt.startsWith("ext/")) {
        const extName = path.basename(withoutExt).replace(/^keybinding_menu$/, "keyboard_menu");
        return `ace/ext/${extName}`;
    }

    return null;
}

function generateResolver(outDir, builtFiles) {
    const header = [
        'import aceCore from "./ace.js";',
        "const ace = aceCore && aceCore.default ? aceCore.default : aceCore;",
        ""
    ].join("\n");

    const mappings = builtFiles
        .map((entry) => {
            const relFromSrc = path.relative(path.join(ACE_HOME, "src"), entry).replace(/\\/g, "/");
            const aceModuleName = aceModuleNameFromEntry(relFromSrc);
            if (!aceModuleName) return null;
            return `ace.config.setModuleLoader('${aceModuleName}', () => import('./${relFromSrc}'));`;
        })
        .filter(Boolean)
        .join("\n");

    fs.writeFileSync(path.join(outDir, "esm-resolver.js"), `${header}${mappings}\n`, "utf8");
}

function generateEntry(outDir) {
    const content = [
        'import aceCore from "./ace.js";',
        'import "./esm-resolver.js";',
        "",
        "const ace = aceCore && aceCore.default ? aceCore.default : aceCore;",
        "",
        "export const edit = (...args) => ace.edit(...args);",
        "export const createEditSession = (...args) => ace.createEditSession(...args);",
        "export const requireAce = (...args) => ace.require(...args);",
        "export const config = ace.config;",
        "export const Range = ace.Range;",
        "export const Editor = ace.Editor;",
        "export const EditSession = ace.EditSession;",
        "export const UndoManager = ace.UndoManager;",
        "export const VirtualRenderer = ace.VirtualRenderer;",
        "export const version = ace.version;",
        "",
        "export default ace;",
        ""
    ].join("\n");

    fs.writeFileSync(path.join(outDir, "index.js"), content, "utf8");
}

function generateDeclarations(outDir) {
    const indexDts = [
        '/// <reference path="../../ace.d.ts" />',
        "",
        'export * from "ace-code";',
        'export { config, edit, createEditSession, Range, Editor, EditSession, UndoManager, VirtualRenderer, version } from "ace-code";',
        "",
        "export declare const requireAce: (name: string) => any;",
        "",
        'declare const ace: typeof import("ace-code");',
        "export default ace;",
        ""
    ].join("\n");

    const aceDts = [
        '/// <reference path="../../ace.d.ts" />',
        "",
        'declare const ace: typeof import("ace-code");',
        "export default ace;",
        ""
    ].join("\n");

    const resolverDts = "export {};\n";

    fs.writeFileSync(path.join(outDir, "index.d.ts"), indexDts, "utf8");
    fs.writeFileSync(path.join(outDir, "ace.d.ts"), aceDts, "utf8");
    fs.writeFileSync(path.join(outDir, "esm-resolver.d.ts"), resolverDts, "utf8");
}

async function build() {
    const { target } = parseArgs(process.argv.slice(2));
    const entryPoints = getEntries();

    fs.rmSync(target, { recursive: true, force: true });
    fs.mkdirSync(target, { recursive: true });

    const args = [
        "--yes",
        "esbuild",
        ...entryPoints,
        "--outdir=" + target,
        "--outbase=" + path.join(ACE_HOME, "src"),
        "--bundle",
        "--splitting",
        "--format=esm",
        "--platform=browser",
        "--target=es2020",
        "--log-level=info"
    ];

    childProcess.execFileSync("npx", args, {
        cwd: ACE_HOME,
        stdio: "inherit"
    });

    const builtFiles = entryPoints.map((absPath) => path.relative(ACE_HOME, absPath).replace(/\\/g, "/"));
    generateResolver(target, builtFiles.map((x) => path.join(ACE_HOME, x)));
    generateEntry(target);
    generateDeclarations(target);

    console.log(`ESM build generated at ${target}`);
}

build().catch((err) => {
    console.error(err);
    process.exit(1);
});
