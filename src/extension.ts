// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
  const git = vscode.commands.registerCommand("choc-touchbar.git", () => {
    vscode.commands.executeCommand("setContext", "enableGit", true);
  });

  // Git commit
  const commit = vscode.commands.registerCommand(
    "choc-touchbar.gitcommit",
    () => {
      vscode.commands.executeCommand("git.commit");
      vscode.commands.executeCommand("setContext", "enableGit", false);
    }
  );

  /// Git push
  const push = vscode.commands.registerCommand("choc-touchbar.gitpush", () => {
    vscode.commands.executeCommand("git.push");
    vscode.commands.executeCommand("setContext", "enableGit", false);
  });

  /// Closing git
  const closeGit = vscode.commands.registerCommand(
    "choc-touchbar.closegit",
    () => {
      vscode.commands.executeCommand("setContext", "enableGit", false);
    }
  );

  const chakra = vscode.commands.registerCommand("choc-touchbar.chakra", () => {
    vscode.commands.executeCommand("setContext", "enableChakra", true);
  });

  /// Chakra docs
  const chakraDocs = vscode.commands.registerCommand(
    "choc-touchbar.chakradocs",
    () => {
      vscode.env.openExternal(vscode.Uri.parse("https://chakra-ui.com"));
      //   vscode.commands.executeCommand("setContext", "enableChakra", false);
    }
  );

  /// Closing chakra
  const closeChakra = vscode.commands.registerCommand(
    "choc-touchbar.closechakra",
    () => {
      vscode.commands.executeCommand("setContext", "enableChakra", false);
    }
  );

  context.subscriptions.push(
    git,
    closeGit,
    commit,
    push,
    chakra,
    chakraDocs,
    closeChakra
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
