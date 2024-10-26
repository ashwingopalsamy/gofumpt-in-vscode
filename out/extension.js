"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.enableGofumpt = enableGofumpt;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    enableGofumpt();
    const enableCommand = vscode.commands.registerCommand('gofumptFormatter.enableGofumpt', () => {
        enableGofumpt();
        vscode.window.showInformationMessage('gofumpt formatting has been enabled.');
    });
    context.subscriptions.push(enableCommand);
}
function enableGofumpt() {
    const goConfig = vscode.workspace.getConfiguration('go');
    const goplsConfig = vscode.workspace.getConfiguration('gopls');
    goConfig.update('useLanguageServer', true, vscode.ConfigurationTarget.Global);
    goplsConfig.update('formatting.gofumpt', true, vscode.ConfigurationTarget.Global);
}
function deactivate() { }
