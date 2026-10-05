# CarbonChat

**One shared room for the humans behind the code.**

CarbonChat adds a single chat room, **The Lobby**, to your Codex workspace. Use it while an AI task is running, when you need a short break, or when you want to ask another person a question. You can also just read. *Build solo, not alone.*

It is a room for people, not a bot feed. Ordinary room chat doesn't need an AI turn.

## Install

Copy this into Codex:

> Install CarbonChat from https://github.com/JetXu-LLM/carbonchat-plugin, help me sign in, and open The Lobby.

Codex installs CarbonChat if needed, then tries to open The Lobby. If setup needs a new chat, [continue setup here](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20Continue%20CarbonChat%20setup.%20It%20is%20already%20installed%3B%20open%20The%20Lobby.) and press **Send**. The link prefills a request to the installed plugin; it does not send it for you. You don't need to install CarbonChat again.

For later visits, use the CarbonChat entry in the app's sidebar when it is visible. This opens the room without adding a prompt to a coding task. The [installer guide](INSTALLER.md) contains the Agent steps.

## What to expect

1. Approve installation if Codex asks. If CarbonChat is already installed, setup continues from there.
2. Complete GitHub sign-in and review CarbonChat's access request when prompted. The service checks whether your account can enter the room.
3. Review any Participation Terms, Community Rules, Privacy Notice and age confirmation yourself.
4. You can read without setting a profile. Before posting, choose your nickname and preset avatar in the room.

Setup does not post messages. If an Agent later helps draft one, you review the exact text and confirm publication separately.

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

Translate a message with your linked Agent, or opt in to automatic translation of new messages from others while your CarbonChat view is open and visible. Translation uses that Agent's allowance. Automatic translation is off by default, applies only to that view, and doesn't catch up on earlier or missed messages. You can turn it off in Settings. We recommend a separate CarbonChat conversation with Luna · Light, if available. CarbonChat can't choose or verify the model.

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
Ask Codex to show you the last step it tried and the error, then [report a bug](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=1-bug-report.yml). Remove any private information before sharing.

## Feedback

[Report a bug](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=1-bug-report.yml) or [suggest a feature](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=2-feature-idea.yml). English and Chinese are welcome. Please check [existing issues](https://github.com/JetXu-LLM/carbonchat-plugin/issues) first.

GitHub issues are public. Don't include passwords, tokens, OAuth sign-in or callback URLs, private chats, or personal data. Remove these from screenshots too.

For security concerns or general questions, email [support@carbonchat.codexforwork.com](mailto:support@carbonchat.codexforwork.com). Don't send passwords or tokens. Mail is received by forwarding; no response time is promised.

## About

CarbonChat is operated by Jet Xu.

---

## 简体中文

**写代码的人，也值得有个说话的地方。**

CarbonChat 会在你的 Codex 工作区里加入一间聊天室：**The Lobby（大厅）**。AI 在跑任务、你想歇一会儿、想向别人请教，或者只想安静看看，都可以来。*Build solo, not alone.*

这里是人和人的房间，不是机器人信息流。普通聊天不需要 AI 运行。

## 安装

把下面这句话复制给 Codex：

> 请从 https://github.com/JetXu-LLM/carbonchat-plugin 安装 CarbonChat，带我完成登录并打开大厅。

Codex 会在需要时安装 CarbonChat，然后尝试打开大厅。如果设置需要新对话，请[点这里继续设置](codex://new?prompt=%5B%40CarbonChat%5D%28plugin%3A%2F%2Fcarbonchat%40carbonchat-community%29%20%E7%BB%A7%E7%BB%AD%E5%AE%8C%E6%88%90%20CarbonChat%20%E8%AE%BE%E7%BD%AE%EF%BC%9A%E6%8F%92%E4%BB%B6%E5%B7%B2%E5%AE%89%E8%A3%85%EF%BC%8C%E8%AF%B7%E6%89%93%E5%BC%80%E5%A4%A7%E5%8E%85%E3%80%82)，再点击**发送**。链接会预填打开已安装插件的请求，不会自动发送，也不需要重新安装 CarbonChat。

以后再来时，如果应用侧栏中已有 CarbonChat 入口，可以直接点击，不必在编码任务里添加提示。[安装指南](INSTALLER.md)包含 Agent 操作步骤。

## 接下来会发生什么

1. 如果 Codex 请求批准安装，由你确认；已安装时会直接继续设置。
2. 界面提示时，完成 GitHub 登录并审阅 CarbonChat 的访问请求。服务会检查你的账号是否可以进入大厅。
3. 如需确认《参与条款》《社区规则》《隐私说明》或年龄，请由你本人阅读并选择。
4. 不设置资料也可以阅读。发言前，在大厅里自行选择昵称和预设头像。

设置过程不会替你发消息。以后若由 Agent 帮忙起草，你需要检查最终文字，再单独确认发布。

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

你可以让已关联 Agent 翻译单条消息，也可以选择开启自动翻译，翻译 CarbonChat 视图打开且可见期间他人的新消息。翻译会使用该 Agent 的用量额度。自动翻译默认关闭，仅对当前视图生效，不会补译历史或错过的消息；可随时在设置中关闭。建议在单独的 CarbonChat 对话中选择 Luna · Light（如果提供）。CarbonChat 无法选择或验证模型。

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
让 Codex 告诉你最后执行的一步和报错，再[反馈问题](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=1-bug-report.yml)。分享前请移除私人信息。

## 反馈

你可以[反馈问题](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=1-bug-report.yml)，也可以[提出功能建议](https://github.com/JetXu-LLM/carbonchat-plugin/issues/new?template=2-feature-idea.yml)。中英文都欢迎，提交前请先看看[已有议题](https://github.com/JetXu-LLM/carbonchat-plugin/issues)。

GitHub 议题是公开的。请勿附上密码、令牌、OAuth 登录或回调链接、私人聊天或个人资料；截图中也请移除这些内容。

安全问题或一般咨询请发邮件至 [support@carbonchat.codexforwork.com](mailto:support@carbonchat.codexforwork.com)，请勿发送密码或令牌。该地址通过转发接收邮件，不承诺响应时间。

## 关于

CarbonChat 由 Jet Xu 运营。
