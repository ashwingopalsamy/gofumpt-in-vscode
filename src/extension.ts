import * as vscode from 'vscode';
import { exec } from 'child_process';

function checkGofumptInstallation(): Promise<boolean> {
   return new Promise((resolve) => {
      exec('gofumpt -h', (error) => {
         resolve(!error);
      });
   });
}

function formatDocument(document: vscode.TextDocument): void {
   const terminal = vscode.window.createTerminal('gofumpt');
   terminal.sendText(`gofumpt -w ${document.fileName}`);
   terminal.dispose();
}

export async function activate(context: vscode.ExtensionContext) {
   const isGofumptInstalled = await checkGofumptInstallation();
   if (!isGofumptInstalled) {
      vscode.window.showWarningMessage(
         'gofumpt is not installed. Please install it by running: `go install mvdan.cc/gofumpt@latest`'
      );
      return;
   }

   vscode.workspace.onWillSaveTextDocument((event) => {
      if (event.document.languageId === 'go' && vscode.workspace.getConfiguration('gofumptAutoFormatter').get('enable')) {
         formatDocument(event.document);
      }
   });
}

export function deactivate() {}
