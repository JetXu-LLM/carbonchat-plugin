---
name: setup-carbonchat
description: Continue an explicitly requested CarbonChat setup after installation, or resume it safely when CarbonChat is already installed.
---

Use this flow for an explicit install/open request or a post-install step started by the host. Preserve the original request. If it did not ask to open The Lobby, ask once: “Open The Lobby now?”

A request to “Continue CarbonChat setup” / “继续完成 CarbonChat 设置” with the plugin already installed is the one continuation. Treat installation as established and skip installation/status investigation. If neither the opener nor an authorized, observed UI entry is available, report that host connection blocker briefly and stop; do not give another new-chat link. An explicit sign-in request can still use the normal connection flow below.

If an open attempt explicitly requires authentication, keep the original request pending. After the user completes authentication and the client confirms success, continue or retry that pending open once without asking them to restate the task. Stop on an unclear result, refusal or still-missing connection; do not repeat login/open cycles.

1. Reuse the successful install result or known installed state. This is setup, not another installation: do not add the marketplace again, reinstall, edit project settings or add an MCP connection. Check read-only plugin status once only if installation state is unknown.
2. If the host explicitly requires CarbonChat sign-in or connection, use its normal connection flow and pause for the user. A local CLI client configured with server `carbonchat` supports `codex mcp login carbonchat`; let the user complete the browser flow. Do not handle callbacks or supply scopes. An `unknown` status is inconclusive and does not itself justify login. CLI authentication does not establish another client's connection or room admission.
3. For the explicit open request, make one open attempt with the installed CarbonChat plugin's `open_carbonchat_thread` and `{}` when it is available. This skill owns the post-install attempt; do not also invoke the open skill or substitute a staging tool. If the tool is missing, authorized host UI access plus an observed real CarbonChat Global/sidebar entry permits one normal click. Do not guess room URLs, search for hidden entrypoints, edit configuration or extract credentials. Stop on an actual access denial or UI safety rejection; do not switch routes to bypass it.
4. If neither the loaded opener nor the authorized, observed UI entry is available, give the one new-chat continuation below only for an initial request. Do not reread help or search for a refresh command. The user opens the link and presses Send; never send into an existing coding task. If neither the opener nor an authorized, observed UI entry is available in that new chat, state that host connection blocker and stop. Do not reinstall or offer another new chat. Missing tools do not prove denied admission.
5. If sign-in or authorization is still required by the host, continue its normal GitHub sign-in and OAuth flow. Do not restart a flow that already completed successfully. Let the user operate sign-in and review access. Never handle credentials or callback data. Pause for the user to review any Participation Terms, Community Rules, Privacy Notice or age confirmation; do not accept or attest for them. If access is denied or pending, report that actual result and stop.
6. Reading does not require a profile. Let the user choose a nickname and preset avatar if they want to post. Setup does not post, react, prepare a draft or transfer room content into the Agent chat. Any later Agent-assisted publication requires the user's review of the exact text and separate confirmation.
7. Reply with the observed result or the next user action, briefly. Say “The Lobby is open” only with supported visual evidence of the room. A successful opener call alone establishes an open request, not rendering or an enabled composer. Do not append model recommendations, maintainer history or unobserved admission restrictions.

## One new-chat continuation

Use the conversation's language:

- English: “CarbonChat is installed. [Continue setup in a new chat](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20Continue%20CarbonChat%20setup.%20It%20is%20already%20installed%3B%20open%20The%20Lobby.), then press Send.”
- 简体中文：“CarbonChat 已安装。[在新对话中继续设置](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20%E7%BB%A7%E7%BB%AD%E5%AE%8C%E6%88%90%20CarbonChat%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E6%8F%92%E4%BB%B6%E5%B7%B2%E5%AE%89%E8%A3%85%EF%BC%8C%E8%AF%B7%E6%89%93%E5%BC%80%E5%A4%A7%E5%8E%85%E3%80%82)，然后点击发送。”

These links use the verified `carbonchat@carbonchat-community` identity and the [official prefilled-chat format](https://learn.chatgpt.com/docs/reference/commands#start-a-chat-with-a-plugin). They do not auto-send or install from GitHub. Their behavior with this custom marketplace has not been observed on the target desktop host; do not describe it as tested. If the client cannot open `codex://` links, tell the user to start one new Codex chat, select the installed CarbonChat plugin with `@`, and send “Continue CarbonChat setup. It is already installed; open The Lobby.” (简体中文：“继续完成 CarbonChat 设置：插件已安装，请打开大厅。”).

For later visits without adding a prompt to a coding task, the user can click CarbonChat's sidebar entry when it is visible. Do not assume it is visible or permanently pinned.
