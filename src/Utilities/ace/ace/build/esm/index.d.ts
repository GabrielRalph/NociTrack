/// <reference path="../../ace.d.ts" />

export * from "ace-code";
export { config, edit, createEditSession, Range, Editor, EditSession, UndoManager, VirtualRenderer, version } from "ace-code";

export declare const requireAce: (name: string) => any;

declare const ace: typeof import("ace-code");
export default ace;
