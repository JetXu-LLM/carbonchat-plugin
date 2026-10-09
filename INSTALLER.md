# Install CarbonChat and open The Lobby

Canonical public instructions: <https://carbonchat.codexforwork.com/install.md>.

Use the same request for a new or existing installation:

```text
Read and follow https://carbonchat.codexforwork.com/install.md. Install the CarbonChat plugin if needed, then open its Lobby MCP App inside this Codex host, not a browser page. Do not post for me.
```

```text
读取并执行 https://carbonchat.codexforwork.com/install.md。如未安装，请安装 CarbonChat 插件，然后调用其 MCP App 在当前 Codex 宿主内打开大厅，不要用浏览器网页代替。不要替我发言。
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
Choose **Install**.
Let the user review required installation prompts.
Source registration alone does not install the plugin.
Do not add a separate custom MCP connection.

Use a CLI only with evidence that it controls this same host and configuration scope. Check command support once. Supported local Codex commands are:

```text
codex plugin list --marketplace carbonchat-community --json
codex plugin marketplace add JetXu-LLM/carbonchat-plugin --ref main
codex plugin add carbonchat@carbonchat-community
```

Run only the missing step. Another environment's CLI result does not prove installation in ChatGPT. If this host cannot install this source, report the last verified state and one supported next action. Do not repeat the prompt, invent a command, manually edit configuration or execute downloaded scripts.

For an existing installation on a fresh request, check its configured source for a newer version at most once. Use one supported scoped update only for a confirmed newer version after required approval. Announce it immediately before it starts; verify the installed version once. If checking or updating fails or is unsupported, open the compatible installed version. An update refusal alone does not deny a separately permitted open. Never uninstall/reinstall or poll in the background. A fresh install and its continuations need no update check.

## Load and open once

Use the actual CarbonChat opener and its declared parameters. The published Thread opener is `open_carbonchat_thread` with `{}`. Setup owns the post-install attempt; the open skill owns a fresh request for an existing installation. Reuse results; do not call both. If the tool is absent, authorized UI access and an observed real CarbonChat entry permit one normal click. Do not replace it with a browser URL or staging tool.

If the current host requires a new conversation to load the installed plugin, offer one continuation: start one new Codex chat, select the installed CarbonChat plugin with `@`, and send **Continue CarbonChat setup. It is already installed; open The Lobby.** / **继续完成 CarbonChat 设置：插件已安装，请打开大厅。** The user presses Send; never send into a running task. If tools or the UI entry remain absent, report that host blocker and stop. Do not reinstall or offer a second new chat.

Guest reading needs no GitHub sign-in. Reuse a working connection. If this host explicitly requires connection, use its normal flow and let the user complete it. After confirmed success, retry the pending open once. Stop on cancellation, refusal, failure, unclear state or denied access. Never handle credentials, MFA or callbacks. The user reviews new permissions, policies, age and profile choices. Opening authorizes no post, reaction, draft or transfer of messages into the Agent conversation.

## Verify the actual result

Keep installed, tool available, open request accepted and Lobby visible separate. Only a visible MCP App in this Codex host supports **The Lobby is open in Codex.** An opener result alone supports **I asked Codex to open The Lobby; visibility is not verified.** On success, reply briefly. On a blocker, give the last verified result and one real next action. Missing tools do not establish a service admission decision.

Browsers can read instructions or show required authentication pages. The [website Lobby](https://carbonchat.codexforwork.com/lobby) is a **read-only fallback**, not installation or plugin opening. Offer it only as that distinct fallback. Reading needs no profile. Posting in the plugin requires the user's GitHub sign-in, policy/18+ review, unique nickname, and service admission/account checks. An avatar is preselected and can be changed by the user.

References: [Plugins](https://learn.chatgpt.com/docs/plugins), [plugin packaging and marketplaces](https://developers.openai.com/plugins/build/plugins).
