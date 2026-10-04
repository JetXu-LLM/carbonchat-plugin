---
name: setup-carbonchat
description: Continue an explicitly requested CarbonChat setup after installation, or resume it safely when CarbonChat is already installed.
---

Use this setup flow only when the user explicitly asked to install or open CarbonChat, or when the host starts it as the post-install step of an installation the user chose. A question or mention of CarbonChat alone is not permission to install or open it.

1. Check the current conversation for the user's original intent. If it explicitly asked to open The Lobby, continue toward opening it once. If setup was started without an explicit request to open, ask once: “Open The Lobby now?” Do not assume.
2. Treat this as a post-install setup. Do not reinstall the plugin, add its marketplace again, edit project configuration, create a separate MCP connection, or start an install/new-chat loop. If supported read-only plugin status is available, use it once to check whether CarbonChat is installed and enabled. If status is unavailable or unclear, report that exact limit and use the host's supported next step.
3. If the user explicitly asked to open The Lobby and `open_carbonchat_thread` is available, call it exactly once with `{}`. Do not use a browser, guessed URL, shell, app lookup, or direct MCP configuration as an alternate route. If the tool is not available, do not retry or reinstall. Point to the host's supported refresh/reopen step; if the host requires a new conversation, say so once and preserve the original setup intent without injecting a prompt into a running coding task.
4. Use only the host's supported GitHub sign-in and OAuth approval flow. Let the user review and operate each required sign-in or access approval. Never request, read, copy, or handle passwords, one-time codes, tokens, callback URLs, or authorization codes. GitHub sign-in, CarbonChat access approval, room admission, and policy acceptance are separate states. Stop if access is denied or pending; never bypass admission.
5. The in-room interface asks the user to review the Participation Terms and Community Rules, confirm they read the Privacy Notice, and attest to eligibility. Never check a box, accept terms, or attest on the user's behalf. Continue only after the user completes the choices in the CarbonChat UI.
6. If a community profile is required before posting, let the user choose their own nickname and local avatar. The UI previews them as visible to room members. Never infer or copy a profile from GitHub, save a profile choice for them, or require a profile for reading.
7. Do not compose, send, react to, or post a room message; do not prepare an Agent draft or send room content to the Agent as part of setup.
8. Report only the phase actually established: installed, signed in, CarbonChat access approved, admitted, policies accepted, profile saved, or composer ready. A listed tool or “opened” tool result alone does not prove the room rendered, admission passed, or the composer is enabled. Claim “ready to message” only if the host directly exposes an enabled composer or a supported visual check confirms it; otherwise say what is still needed.

After a successful `open_carbonchat_thread` call with `{}`, and only on the first explicit open or setup request in the current conversation, add one short reminder after the normal confirmation. Use the conversation's language and this reviewed reminder verbatim:

- English: “Tip: for translation, choose GPT-6 Luna with low reasoning in a dedicated Community chat, if your host offers it. CarbonChat can’t set it for you.”
- 简体中文：“提示：若要使用翻译，建议在单独的 Community 对话中选择 GPT-6 Luna 和低推理强度（如果宿主提供）。CarbonChat 无法替你设置。”

This is for optional translation only; ordinary room chat does not need a model. Recommend a dedicated Community chat to keep translation separate from the main coding task. CarbonChat cannot read or verify the model or reasoning level. Do not say a model was changed or selected, do not claim the room rendered or is ready to use, and do not promise speed or token savings. Do not make any extra tool call to inspect settings or models. Omit the reminder if the open fails or the user asked for no extra text. Do not repeat it on later opens or translation requests in the same conversation.

For later opening without steering a running coding conversation, prefer the host's native Global CarbonChat entrypoint, which the user opens manually. Use the Community entrypoint inside a dedicated conversation when the user wants a task-specific view. A prompt in an existing coding chat is only appropriate when the user explicitly asks to use that chat.
