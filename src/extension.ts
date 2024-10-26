import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}

