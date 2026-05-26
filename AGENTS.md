# AGENTS.md

## Repo type
VS Code color theme extension — no build step, no dependencies, no tests.

## VCS
- Uses Jujutsu (jj) colocated with Git.
- **All VCS operations must use `jj-mcp` tools.** Never use `git` directly for push, commit, or branch operations.
- Push to GitHub with `jj-mcp_jj_git_push`; sync jj state to git refs with `jj-mcp_jj_git_export`.

## Theme file
- `themes/Midnight Ultra by A-Themes-color-theme.json` — the only meaningful source file.
- Format: VS Code theme JSON with `colors` (workbench) and `tokenColors` (TextMate scopes).
- `semanticHighlighting` is enabled — semantic tokens are supported.
- `semanticTokenColors` supports objects `{"foreground": "#hex", "bold": true}` and strings `"#hex"`. Use objects for fontStyle modifiers.
- Theme is registered in `package.json` under `contributes.themes`.

## Theme color validation
- VS Code validates every `colors` key against its theme-color schema. Invalid keys produce diagnostics.
- Reference: https://code.visualstudio.com/api/references/theme-color
- Common mistakes: `suggestWidget.*` → `editorSuggestWidget.*`; `stickyScroll.*` → `editorStickyScroll.*`; `inlineChatDiff.insertedBackground` → `inlineChatDiff.inserted`.

## Dev workflow
- Press F5 (or use the `Extension` launch config in `.vscode/launch.json`) to open an Extension Development Host window with the theme loaded.
- Changes to the theme JSON are **auto-applied** to the extension host — no reload needed.
- Use `Developer: Inspect Editor Tokens and Scopes` (Cmd+Shift+P) to debug scopes.
- Use `Preferences: Color Theme` (Cmd+K Cmd+T) to activate the theme in the host window.

## Packaging
- Install: copy the extension dir into `<user home>/.vscode/extensions` and restart Code.
- Publish: use `vsce package` to create a `.vsix` file (ignored by git).
- `.vscodeignore` excludes metadata files from the `.vsix` package.
