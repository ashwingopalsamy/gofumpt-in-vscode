import * as assert from 'assert';
import * as vscode from 'vscode';
import { enableGofumpt } from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Should enable gofumpt configuration settings', async () => {
    // Call the function to enable gofumpt settings
    enableGofumpt();

    // Get the updated configuration
    const goConfig = vscode.workspace.getConfiguration('go');
    const goplsConfig = vscode.workspace.getConfiguration('gopls');

    // Check if the go.useLanguageServer setting is true
    const useLanguageServer = goConfig.get<boolean>('useLanguageServer');
    assert.strictEqual(useLanguageServer, true, 'The go.useLanguageServer setting should be true');

    // Check if the gopls.formatting.gofumpt setting is true
    const gofumptEnabled = goplsConfig.get<boolean>('formatting.gofumpt');
    assert.strictEqual(gofumptEnabled, true, 'The gopls.formatting.gofumpt setting should be true');
  });
});
