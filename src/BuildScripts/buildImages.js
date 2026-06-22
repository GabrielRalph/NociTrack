const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

function buildList(rootDir) {
    let list = [];
    for (const file of fs.readdirSync(rootDir)) {
        const filePath = path.join(rootDir, file);
        if (fs.statSync(filePath).isDirectory()) {
            list.push(...buildList(filePath));
        } else if (/\.(png|jpg|jpeg|gif|svg)$/.test(file)) {
            list.push(path.relative(path.join(__dirname, "..", ".."), filePath).replace(/\\/g, "/"));
        }
    }
    return list;
}

let list = buildList(path.join(__dirname, "..", "..", "images"));
const mod = `export const images = ${JSON.stringify(list, null, 2)};`;
fs.writeFileSync(path.join(__dirname, "..", "..", "src", "Utilities", "images.js"), mod);