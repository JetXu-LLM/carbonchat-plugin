# CarbonChat

**One shared room for the humans behind the code.**

CarbonChat adds a single chat room, **The Lobby**, to your Codex workspace. Use it while an AI task is running, when you need a short break, or when you want to ask another person a question. You can also just read. *Build solo, not alone.*

It is a room for people, not a bot feed. Ordinary room chat doesn't need an AI turn.

## Install

**Install status:** The CarbonChat plugin package can be installed. Community access is still closed to the public. So far, only the approved owner account has been checked on the live service. It hasn't been tested with new public users or on Windows.

Copy this into Codex:

> Install CarbonChat from https://github.com/JetXu-LLM/carbonchat-plugin, help me sign in, and open The Lobby.

After installation, CarbonChat's setup guide is meant to continue in the same conversation. Depending on your Codex version, it may need a new conversation to load the tool. If so, it should tell you once. You make every sign-in, access, policy, age and profile choice yourself. This prompt doesn't ask Codex to post a message. The [installer guide](INSTALLER.md) is a technical reference for maintainers and agents, and includes the manual command path.

If CarbonChat is already installed and enabled, don't install it again. To reopen The Lobby without adding a prompt to a coding task in progress, click CarbonChat's Global entry in the app's navigation. For a task-specific Community view, open it from a dedicated conversation. If Codex hasn't loaded CarbonChat yet, use its supported refresh or reopen step once. Don't repeat install or new-chat loops. A tool listing alone doesn't verify that the room rendered.

## What to expect

1. Codex installs CarbonChat from this repository if needed, and may ask you to approve the installation. If your Codex version needs a new conversation to load CarbonChat, it should tell you once.
2. Codex tries to open The Lobby. If sign-in is needed, sign in with GitHub, then review CarbonChat's separate access request. Each is your choice.
3. Room admission is checked separately. If asked, read and decide whether to accept the current Participation Terms and Community Rules, confirm you've read the Privacy Notice, and confirm you're 18 or older.
4. You can read without setting a profile. Before posting, choose your own nickname and preset avatar. The screen previews how room members will see them.

Codex should wait for your approvals and profile choices. Setup isn't meant to post anything for you.

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

Optional translation sends only the messages you select to the Agent conversation linked to your Community view, and uses that conversation's normal usage limits. For translation separate from a running coding task, use a dedicated Community chat and choose GPT-6 Luna with low reasoning if your host offers it. CarbonChat can't set or verify that choice. Translation follows whichever model is currently selected in that conversation.

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

**安装状态：** CarbonChat 插件包可以安装。社区目前仍未向公众开放。到目前为止，只有获准的所有者账号在线上服务中接受过检查。尚未使用新的公众用户或在 Windows 上测试。

把下面这句话复制给 Codex：

> 请从 https://github.com/JetXu-LLM/carbonchat-plugin 安装 CarbonChat，带我完成登录并打开大厅。

安装后，CarbonChat 的设置引导会尽量在同一个对话中继续。视你的 Codex 版本而定，可能需要新建对话才能加载工具；如果需要，它应该只告诉你一次。登录、访问授权、政策、年龄和资料选择都由你自己决定。这条提示不会让 Codex 替你发帖。[安装指南](INSTALLER.md)是面向维护者和 Agent 的技术参考（目前为英文），其中包含手动命令方式。

如果 CarbonChat 已安装并启用，请勿重复安装。想重新打开 The Lobby，又不想在进行中的编码任务里加入提示，请点击应用导航中的 CarbonChat Global 入口。若想要针对某项任务的 Community 视图，请在单独的对话中打开。如果 Codex 尚未加载 CarbonChat，请按它支持的方式刷新或重新打开一次。不要反复安装或循环新建对话。仅凭工具列表无法确认聊天室已显示。

## 接下来会发生什么

1. 如有需要，Codex 会从本仓库安装 CarbonChat，并可能请你批准安装。如果你的 Codex 版本需要新建对话才能加载 CarbonChat，它应该告诉你一次。
2. Codex 会尝试打开 The Lobby。如果需要登录，请使用 GitHub 登录，然后单独审阅 CarbonChat 的访问请求；每一步都由你决定。
3. 房间准入会单独检查。如果系统要求，请阅读并决定是否接受当前《参与条款》和《社区规则》、确认已阅读《隐私说明》，并确认你已年满 18 周岁。
4. 不设置资料也可以阅读。发言前，请自行选择昵称和预设头像。界面会预览房间成员看到的样子。

Codex 应等待你完成必要的批准和资料选择；设置过程不应替你发帖。

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

可选翻译只会把你选中的消息发送到与你的 Community 视图关联的 Agent 对话，并计入该对话的正常用量。若想与正在运行的编码任务分开，请使用单独的 Community 对话，并在宿主支持时选择 GPT-6 Luna 和低推理强度。CarbonChat 无法设置或核实该选择。翻译会使用该对话当前选中的模型。

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
