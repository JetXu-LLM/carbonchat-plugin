# Installation evidence for maintainers

Dated observations for maintenance. These records are not extra installation steps or current admission decisions.

## October 10 opening continuation correction (0.1.11)

A working opener and a bundled setup skill now skip external instruction retrieval.
Otherwise use one HTTP text read and one raw source fallback; do not search or
open a browser/homepage to retrieve setup instructions. The copied task leads
with opening the Lobby MCP App in the current chat. Existing installation and
loading results survive continuations. Updating is needed only on an explicit
request or verified package incompatibility. Package metadata, MCP connection,
scopes and onboarding declaration are preserved. The corresponding private
runtime adds bounded checks of already-saved connection state after authorization;
this package does not prove real host OAuth, one-round installation or rendering.

## October 10 installer correction (0.1.10)

The owner’s screenshot shows 0.1.9 stopping before installation when native tools and authorized UI access were unavailable. Version **0.1.10** removes that native-only dead end. Both skills use one INSTALLER.md procedure: a loaded opener opens directly; otherwise status distinguishes source, plugin, enabled state and conversation loading. A permitted CLI needs linked execution-host, user and configuration-root evidence. UI-only denial does not prohibit that separately permitted route; installation denial still stops it. Empty CLI arrays alone do not establish source absence. Any install route and already-installed missing tools share one loading continuation. No OAuth runtime, connection identity, scopes or global installations change. Real fresh-user native installation/rendering remains unverified on the engineering Mac because authorized UI access is unavailable.

## October 10 follow-up: visible sign-in intent and native setup (0.1.9)

The owner's new screenshots show the same sign-in loop on a Mac using ChatGPT account login. They do not establish an API-key-specific cause. The owner rejected manual MCP settings as the normal onboarding path. Version **0.1.9** guides explicit sign-in through the protected `carbonchat_sign_in` tool in the normal host conversation. The server-delivered Lobby can send one visible user request after a direct app call returns a challenge; it discloses use of the linked model's allowance and never automatically repeats uncertain delivery. A successful message receipt is not proof that GitHub opened or host credentials were saved. Actual fresh-user OAuth completion remains unverified; the engineering Mac's computer-use policy denies access to the Codex app.

Current [official onboarding guidance](https://developers.openai.com/plugins/build/plugins#add-an-onboarding-skill) supports native Install → Run setup in the existing conversation. [Codex's native plugin-install change](https://github.com/openai/codex/pull/42593) reloads thread configuration and invalidates the MCP runtime. This supersedes the categorical new-chat wording in the older observations below. The existing `onboardingSkill` declaration is retained. An external CLI install does not prove that the running desktop refreshed. Prefer native installation, reuse setup/discovery results, and report unavailable host capabilities honestly; no universal one-prompt guarantee is made. The public prompt removes “Do not post for me.” while retaining the explicit publication boundaries in the skills. `mcp.json`, connection identity, OAuth scopes and marketplace policy stay unchanged.

## October 10: native connection diagnosis (0.1.8)

A Mac running ChatGPT 26.1007.21159 / bundled Codex CLI 0.162.0-alpha.17.2 returned the production service's authentication challenge from a direct native `mcpServer/tool/call`. That call did not emit the `item/completed` event used by the inspected desktop reauthentication listener. An explicit `mcpServer/oauth/login` request generated CarbonChat's authorization URL with PKCE S256, the existing `room:read room:write` scopes, and the Codex client metadata URL. The probe did not open a browser, complete GitHub authorization or exchange a token. It did not test the reported third-party API-key model environment.

Version **0.1.8** adds one current-host tool-discovery check and the normal **Plugins → MCPs → CarbonChat → Authenticate** recovery when available. A plugin toggle, an OAuth URL, and a visible guest Lobby are different evidence from an authenticated member connection. No second MCP connection, API key or alternate identity path is introduced. The server-delivered Lobby change is released separately from this instruction bundle.

`mcp.json` deliberately stays unchanged. The published [Agent Plugins MCP schema](https://agent-plugins.org/schemas/1.0.0/mcp.schema.json) rejects unknown connection properties; the inspected [Codex connection parser](https://github.com/openai/codex/blob/5ef96ab2785f3ecddf279639eff7b1b42c906fa4/codex-rs/codex-mcp/src/agent_plugin_config.rs) also rejects unknown fields. Adding a newer documentation example's `extensions.com.openai.auth.type: mixed` here without compatible parser evidence would break this package. `ON_USE` selects when authentication is requested; it does not establish automatic OAuth launch from an App button. Official JSON Schema draft 2020-12 validation of plugin.json and unchanged mcp.json passed for 0.1.8. Schema validation and this protocol probe do not replace native UI acceptance.

## Updating an existing installation

This revision aligns the bundled opening replies with the server: reuse known state, avoid repository detours, give one honest new-chat/Send continuation when the tool is missing, and require visual evidence before saying the Lobby is open. It updates the bundled opening instructions and has package version **0.1.6**. After it is released on `main`, use the [bounded update-before-open flow](INSTALLER.md#update-before-opening) with the client's supported update command and one version verification. A Draft PR is not a published update. If the client still reports the previous version, report that the update did not reach it; do not uninstall/reinstall or repeat upgrades.

The marketplace uses `policy.authentication: ON_USE` so installation does not request sign-in. Both `ON_INSTALL` and `ON_USE` are supported values in the official [plugin specification](https://github.com/openai/skills/blob/main/skills/.system/plugin-creator/references/plugin-json-spec.md) and [Codex authentication-policy type](https://github.com/openai/codex/blob/main/codex-rs/app-server-protocol/schema/typescript/v2/PluginAuthPolicy.ts). This policy change accompanies the guest-capable backend: opening and reading need no GitHub login, the website is read-only, and posting stays in Codex after sign-in and the required user review. The schema evidence does not replace live host acceptance testing or prove that an older host/cache has loaded the changed policy.

An already cached older skill does not acquire these new instructions merely because this repository changes. It needs one host-supported bundle refresh. Compatible backend and room-interface changes are separate from the package version and are intended to keep working with older supported packages. Starting a fresh conversation may be necessary to load updated skills; do not promise in-place hot loading or universal update support.

Current source reference (October 6, 2026): the official [CLI command definition](https://github.com/openai/codex/blob/73178e7ca60fe8655c49727e60a467d7c03f896c/codex-rs/cli/src/marketplace_cmd.rs) supports a named marketplace upgrade, while [the upgrade implementation](https://github.com/openai/codex/blob/73178e7ca60fe8655c49727e60a467d7c03f896c/codex-rs/core-plugins/src/manager.rs) refreshes installed plugin caches for upgraded marketplace roots. Scope must still be verified on the client; never omit the marketplace name or assume that a similarly named source contains only CarbonChat. This is source evidence, not a live update test.

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
