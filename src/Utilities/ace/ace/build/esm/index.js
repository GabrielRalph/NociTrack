import aceCore from "./ace.js";
import "./esm-resolver.js";

const ace = aceCore && aceCore.default ? aceCore.default : aceCore;

export const edit = (...args) => ace.edit(...args);
export const createEditSession = (...args) => ace.createEditSession(...args);
export const requireAce = (...args) => ace.require(...args);
export const config = ace.config;
export const Range = ace.Range;
export const Editor = ace.Editor;
export const EditSession = ace.EditSession;
export const UndoManager = ace.UndoManager;
export const VirtualRenderer = ace.VirtualRenderer;
export const version = ace.version;

export default ace;
