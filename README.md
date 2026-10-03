# CarbonChat

**One shared room for the humans behind the code.**

CarbonChat adds a single chat room, **The Lobby**, to your Codex workspace. Use it while an AI task is running, when you need a short break, or when you want to ask another person a question. You can also just read. *Build solo, not alone.*

It is a room for people, not a bot feed. Ordinary room chat doesn't need an AI turn.

## Install

**Install status:** The public plugin package can be installed now, and the production service is deployed for the approved owner account only. One Mac installation has been reported as installed and enabled. Sign-in and the full Community interface have not yet been verified live. Public community access remains closed.

Copy this into Codex:

> Please install CarbonChat from https://github.com/JetXu-LLM/carbonchat-plugin for my Codex chats, then open Community. Ask me when you need sign-in or approval.

The prompt asks Codex to install CarbonChat and open Community; it does not ask Codex to post a message. Setup may still need your approval or sign-in. The [installer guide](INSTALLER.md) is a technical reference for maintainers and agents, and includes the manual command path.

If CarbonChat is already installed and enabled, don't install it again. In a new Codex conversation with CarbonChat enabled, ask it to open Community. The bundled workflow is intended to route that request through CarbonChat's MCP tool. If the tool is still unavailable, check Codex's plugin/MCP status and report the exact blocker. A browser URL or separate credential setup is not a substitute. If sign-in is required, use the host's own sign-in and permission flow. A tool listing alone doesn't verify that the room rendered.

## What to expect

1. Codex adds CarbonChat from this repository and may ask you to approve it.
2. Codex opens Community and asks you to **sign in with GitHub**.
3. You acknowledge the current community policy. Sign-in alone doesn't guarantee access: room admission and your account standing are also checked.
4. Once you're in, you can start reading. To post, pick a **nickname** and a **preset avatar**.

If something needs your approval, Codex will ask. It should not guess.

## Inside The Lobby

- **Messages and replies** in one chronological room
- **Reactions**
- **Saved**: your private bookmarks
- **Highlights**: messages picked by moderators

Saved and Highlights are views of the same room, not separate rooms.

**Reading is welcome.** After you sign in and acknowledge the policy, you can read without choosing a nickname or posting.

## Who sees what

- When you post, your chosen community nickname and preset avatar appear with your messages. Your GitHub real name and profile are not shown publicly by default.
- **GitHub sign-in** is the only login for now. CarbonChat does not ask for access to your private repositories.
- CarbonChat does not automatically copy your project into the room. You choose what to post and which messages to add to your private Agent conversation.
- **The room is not confidential.** Members can read, copy or screenshot messages. It is not end-to-end encrypted. Please don't post secrets, credentials, or someone else's confidential work.

## Using your Agent

You can choose messages from the room and add them to your private Agent conversation. This is always your choice.

If your Agent helps write a post, it stays a **private draft**. You review the exact text and confirm publication separately. A **via Agent** label shows how a message was sent. It says nothing about accuracy or who wrote it.

## FAQ

**Will this interrupt my coding task?**  
Ordinary room chat doesn't require AI work. CarbonChat is meant to sit beside your task. We don't promise automatic pinning in every chat, uninterrupted background updates, or support in every Codex host.

**Do I need to post?**  
No.

**Do my drafts sync across devices?**  
Agent-assisted post drafts are private to your CarbonChat account. Local recovery copies stay in this browser's storage; other devices or host partitions may not share them.

**Is this on the official plugin directory?**  
No. CarbonChat is installed from this GitHub repository, which is our own plugin source, not an official directory listing.

**What's in this repository?**  
Plugin details, an icon and install guidance. The backend is private.

**Something didn't work.**  
Ask Codex to show you the last step it tried and the error. General messages can be sent to support@carbonchat.codexforwork.com. It receives mail by forwarding, and no response time is promised. Don't include secrets or private project details.

## About

CarbonChat is operated by Jet Xu.

---

## 简体中文

**写代码的人，也值得有个说话的地方。**

CarbonChat 会在你的 Codex 工作区里加入一间聊天室：**The Lobby（大厅）**。AI 在跑任务、你想歇一会儿、想向别人请教，或者只想安静看看，都可以来。*Build solo, not alone.*

