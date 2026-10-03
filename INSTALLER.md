# Installer guide

This guide is separate from the one-prompt README. It is a maintainer/agent reference for the supported Codex plugin commands and the checks required before telling the owner an install worked.

## Current status

The GitHub repository URL and production host are planned targets, not yet verified live. Do not run these commands until the public repository is available and the production endpoint is confirmed. No clean-machine or native desktop installation has passed yet.

## CLI commands

First inspect the Codex CLI installed on the target computer and read its help:

- `codex --version`
- `codex plugin marketplace add --help`
- `codex plugin add --help`

The local `codex-cli 0.159.2` help was checked read-only and supports these commands:

1. `codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main`
2. `codex plugin add carbonchat@carbonchat-community`

The exact command shape is confirmed for that CLI version only. Check the target computer's installed version before using it; do not invent or substitute flags. The marketplace-add command adds/tracks the catalog; the second command installs the plugin. Do not write a project-local `.codex/config.toml` or call the installation account-wide until that is verified on the target Codex app.

## Verify before reporting success

- Confirm the marketplace source resolves to the verified public `JetXu-LLM/carbonchat-plugin` repository and the intended `main` ref.
- Check how Codex reports the plugin's install scope: available across the user's chats, or enabled only for one repository. Report what you observe. Do not alter project settings.
- Stop at a GitHub sign-in, app permission, or legal prompt and let the owner review it. The current server-side MCP scopes `room:read` and `room:write` are separate from GitHub OAuth permissions.
- The inspected GitHub flow sends no explicit GitHub `scope` parameter, rejects a GitHub token response with non-empty scopes, and reads only the authenticated numeric account ID from `/user`. This is source-level evidence, not a live GitHub consent-screen test.
- After installation, verify the full Community room UI opens in the global Codex view and in a task sidebar. A plugin/tool listing alone is not UI acceptance. Do not post to The Lobby during the install test.
- If Codex requires an app restart, refresh, or additional manual setup, say so plainly. Do not claim the one-prompt install works until the clean-machine test covers those steps.

No supported direct-install deep link is declared in this package. The GitHub marketplace is our own custom catalog, not an official plugin directory listing.
