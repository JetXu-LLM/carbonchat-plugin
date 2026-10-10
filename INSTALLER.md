# Install CarbonChat and open The Lobby

Canonical public instructions: <https://carbonchat.codexforwork.com/install.md>. If the web reader cannot retrieve that endpoint, use this verified repository text at <https://raw.githubusercontent.com/JetXu-LLM/carbonchat-plugin/main/INSTALLER.md>.

Use the same request for a new or existing installation:

```text
Install CarbonChat if needed and open The Lobby inside this Codex host. Follow https://carbonchat.codexforwork.com/install.md; prefer the host's native Install and Run setup flow.
```

```text
如有需要安装 CarbonChat，并在当前 Codex 宿主内打开大厅。遵循 https://carbonchat.codexforwork.com/install.md，优先使用宿主原生的 Install 和 Run setup 流程。
```

## Check and install in this host

Reuse the installation result for this request. If unknown, check this host's plugin status once. Missing tools alone do not prove absence. Skip installation when installed and enabled. Enable a disabled plugin only through a supported action and required approval. Install only when absence is established.

Use this host's actual installation tool or Plugins interface.
In the ChatGPT desktop app, open Plugins.
If the source is missing and **Add plugin marketplace** is available, follow these steps:

1. Open **Add plugin marketplace**.
2. Set **Source** to `https://github.com/JetXu-LLM/carbonchat-plugin`.
3. Set **Git ref** to `main`.
4. Leave **Sparse paths** empty.
5. Choose **Add marketplace**.

Then select CarbonChat from its marketplace.
Choose **Install**, then **Run setup** when offered. This package already declares its setup skill. Native installation can refresh this running desktop’s MCP runtime, and setup can continue in the existing conversation. Preserve the original request to open The Lobby.
Let the user review required installation prompts.
Source registration alone does not install the plugin.
Do not add a separate custom MCP connection.

Prefer the desktop’s native **Install → Run setup** flow. A bundled CLI sharing configuration files does not prove that the running desktop refreshed this conversation. Do not silently fall back to CLI installation when native tools are absent: use an available native Plugins action or report that specific boundary and one supported next action. Use a CLI only with evidence that it controls this same host and configuration scope. Check command support once. Supported local Codex commands are:

```text
codex plugin list --marketplace carbonchat-community --json
codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main
codex plugin add carbonchat@carbonchat-community
```

Run only the missing step. Another environment's CLI result does not prove installation in ChatGPT. If this host cannot install this source, report the last verified state and one supported next action. Do not repeat the prompt, invent a command, manually edit configuration or execute downloaded scripts.

For an existing installation on a fresh request, check its configured source for a newer version at most once. Use one supported scoped update only for a confirmed newer version after required approval. Announce it immediately before it starts; verify the installed version once. If checking or updating fails or is unsupported, open the compatible installed version. An update refusal alone does not deny a separately permitted open. Never uninstall/reinstall or poll in the background. A fresh install and its continuations need no update check.

## Load and open once

Use the actual CarbonChat opener and its declared parameters. If this host offers tool discovery, use it once to load CarbonChat before declaring the opener absent. If the host reports CarbonChat authentication or reauthentication is required, use the normal connection flow below before declaring the opener unavailable. Installation and current-conversation tool loading are separate states. The published Thread opener is `open_carbonchat_thread` with `{}`. Setup owns the post-install attempt; the open skill owns a fresh request for an existing installation. Reuse results; do not call both. If the tool is absent, authorized UI access and an observed real CarbonChat entry permit one normal click. Do not replace it with a browser URL or staging tool.

Do not infer that a new conversation is required merely from CLI success or a missing tool. Complete an offered native Run setup handoff and use an actually exposed native refresh/discovery control once. Never inject app-server RPC into the desktop or launch a separate server as a substitute for refresh. If the current host still requires a new conversation to load the installed plugin, offer one continuation: start one new Codex chat, select the installed CarbonChat plugin with `@`, and send **Continue CarbonChat setup. It is already installed; open The Lobby.** / **继续完成 CarbonChat 设置：插件已安装，请打开大厅。** The user presses Send; never send into a running task. If tools or the UI entry remain absent, report that host blocker and stop. Do not reinstall or offer a second new chat.

Guest reading needs no GitHub sign-in. Reuse a working connection. If this host explicitly requires connection, use its normal flow and let the user complete it. When the user explicitly requests sign-in, call the protected `carbonchat_sign_in` tool in this host’s normal tool flow, preserving any supplied `requestId`. The Lobby button may send this visible request to the current chat after a direct app call returns a challenge; it uses the linked model’s allowance. The host may ask for connection confirmation before opening GitHub. The user completes those prompts and reviews access. Do not automatically repeat a request after uncertain delivery or cancellation. An authorization URL or enabled plugin does not prove connection success. After confirmed success, retry the pending open once. Stop on cancellation, refusal, failure, unclear state or denied access. Never handle credentials, MFA or callbacks. The user reviews new permissions, policies, age and profile choices. Opening authorizes no post, reaction, draft or transfer of messages into the Agent conversation.

## Verify the actual result

Keep installed, tool available, open request accepted and Lobby visible separate. Only a visible MCP App in this Codex host supports **The Lobby is open in Codex.** An opener result alone supports **I asked Codex to open The Lobby; visibility is not verified.** On success, reply briefly. On a blocker, give the last verified result and one real next action. Missing tools do not establish a service admission decision.

Browsers can read instructions or show required authentication pages. The [website Lobby](https://carbonchat.codexforwork.com/lobby) is a **read-only fallback**, not installation or plugin opening. Offer it only as that distinct fallback. Reading needs no profile. Posting in the plugin requires the user's GitHub sign-in, policy/18+ review, unique nickname, and service admission/account checks. An avatar is preselected and can be changed by the user.

References: [Plugins](https://learn.chatgpt.com/docs/plugins), [plugin packaging and marketplaces](https://developers.openai.com/plugins/build/plugins).
