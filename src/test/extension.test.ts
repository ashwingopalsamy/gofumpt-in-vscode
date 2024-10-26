import * as assert from 'assert';
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

suite('Extension Test Suite', () => {
   vscode.window.showInformationMessage('Start all tests.');

   test('Sample Test - Array IndexOf', () => {
      assert.strictEqual(-1, [1, 2, 3].indexOf(5));
      assert.strictEqual(-1, [1, 2, 3].indexOf(0));
   });

   test('Check if extension activates on Go file', async () => {
      const extension = vscode.extensions.getExtension('your-publisher.gofumpt-auto-formatter');
      assert.ok(extension, 'Extension not found');
      await extension?.activate();

      assert.strictEqual(extension?.isActive, true, 'Extension should be active');
   });

   test('Auto-format with gofumpt on save', async () => {
      const testFilePath = path.join(__dirname, 'test.go');
      fs.writeFileSync(testFilePath, 'package main\n\nfunc main() {fmt.Println("Hello, world!")}\n');

      const document = await vscode.workspace.openTextDocument(testFilePath);
      await vscode.window.showTextDocument(document);

      await vscode.workspace.applyEdit(new vscode.WorkspaceEdit());
      await document.save();

      const updatedContent = document.getText();
      const expectedContent = 'package main\n\nfunc main() { fmt.Println("Hello, world!") }\n';

      assert.strictEqual(updatedContent, expectedContent, 'The file should be formatted with gofumpt');

      // Clean up the test file
      fs.unlinkSync(testFilePath);
   });
});
