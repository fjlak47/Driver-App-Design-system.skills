---
name: didi-driver-design-spec
description: 在生成页面、组件、Figma 节点实现或设计稿还原时，应用滴滴货运司机端的设计规范，包括字体、色彩、圆角、间距、卡片、弹窗、按钮、表单和标签页规则。
---

# 滴滴货运司机端设计规范

当用户要你设计、实现、还原或评审滴滴货运司机端相关界面时使用这个 skill。

## 适用场景

- 产出滴滴货运司机端页面、组件、弹窗、列表、表单、Tab、卡片
- 根据 Figma / Figma Make 节点生成实现代码
- 审查现有页面是否符合司机端设计语言
- 提炼 CSS tokens、设计 token、组件约束

## 工作方式

1. 先确认任务属于滴滴货运司机端或风格接近该设计体系。
2. 默认优先使用品牌色、字体、圆角、间距、阴影和组件规则，不要随意切换到通用互联网风格。
3. 如果用户给了设计稿、Figma 节点或截图，先用它确定结构，再用本规范补齐视觉细节。
4. 如果需要具体 token 或组件参数，读取 [references/design-spec.md](./references/design-spec.md)。
5. 如果规范与现有业务样式冲突，优先保持业务现状，并明确指出偏差点。

## 输出要求

- 设计规范基于 `375px` 宽度画布制定，应用时也应保持 `375px` 宽度画布（需自适应大小）
- 所有页面宽度统一为 `375px`，使用弹性布局实现自适应
- 中文优先 `PingFang SC`，英文与数字优先 `Barlow`
- 全局字体：PingFang SC，回退字体栈：-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Microsoft YaHei", sans-serif
- MobileFrame 外壳边框必须使用 `outline` 而非 `border`，避免侵占内部空间
  - ✅ 正确写法：`outline outline-[8px] outline-[#1A1A1A]`
  - ❌ 错误写法：`border-[8px] border-[#1A1A1A]`（会导致内容区变为 375 - 16 = 359px）
- 所有页面隐藏滚动条，保持滚动功能：
  ```css
  *::-webkit-scrollbar { display: none; }
  * { -ms-overflow-style: none; scrollbar-width: none; }
  ```
- 表单 label 与内容间距：12px（mb-[12px]）
- 状态文案主副标题紧凑贴合：使用 -mt-[2px]
- 界面气质保持 `清晰`、`高效`、`统一`
- 页面避免花哨装饰，强调信息层级、操作效率和状态反馈
- 高优先动作优先使用橙色按钮与橙色激活指示
- 图标资源：可从 IconPark 图标库引用 - https://iconpark.oceanengine.com/official
- 卡片、半弹窗、列表、表单优先使用浅底、白底、细边框和明确分组
- 所有内容卡片统一使用以下阴影和圆角：
  - 卡片阴影：`0px 1px 12px rgba(203, 216, 242, 0.12)`
  - 卡片圆角：`24px`
  - 背景色：`#FFFFFF`
  - 内边距：`12px`（p-3）
  - 卡片间距：`10px`（margin-bottom）
  - 第一张卡片与导航栏/头部的距离：`10px`（pt-[10px]）
  - 页面水平内边距：`16px`（px-4）
- 字号使用规范值，确保在375px宽度画布下显示清晰，避免使用过小的字号
- 适配技巧：在body样式中设置`width: 100%; max-width: 375px; margin: 0 auto;`，确保页面在375px宽度下居中显示
- 适配技巧：移除所有子容器中的`max-width`和`margin: 0 auto;`属性，因为body已经控制了整体宽度
- 适配技巧：将媒体查询断点设置为`max-width: 375px`，确保在375px宽度时使用正常的样式，而不是小屏幕的样式

## 实施规则

- 颜色、字号、间距优先复用规范值，不要自行发明接近值
- 按钮禁用态统一使用低不透明度和浅灰文本/背景
- 标签、列表、表单、Tab 的字号要比常见 Web 后台更大，保持移动端可读性
- 半弹窗优先使用顶部大圆角、底部吸附和独立按钮区
- 如果输出前端代码，优先先整理为 CSS 变量或设计 token，再落到组件样式

## Figma / Figma Make 配合

- 当任务来自 Figma 节点时，先尊重节点结构与文案，再用本规范修正颜色、字重、圆角、间距与状态样式
- 当用户只给低保真结构时，可直接按本规范补齐按钮、卡片、表单、标签和 Tab 的默认样式
- 当用户要求“更像滴滴货运司机端”，优先检查品牌色、按钮高度、卡片圆角、列表信息层级和半弹窗样式

## 已知来源

- 原始来源文件：`/Users/didi/Desktop/设计规范skills/滴滴货运司机端设计规范.skills`
- 原文件存在 JSON 格式瑕疵；本 skill 基于可读内容人工整理，可直接用于设计与实现任务
- mastergo的mcp token：mg_38024b1d826f409eb40c6f748a295bed
- MasterGo 设计稿链接：
  - https://mastergo.com/goto/RB7fZQmq?page_id=446:72180&layer_id=1227:014553&file=139819593175075
  - https://mastergo.com/goto/RB7hQeJq?page_id=446:72180&layer_id=912:051442&file=139819593175075
  - https://mastergo.com/goto/RB7iLqVl?page_id=446:72180&layer_id=891:023886&file=139819593175075
  - https://mastergo.com/goto/RB7kbqAH?page_id=446:72180&layer_id=891:082680&file=139819593175075
  - https://mastergo.com/goto/RB7l6CMD?page_id=446:72180&layer_id=891:082681&file=139819593175075
  - https://mastergo.com/goto/RB7nadvC?page_id=446:72180&layer_id=891:123383&file=139819593175075
  - https://mastergo.com/goto/RB7nSdmj?page_id=446:72180&layer_id=1128:012336&file=139819593175075
  - https://mastergo.com/goto/RB7ovOq7?page_id=446:72180&layer_id=891:145225&file=139819593175075
