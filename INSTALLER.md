# Install and open CarbonChat

Use these steps when the user asks to install CarbonChat and open The Lobby. Keep the user's reply to the next action they need to take.

## Agent steps

1. **Install only if needed.** A request to continue setup with CarbonChat already installed is the one continuation, not a fresh install: skip installation and repeated status checks, and go to opening. Reuse an installation result already established in this conversation. If the state is unknown, check once with `codex plugin list --marketplace carbonchat-community --json`. An installed, enabled result means skip installation. If disabled, use the host's normal enable action within the user's request. Before a new installation, check the target CLI version and command help once, then run only the missing step:

   ```text
   codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main
   codex plugin add carbonchat@carbonchat-community
   ```

   Skip marketplace-add when this source is already configured. Use the host's normal installation approval. Do not change project configuration or add a separate MCP connection.

2. **Open after installation.** Successful install output is enough to proceed: do not reread help or manifests to reconfirm it. If the host explicitly reports that CarbonChat needs sign-in or connection, use its normal connection flow and pause for the user. For a local CLI client whose configured server is `carbonchat`, the supported command is `codex mcp login carbonchat`; let the user complete the browser sign-in and access review. Do not use manual callback entry, supply scopes or add a new MCP connection. A status of `unknown` is inconclusive, not a reason to initiate OAuth. A CLI login result does not establish another client's authentication or room admission.

   If the installed CarbonChat tool `open_carbonchat_thread` is available, make one open attempt with `{}`. The bundled `setup-carbonchat` skill owns this post-install attempt; do not also run the open skill for the same request. If the opener is missing, and the Agent already has authorized host UI access and has observed the real CarbonChat Global/sidebar entry, click that entry once. Tool absence is not access denial. An actual access denial or UI safety rejection ends the attempt; do not switch routes to bypass it. Do not guess room URLs, search for hidden entrypoints, edit configuration or handle credentials.

   If that attempt explicitly requires authentication, keep the original open request pending. After the user completes authentication and the client confirms success, continue or retry the pending open once. Do not ask the user to restate the task. An unclear result, access refusal or still-missing connection ends the attempt; do not repeat login/open cycles.

3. **If neither opening route is available, offer one continuation only for the initial request.** If the request already says to continue installed CarbonChat setup, reply briefly that this host has not loaded the room tool and no authorized, observed UI entry is available. Do not offer another new chat or repeat installation/status checks. Use the reply below in the user's language. The link prefills a new chat with the verified plugin mention `plugin://carbonchat@carbonchat-community` and an open request. The user presses **Send**; it does not auto-send. Never send a prompt into an existing coding task.

   English:

   > CarbonChat is installed. [Continue setup in a new chat](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20Continue%20CarbonChat%20setup.%20It%20is%20already%20installed%3B%20open%20The%20Lobby.), then press Send.

   简体中文：

   > CarbonChat 已安装。[在新对话中继续设置](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20%E7%BB%A7%E7%BB%AD%E5%AE%8C%E6%88%90%20CarbonChat%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E6%8F%92%E4%BB%B6%E5%B7%B2%E5%AE%89%E8%A3%85%EF%BC%8C%E8%AF%B7%E6%89%93%E5%BC%80%E5%A4%A7%E5%8E%85%E3%80%82)，然后点击发送。

   If the client does not open `codex://` links, the equivalent action is to start one new Codex chat, select the installed CarbonChat plugin with `@`, and send “Continue CarbonChat setup. It is already installed; open The Lobby.” (简体中文：“继续完成 CarbonChat 设置：插件已安装，请打开大厅。”). If neither the opener nor an authorized, observed UI entry is available in that new chat, stop and name that host connection blocker once. Do not reinstall, offer another new chat, or search for an unspecified refresh command. A missing tool does not establish that the account was denied admission.

4. **Pause at the user's choices.** Use only the host's normal sign-in and connection flow. The user completes GitHub sign-in, reviews CarbonChat access, and makes any policy, age or profile choices. Report a denied or pending access result only when the service actually returns it. Reading does not require a profile. Setup does not post, react, prepare a message draft or transfer room messages into the Agent chat; later publication requires review of the exact text and separate confirmation.

5. **Confirm the observed result briefly.** A visible room supports “The Lobby is open.” An opener result alone supports only that the open request was made. If the user must act, state that step instead of listing internal states or historical restrictions.

For later visits, the user can click the CarbonChat sidebar entry when it is visible. The Global entry opens outside a coding conversation; the Thread/Community entry opens in that conversation's side panel. Neither is a reason to change or steer a running task.

## Connection exceptions

When the opener is absent, reuse any supported MCP status already available. For the initial request, inspect it once only if an authentication check is needed; a continuation request is not a reason to repeat the investigation. Explicit “not logged in” or “authentication required” supports the sign-in step above; `unknown` does not. Keep the observed CLI state separate from the desktop or cloud task's connection state. If one new chat still lacks the tool, report that specific host connection blocker and stop. Do not infer a service admission decision from missing tools.

References: [OAuth-capable MCP servers](https://learn.chatgpt.com/docs/extend/mcp#other-cli-commands), [new-chat plugin links](https://learn.chatgpt.com/docs/reference/commands#start-a-chat-with-a-plugin), [loading a newly installed plugin](https://learn.chatgpt.com/docs/plugins).