这里是人和人的房间，不是机器人信息流。普通聊天不需要 AI 运行。

## 安装

**安装状态：** 公开插件包现可安装，生产服务已为获准的所有者账号部署。已有一次 Mac 安装被报告为已安装并启用。登录和完整的 Community 界面尚未经实际验证。公众社区访问仍未开放。

把下面这句话复制给 Codex：

> 请从 https://github.com/JetXu-LLM/carbonchat-plugin 为我的 Codex 对话安装 CarbonChat,然后打开 Community。需要登录或授权时请问我。

这条提示请 Codex 安装 CarbonChat 并打开 Community，不会让 Codex 替你发帖。安装仍可能需要你批准或登录。[安装指南](INSTALLER.md)是面向维护者和 Agent 的技术参考（目前为英文），其中包含手动命令方式。

如果 CarbonChat 已安装并启用，请勿重复安装。在启用了 CarbonChat 的新 Codex 对话中，请它打开 Community。随附的工作流旨在将该请求交给 CarbonChat 的 MCP 工具处理。如果工具仍不可用，请查看 Codex 的插件/MCP 状态，并如实说明具体阻碍。浏览器网址或另行设置凭据都不能替代此流程。如果需要登录，请使用宿主应用自带的登录和授权流程。仅凭工具列表无法确认聊天室已显示。

## 接下来会发生什么

1. Codex 从本仓库添加 CarbonChat，可能请你确认。
2. Codex 打开 Community，请你**用 GitHub 登录**。
3. 你确认已知悉当前的社区政策。仅靠登录并不保证能进入：准入和账号状态也会被检查。
4. 进入后就能开始阅读。想发言时，先选一个**昵称**和一个**预设头像**。

需要你批准的地方，Codex 会先问你。

## 大厅里有什么

- **消息与回复**：按时间排列的同一间房
- **表情回应**
- **Saved（收藏）**：只有你自己能看到
- **Highlights（精选）**：由管理员挑选的消息

Saved 和 Highlights 只是同一间房的不同视图，不是另外的房间。

**只看不说也完全欢迎。** 登录并确认已知悉社区政策后，不选昵称、不发言，也可以阅读。

## 谁能看到什么

- 发言时，你选择的社区昵称和预设头像会显示在消息旁。默认情况下，你的 GitHub 真实姓名和个人资料不会公开显示。
- **目前只支持 GitHub 登录。** CarbonChat 不会请求访问你的私有仓库。
- CarbonChat 不会自动把你的项目复制到聊天室。你可以自行决定在房间里发布什么，以及把哪些消息加入私人 Agent 对话。
- **聊天室不保密。** 成员可以阅读、复制或截图消息，也没有端到端加密。请不要发布密钥、凭据，或他人的机密工作内容。

## 配合你的 Agent

你可以主动选中房间里的消息，加入你与 Agent 的私人对话，一切由你决定。

如果 Agent 帮你起草发言，它先是**私人草稿**。你需要检查最终文字，再单独确认发布。**via Agent** 标签只说明消息的发送方式，不代表内容准确，也不说明作者是谁。

## 常见问题

**会打断我的编码任务吗？**  
普通聊天室消息不需要 AI 工作。CarbonChat 的设计是放在任务旁边。我们不承诺在每个对话中自动固定、后台持续推送，或支持所有 Codex 宿主环境。

**必须发言吗?**  
不用。

**草稿能跨设备同步吗？**  
Agent 协助准备的发帖草稿仅对你的 CarbonChat 账号开放。用于恢复的本地副本保存在当前浏览器存储中，其他设备或宿主分区可能无法读取。

**它在官方插件目录里吗？**  
不在。这是我们自己维护的 GitHub 插件来源，不是官方目录收录。

**这个仓库里有什么?**  
插件信息、图标和安装说明。后端代码不公开。

**装不上怎么办？**  
让 Codex 告诉你最后执行的一步和报错。一般咨询可发送至 support@carbonchat.codexforwork.com。该地址通过转发接收邮件，不承诺响应时间。请不要附上密钥或私有项目细节。

## 关于

CarbonChat 由 Jet Xu 运营。
