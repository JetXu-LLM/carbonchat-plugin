# Open CarbonChat Lobby

Use these steps for a request to open CarbonChat Lobby, whether or not it is already installed. Keep the user's reply to the next action they need to take.

Use the loaded CarbonChat opener as the opening route. Reuse known installation state and the one bounded update check; do not detour through repository files, command help or technical diagnostics when the supported actions are already known. Keep those checks quiet unless the user must act or an update is about to start. An opener response alone is not visual confirmation.

## One request, one decision sequence

The same reader prompt works for new and existing users:

- English: `Open CarbonChat Lobby for me: https://github.com/JetXu-LLM/carbonchat-plugin`
- 简体中文：`请帮我打开 CarbonChat Lobby：https://github.com/JetXu-LLM/carbonchat-plugin`

1. **Not installed:** install through this host's supported flow, then open. Reuse a successful installation result; do not add an update check immediately after that installation.
2. **Already installed:** perform one [bounded version check](#update-before-opening) against the configured CarbonChat source. If a newer version is confirmed, any required approval has been granted and the supported scoped update is about to start, say **“New version found. Updating…”** / **“发现新版本，正在更新…”**, update through the supported host flow, verify the installed version once, then open. If no newer version is found, open.
3. **Continuation of this request:** reuse its installation, version-check and update results. A new chat or completed authentication does not start another check, installation or update. One skill owns the open attempt.
4. **Check or update unavailable:** report a relevant failure briefly and try opening the compatible installed version. An actual denial of opening or reading, or explicit incompatibility, ends the attempt. A refusal of the update alone does not block a separately permitted open. Never loop, poll in the background, uninstall/reinstall or execute unknown scripts.

Use only commands the current host supports. The CLI commands below are for a verified local Codex CLI; they do not establish a desktop or cloud client's state. Host approvals and the user's sign-in, access, policy, age and profile choices remain with the user.

## Agent steps

1. **Resolve installation once.** A request to continue setup with CarbonChat already installed is the one continuation, not a fresh install: skip installation and repeated status checks, and go to opening. Reuse an installation result already established for this request. If the state is unknown, use the host's supported read-only plugin status once; for a supported local CLI, use `codex plugin list --marketplace carbonchat-community --json`. Reuse its installed version for the bounded check. An installed, enabled result means skip installation and follow [Update before opening](#update-before-opening) for a fresh request. If disabled, use the host's normal enable action within the user's request. Before a new installation, check the target CLI version and command help once, then run only the missing step:

   ```text
   codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main
   codex plugin add carbonchat@carbonchat-community
   ```

   Skip marketplace-add when this source is already configured. Use the host's normal installation approval. Do not change project configuration or add a separate MCP connection.

2. **Open after installation or the bounded update check.** Successful install output is enough to proceed: do not reread help or manifests to reconfirm it. Open and read as a guest without requiring GitHub sign-in. Posting requires sign-in in Codex; the website is read-only. If the host explicitly reports that CarbonChat needs sign-in or connection, use its normal connection flow and pause for the user. For a local CLI client whose configured server is `carbonchat`, the supported command is `codex mcp login carbonchat`; let the user complete the browser sign-in and access review. Do not use manual callback entry, supply scopes or add a new MCP connection. A status of `unknown` is inconclusive, not a reason to initiate OAuth. A CLI login result does not establish another client's authentication or room admission.

   If the installed CarbonChat tool `open_carbonchat_thread` is available, make one open attempt with `{}`. The bundled `setup-carbonchat` skill owns the post-install attempt; the `open-carbonchat-community` skill owns a fresh opening of an existing installation. Do not run both for the same request. If the opener is missing, and the Agent already has authorized host UI access and has observed the real CarbonChat Global/sidebar entry, click that entry once. Tool absence is not access denial. An actual access denial or UI safety rejection ends the attempt; do not switch routes to bypass it. Do not guess room URLs, search for hidden entrypoints, edit configuration or handle credentials.

   If that attempt explicitly requires authentication, keep the original open request pending. After the user completes authentication and the client confirms success, continue or retry the pending open once. Do not ask the user to restate the task. An unclear result, access refusal or still-missing connection ends the attempt; do not repeat login/open cycles.

3. **If neither opening route is available, offer one continuation only for the initial request.** If the request already says to continue installed CarbonChat setup, reply briefly that this host has not loaded the room tool and no authorized, observed UI entry is available. Do not offer another new chat or repeat installation/status checks. Use the reply below in the user's language. The link prefills a new chat with the verified plugin mention `plugin://carbonchat@carbonchat-community` and an open request. The user presses **Send**; it does not auto-send. Never send a prompt into an existing coding task.

   English:

   > CarbonChat is installed, but I can’t open The Lobby from this chat. [Continue setup in a new chat](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20Continue%20CarbonChat%20setup.%20It%20is%20already%20installed%3B%20open%20The%20Lobby.), then press Send.

   简体中文：

   > CarbonChat 已安装，但我无法在当前对话中打开大厅。[在新对话中继续设置](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20%E7%BB%A7%E7%BB%AD%E5%AE%8C%E6%88%90%20CarbonChat%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E6%8F%92%E4%BB%B6%E5%B7%B2%E5%AE%89%E8%A3%85%EF%BC%8C%E8%AF%B7%E6%89%93%E5%BC%80%E5%A4%A7%E5%8E%85%E3%80%82)，然后点击发送。

   If the client does not open `codex://` links, the equivalent action is to start one new Codex chat, select the installed CarbonChat plugin with `@`, and send “Continue CarbonChat setup. It is already installed; open The Lobby.” (简体中文：“继续完成 CarbonChat 设置：插件已安装，请打开大厅。”). If neither the opener nor an authorized, observed UI entry is available in that new chat, stop and name that host connection blocker once. Do not reinstall, offer another new chat, or search for an unspecified refresh command. A missing tool does not establish that the account was denied admission.

4. **Pause at the user's choices.** When required, use only the host's normal sign-in and connection flow. The user completes GitHub sign-in, reviews CarbonChat access, and makes any policy, age or profile choices. Report a denied or pending access result only when the service actually returns it. Reading does not require a profile. Setup does not post, react, prepare a message draft or transfer room messages into the Agent chat; later publication requires review of the exact text and separate confirmation.

5. **Confirm the observed result briefly.** A visible room supports “The Lobby is open.” An opener result alone supports: “I’ve asked Codex to open The Lobby. Check for the panel; you can read without signing in.” / “我已请求 Codex 打开大厅，请查看面板。无需登录即可阅读。” Do not append model recommendations. If the user must act, state that step instead of listing internal states or historical restrictions.

For later visits, the user can click the CarbonChat sidebar entry when it is visible. The Global entry opens outside a coding conversation; the Thread/Community entry opens in that conversation's side panel. Neither is a reason to change or steer a running task.

## Update before opening

For a fresh request to open installed CarbonChat, perform one bounded package-version check before the normal open attempt. The Agent reading this installer may complete it before the open skill loads; pass that result forward rather than checking twice. Reuse any check or update already performed for that request. A setup, new-chat or authentication continuation is the same request, not a reason to check again.

1. Reuse the observed installed version or obtain it once from the host's supported read-only plugin status. Use its supported plugin-update check, or compare that version with `plugin.json` from the already configured CarbonChat source and ref. Check only that source and package; do not add or replace a marketplace or update unrelated plugins. An unavailable or ambiguous version does not establish an update. Do not treat a backend or room-interface release as proof that the plugin package needs updating. If no newer package is found, proceed directly to opening.
2. If a newer package is confirmed and the host supports updating it, use that normal scoped update flow. For a CLI, inspect its current command help once unless that support is already known for this client. Use `codex plugin marketplace upgrade carbonchat-community` only when the CLI supports it and the existing configured marketplace is this repository and has been verified to contain only CarbonChat. If that scope cannot be verified, skip the command. Respect any required approval before starting. Immediately before the supported update starts, tell the user **“New version found. Updating…”** or **“发现新版本，正在更新…”**, matching the conversation's language. Do not give this notice for a failed check, an unavailable update flow or an update awaiting approval.
3. After one update attempt, verify the installed CarbonChat package version once with the supported plugin-status command, such as `codex plugin list --marketplace carbonchat-community --json`. Compare it with the newer version found in step 1. Do not claim success from the update request alone. If the version is unchanged or cannot be verified, say so briefly and proceed with the compatible installed version; do not retry the update.
4. Respect the host's approvals, sign-in, MFA and permission choices. Do not grant new access, handle credentials, change models, manually uninstall or reinstall, edit configuration or execute downloaded scripts. If the host requires a fresh conversation to load the bundle, use the existing one-continuation flow; never send into or restart a running coding task.
5. If checking or updating is unsupported, unavailable, refused or fails, continue the normal open flow with the installed compatible version. A refusal of the update alone does not block a separately permitted open. Stop if the host or room actually denies opening, or if the installed version is explicitly incompatible; do not bypass either. Do not repeat upgrades, add a background update poll or heartbeat or make the user restate the open request.

## Guest reading and posting

Open and read without GitHub sign-in. The website is read-only; posting is available in Codex after GitHub sign-in and the user's review of the current Participation Terms, Privacy Notice, Community Rules and 18+ confirmation. Posting also depends on admission and account standing. Do not start sign-in solely for an open/read request. If the host explicitly requires connection, use its normal flow above. Never turn an open/read request into permission to post or bypass admission, access or consent requirements.

## Connection exceptions

When the opener is absent, reuse any supported MCP status already available. For the initial request, inspect it once only if an authentication check is needed; a continuation request is not a reason to repeat the investigation. Explicit “not logged in” or “authentication required” supports the sign-in step above; `unknown` does not. Keep the observed CLI state separate from the desktop or cloud task's connection state. If one new chat still lacks the tool, report that specific host connection blocker and stop. Do not infer a service admission decision from missing tools.

References: [OAuth-capable MCP servers](https://learn.chatgpt.com/docs/extend/mcp#other-cli-commands), [new-chat plugin links](https://learn.chatgpt.com/docs/reference/commands#start-a-chat-with-a-plugin), [loading a newly installed plugin](https://learn.chatgpt.com/docs/plugins).
