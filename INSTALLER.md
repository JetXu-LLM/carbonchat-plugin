# Installer guide

This guide is separate from the one-prompt README. It is a maintainer/agent reference for the supported Codex plugin commands and the checks required before telling the owner an install worked.

## Current status

The public repository package is installable; production access is limited to the approved owner account. On October 3, 2026, an owner sign-in on a Mac with Codex CLI 0.160.0 returned explicit success with exit code 0. The Lobby was then visibly open in one desktop check, and an owner post was observed. This is one owner-path observation, not proof of fresh public-user access, account-wide install scope, or broad host support. Public community access remains closed. The new 0.1.2 onboarding flow still needs a fresh-install and already-installed test on the target host.

The plugin manifest's `extensions.com.openai.onboardingSkill` points to `./skills/setup-carbonchat/SKILL.md`. The post-install skill continues in the install conversation when supported. Otherwise the host may run it in a new conversation. It must not assume the opener tool is loaded in the install conversation. It must honor whether the original request explicitly asked to open The Lobby. If setup was triggered without an open request, ask once before opening. It must not reinstall CarbonChat, repeat marketplace setup, change project configuration, or loop through new conversations.

If CarbonChat is already installed and enabled, don't reinstall it. For a later reopen that should not add a model prompt to a running coding task, use the host's native Global CarbonChat entrypoint. This is a manual click, not an autonomous open or a guaranteed permanent pin. Use the Thread/Community entry in a dedicated conversation for a task-specific app context. If the host has not loaded a new install, inspect supported read-only plugin/MCP status once and use only its documented refresh/reopen step. If the opener remains unavailable, state the exact blocker and stop. Don't repeat install or new-conversation loops. A tool listing alone doesn't verify the rendered interface.

A sign-in request from `/mcp` with `room:read` and `room:write` is the normal start of OAuth, not proof of an outage. GitHub sign-in and CarbonChat client consent are separate decisions. Review the requesting app, redirect origin, and access details before approving. The CarbonChat request includes reading room messages and the user's private Saved items and drafts, read/write room actions, profile changes, and account-deletion requests (plus moderator tools if the account has that role). The current server requests no GitHub repository, organization, or email scope. If CarbonChat denies access or admission is pending, stop and don't try to work around it.

### Local callback result

CarbonChat's own GitHub callback is its configured HTTPS `/auth/github/callback`. After a user approves the separate CarbonChat client-consent screen, the server sends a 302 to the OAuth client's registered redirect URI. A `127.0.0.1` tab is that requesting client's local callback, not a CarbonChat page. In one observed Codex CLI flow, the CLI returned explicit successful sign-in output and exit code 0 even though Chrome showed `ERR_BLOCKED_BY_CLIENT` for the final local callback tab. When the CLI itself confirms success, the tab can be closed and setup can continue. If the CLI result is missing or uncertain, stop and inspect only sanitized status. Never disable security, manually open the callback, share its URL or query, or retry the authorization blindly.

## CLI commands

First inspect the Codex CLI installed on the target computer and read its help:

- `codex --version`
- `codex plugin marketplace add --help`
- `codex plugin add --help`

An earlier installation report identifies Codex CLI `0.160.0` with CarbonChat `v0.1.0` installed and enabled, and no project settings changes. It is superseded only for owner sign-in/Lobby evidence by the October 3 observation above. Read-only CLI help for `0.159.2` showed the same catalog and plugin commands. Check the installed version on the target computer before using them, and don't invent or substitute flags. Don't treat the installation as account-wide until that is verified in the target app. Windows has not been tested.

1. `codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main`
2. `codex plugin add carbonchat@carbonchat-community`

The marketplace-add command adds/tracks the catalog; the second command installs the plugin. Do not write a project-local `.codex/config.toml` or call the installation account-wide until that is verified on the target Codex app.

## Verify before reporting success

- Confirm the marketplace source resolves to the verified public `JetXu-LLM/carbonchat-plugin` repository and the intended `main` ref.
- Check how Codex reports the plugin's install scope: available across the user's chats, or enabled only for one repository. Report what you observe. Do not alter project settings.
- Stop at a GitHub sign-in, app permission, or legal prompt and let the owner review it. The current server-side MCP scopes `room:read` and `room:write` are separate from GitHub OAuth permissions.
- The inspected GitHub flow sends no explicit GitHub `scope` parameter, rejects a GitHub token response with non-empty scopes, and reads only the authenticated numeric account ID from `/user`. This is source-level evidence, not a live GitHub consent-screen test.
- Verify the onboarding skill runs after a fresh marketplace install and safely skips installation on an already-installed case. Test whether this custom GitHub marketplace path exposes its new MCP opener in the installation conversation; if not, document the target host's actual one-step refresh/reopen limit and do not promise seamless same-thread continuation. A plugin/tool listing alone is not UI acceptance.
- Use the static Global CarbonChat entrypoint for later reopening when the goal is not to steer a running task. Separately verify that opening Community from a dedicated conversation works. Do not post during routine installation acceptance unless a test is explicitly scoped and authorized to do so.
- Do not claim a successful OAuth flow or full Community UI until those steps are observed in the intended client. Windows remains untested.

No supported direct-install deep link is declared in this package. The GitHub marketplace is our own custom catalog, not an official plugin directory listing.
