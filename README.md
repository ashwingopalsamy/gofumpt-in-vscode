# gofumpt in vscode

Automatically enable `gofumpt` formatting for Go files in VSCode by configuring the Go language server (`gopls`). This extension sets up the necessary settings to ensure that `gofumpt` is used for formatting your Go code whenever you save a file.

## Features

- Automatically configures VSCode settings to enable `gofumpt` formatting on save.
- Sets `"go.useLanguageServer": true` to use the `gopls` language server.
- Sets `"gopls.formatting.gofumpt": true` to enable `gofumpt` formatting.
- Provides a command to manually re-enable `gofumpt` settings if needed.

## How It Works

When you install and enable the "gofumpt in vscode" extension, it automatically updates your workspace settings with the following configurations:

```json
{
  "go.useLanguageServer": true,
  "gopls": {
    "formatting.gofumpt": true
  }
}
```

These settings ensure that the `gopls` language server is used for Go development, with `gofumpt` enabled for formatting. The configuration is applied to your workspace settings, meaning it will only affect the current project.

## Commands

*Enable gofumpt Formatting:* Manually enable the `gofumpt` settings again if they were changed or disabled. Use the command palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for "Enable gofumpt Formatting"

## Manual Configuration (Optional)

If you prefer to manually set the configuration, add the following settings to your workspace's `settings.json`:

```json
{
  "go.useLanguageServer": true,
  "gopls": {
    "formatting.gofumpt": true
  }
}
```

This will achieve the same effect as the extension.

## Troubleshooting

If you encounter any issues:

- Make sure the Go extension for VSCode is installed and configured.
- Ensure that gopls is properly installed and available on your system.
- Verify that the "`go.useLanguageServer`" and "`gopls.formatting.gofumpt`" settings are enabled in your workspace settings.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.
