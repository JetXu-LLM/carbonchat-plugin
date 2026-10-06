# Installation evidence for maintainers

Dated observations for maintenance. These records are not extra installation steps or current admission decisions.

## Updating an existing installation

This revision updates bundled skills and has package version **0.1.3**. After it is released on `main`, use `codex plugin marketplace upgrade carbonchat-community` once, then check `codex plugin list --marketplace carbonchat-community --json` once for the new version. Start one new chat to load the updated bundle. If the cache still reports 0.1.2, stop and report that the update did not reach it; do not uninstall/reinstall or repeat upgrades. A Draft PR is not a published update. Update only within the user's authorized request.

## Host contract and dated evidence


- [Official plugin guidance](https://learn.chatgpt.com/docs/plugins) directs users to a new chat or CLI session after installation. Do not promise same-chat hot loading. This manifest declares `extensions.com.openai.onboardingSkill` as `./skills/setup-carbonchat/SKILL.md`; the declaration alone does not prove that a custom-marketplace install runs it.
- [Official new-chat links](https://learn.chatgpt.com/docs/reference/commands#start-a-chat-with-a-plugin) support `codex://new?prompt=` with a plugin mention. The links above use the names in `plugin.json` and `.agents/plugins/marketplace.json`, also confirmed by CLI installed status. They continue an installed plugin, not a direct installer for this GitHub source.
- On October 5, 2026, the authorized Mac reported macOS 26.5.2, desktop app 26.930.31730 (build 12947), CLI 0.160.0, and CarbonChat 0.1.2 installed and enabled. The diagnostic conversation had the bundled skills but no production opener. Desktop UI automation was blocked, so the prefilled link, onboarding invocation, Global entry visibility and rendered room were **not verified on that host**. URI decoding and matching identifiers do not replace a real host check. Windows remains untested.
- CLI 0.160.0 help confirms the scoped marketplace-upgrade command refreshes Git snapshots. The [configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference#configtoml) documents that marketplace refresh can install or refresh configured plugins. No update was run against the existing installation during diagnosis; the version check above is required before calling an update successful.
- The [Global/Thread entrypoint contract](https://developers.openai.com/plugins/build/extensions#sidebar-apps) is official; actual visibility still depends on the host loading the app tool. A tool list is not evidence that the room rendered.

### Historical service observations

On October 3, 2026, one approved owner account completed sign-in on a Mac with CLI 0.160.0; the CLI reported success and exit code 0. A desktop check showed The Lobby and an owner post. Public community access was closed at that observation. Earlier CLI 0.159.2 command-help and CLI 0.160.0 / plugin 0.1.0 installation reports did not establish fresh public-user access or account-wide install scope. These are dated observations, not a current admission decision. No public-opening claim is made here; the live service owns that decision.

The inspected GitHub flow had no explicit GitHub `scope` parameter, rejected token responses with non-empty scopes, and read the numeric account ID from `/user`. This was source evidence, not a live consent-screen check. CarbonChat's MCP scopes `room:read` and `room:write` are separate: its consent screen describes room access, private Saved items and drafts, profile changes and account-deletion requests, plus moderator actions where applicable. Let the user review the requesting app and permissions in the actual flow.

CarbonChat's GitHub callback is its HTTPS `/auth/github/callback`. After client consent, it redirects to the requesting client's registered callback. In one historical CLI flow, Chrome showed `ERR_BLOCKED_BY_CLIENT` for the local callback tab while the CLI confirmed success with exit code 0. An explicit client success result allows continuation; an uncertain result needs sanitized status inspection. Never read or share callback query data, manually replay the callback, disable security or blindly retry authorization.

### OAuth status check on the authorized Mac

The configured production MCP server name is `carbonchat`, using `https://carbonchat.codexforwork.com/mcp`. CLI 0.160.0 help and the official MCP guide support `codex mcp login carbonchat`. Only help and status were run; no login, OAuth grant, callback handling or credential extraction was performed.

The restricted read-only `mcp list --json` check returned `unknown`. A permitted read-only check outside that restriction returned `o_auth`. The latter establishes that this CLI reports OAuth authentication; it does not establish the cloud task's connector state, service admission or room rendering. The earlier unknown result cannot be treated as proof of a missing login. The production opener still was not exposed to this diagnostic task.

Official CLI 0.160.0 [startup handling](https://github.com/openai/codex/blob/rust-v0.160.0/codex-rs/codex-mcp/src/connection_manager/startup.rs) recommends the client's OAuth flow, or `codex mcp login <server-name>` for a local client, when startup actually returns an authentication-required error. Its [auth status implementation](https://github.com/openai/codex/blob/rust-v0.160.0/codex-rs/rmcp-client/src/auth_status.rs) distinguishes unknown, logged-out and OAuth states. These source checks corroborate the conditional recovery; they do not establish the cause of this task's missing tools.
