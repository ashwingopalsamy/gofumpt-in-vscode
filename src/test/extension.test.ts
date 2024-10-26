import * as assert from 'assert';
import * as vscode from 'vscode';
import { enableGofumpt } from '../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Should enable gofumpt configuration settings', async () => {
    enableGofumpt();

    const goConfig = vscode.workspace.getConfiguration('go');
    const goplsConfig = vscode.workspace.getConfiguration('gopls');

    const useLanguageServer = goConfig.get<boolean>('useLanguageServer');
    assert.strictEqual(useLanguageServer, true, 'The go.useLanguageServer setting should be true');

    const gofumptEnabled = goplsConfig.get<boolean>('formatting.gofumpt');
    assert.strictEqual(gofumptEnabled, true, 'The gopls.formatting.gofumpt setting should be true');
  });
});
