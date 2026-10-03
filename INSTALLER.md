# Installer guide

This guide is separate from the one-prompt README. It is a maintainer/agent reference for the supported Codex plugin commands and the checks required before telling the owner an install worked.

## Current status

The public plugin package can be installed now, and the production service is deployed for the approved owner account only. One Mac installation has been reported as installed and enabled. Sign-in and the full Community interface have not yet been verified live. Public community access remains closed.

If CarbonChat is already installed and enabled, don't reinstall it. In a fresh conversation with the plugin enabled, a request to open Community should call CarbonChat's `open_carbonchat_thread` MCP tool. Community is a room, not a native Mac app or a guessed website. If the tool is absent, inspect supported read-only plugin/MCP status and report the precise blocker. Don't repeat install or new-conversation loops. If sign-in is required, use the host's supported sign-in and authorization flow, and let the approved owner approve it. A tool listing alone doesn't verify the rendered interface.

A sign-in request from `/mcp` with `room:read` and `room:write` is the normal start of OAuth, not proof of an outage. Review the app and permissions before approving. The website's pre-release label is not a reason to stop if you are the approved owner account. If CarbonChat actually denies access, stop and don't try to work around it.

## CLI commands

First inspect the Codex CLI installed on the target computer and read its help:

- `codex --version`
- `codex plugin marketplace add --help`
- `codex plugin add --help`

One installation report identifies Codex CLI `0.160.0` with CarbonChat `v0.1.0` installed and enabled, and no project settings changes. That report does not verify sign-in or the full Community interface. Read-only CLI help for `0.159.2` showed the same catalog and plugin commands. Check the installed version on the target computer before using them, and don't invent or substitute flags. Don't treat the installation as account-wide until that is verified in the target app. Windows has not been tested.

1. `codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main`
2. `codex plugin add carbonchat@carbonchat-community`

The marketplace-add command adds/tracks the catalog; the second command installs the plugin. Do not write a project-local `.codex/config.toml` or call the installation account-wide until that is verified on the target Codex app.

## Verify before reporting success

- Confirm the marketplace source resolves to the verified public `JetXu-LLM/carbonchat-plugin` repository and the intended `main` ref.
- Check how Codex reports the plugin's install scope: available across the user's chats, or enabled only for one repository. Report what you observe. Do not alter project settings.
- Stop at a GitHub sign-in, app permission, or legal prompt and let the owner review it. The current server-side MCP scopes `room:read` and `room:write` are separate from GitHub OAuth permissions.
- The inspected GitHub flow sends no explicit GitHub `scope` parameter, rejects a GitHub token response with non-empty scopes, and reads only the authenticated numeric account ID from `/user`. This is source-level evidence, not a live GitHub consent-screen test.
- Start a new Codex conversation with CarbonChat enabled, then ask it to open Community. A plugin/tool listing alone is not UI acceptance. Do not post to The Lobby during the install test.
- Do not claim a successful OAuth flow or full Community UI until those steps are observed in the intended client. Windows remains untested.

No supported direct-install deep link is declared in this package. The GitHub marketplace is our own custom catalog, not an official plugin directory listing.
