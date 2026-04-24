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

## 尺寸换算规则（重要）

- **MasterGo 设计稿来源**：所有来自 MasterGo 的设计稿均基于 `750px` 宽度画布
- **本规范基准**：本设计规范基于 `375px` 宽度画布
- **换算规则**：从 MasterGo 读取的尺寸数值，需自动除以 2 后再写入本规范（包括 .md 和 .skills 文件）
- **例外情况**：本次新增的内容（MobileFrame 边框、滚动条隐藏、卡片间距 10px、字体栈、状态文案间距等）保持不变，不需要除以 2

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


## CSS Design Token 规范（375px画布）

### 颜色 Token

| Token名称 | 值 |
|-----------|-----|
| token-color | `rgba(255, 100, 53, 1)` |
| token-color-1 | `rgba(0, 181, 150, 1)` |
| token-color-2 | `rgba(255, 159, 14, 1)` |
| token-color-3 | `rgba(0, 181, 150, 1)` |
| token-color-4 | `rgba(45, 187, 122, 1)` |
| token-color-5 | `rgba(22, 140, 255, 1)` |
| token-color-6 | `rgba(107, 50, 236, 1)` |
| token-color-7 | `rgba(25, 52, 88, 1)` |
| token-color-8 | `rgba(246, 248, 251, 1)` |
| token-color-9 | `rgba(235, 236, 242, 1)` |
| token-color-10 | `rgba(255, 255, 255, 1)` |
| token-color-11 | `rgba(94, 113, 138, 1)` |
| token-color-12 | `rgba(163, 174, 188, 1)` |
| token-color-13 | `rgba(217, 227, 242, 1)` |
| token-color-14 | `rgba(26, 26, 26, 1)` |
| token-color-15 | `rgba(51, 51, 51, 1)` |
| token-color-16 | `rgba(102, 102, 102, 1)` |
| token-color-17 | `rgba(153, 153, 153, 1)` |
| token-color-18 | `rgba(204, 204, 204, 1)` |
| token-color-19 | `rgba(0, 0, 0, 0.75)` |
| token-color-20 | `rgba(255, 67, 10, 1)` |
| token-color-21 | `rgba(255, 84, 33, 1)` |
| token-color-22 | `rgba(255, 116, 73, 1)` |
| token-color-23 | `rgba(255, 131, 93, 1)` |
| token-color-24 | `rgba(255, 147, 114, 1)` |
| token-color-25 | `rgba(255, 162, 134, 1)` |
| token-color-26 | `rgba(255, 177, 154, 1)` |
| token-color-27 | `rgba(255, 193, 174, 1)` |
| token-color-28 | `rgba(255, 208, 194, 1)` |
| token-color-29 | `rgba(255, 224, 215, 1)` |
| token-color-30 | `rgba(255, 239, 235, 1)` |
| token-color-31 | `rgba(255, 153, 0, 1)` |
| token-color-32 | `rgba(255, 162, 23, 1)` |
| token-color-33 | `rgba(255, 169, 38, 1)` |
| token-color-34 | `rgba(255, 178, 62, 1)` |
| token-color-35 | `rgba(255, 188, 86, 1)` |
| token-color-36 | `rgba(255, 197, 110, 1)` |
| token-color-37 | `rgba(255, 217, 159, 1)` |
| token-color-38 | `rgba(255, 226, 183, 1)` |
| token-color-39 | `rgba(255, 236, 207, 1)` |
| token-color-40 | `rgba(255, 245, 231, 1)` |
| token-color-41 | `rgba(255, 3, 0, 1)` |
| token-color-42 | `rgba(255, 51, 47, 1)` |
| token-color-43 | `rgba(255, 86, 83, 1)` |
| token-color-44 | `rgba(255, 105, 102, 1)` |
| token-color-45 | `rgba(255, 123, 121, 1)` |
| token-color-46 | `rgba(255, 142, 140, 1)` |
| token-color-47 | `rgba(255, 161, 159, 1)` |
| token-color-48 | `rgba(255, 180, 179, 1)` |
| token-color-49 | `rgba(255, 199, 198, 1)` |
| token-color-50 | `rgba(255, 217, 217, 1)` |
| token-color-51 | `rgba(255, 236, 236, 1)` |
| token-color-52 | `rgba(0, 135, 112, 1)` |
| token-color-53 | `rgba(5, 152, 127, 1)` |
| token-color-54 | `rgba(26, 188, 161, 1)` |
| token-color-55 | `rgba(51, 196, 171, 1)` |
| token-color-56 | `rgba(77, 203, 181, 1)` |
| token-color-57 | `rgba(102, 211, 192, 1)` |
| token-color-58 | `rgba(128, 218, 203, 1)` |
| token-color-59 | `rgba(153, 225, 213, 1)` |
| token-color-60 | `rgba(178, 233, 223, 1)` |
| token-color-61 | `rgba(204, 240, 234, 1)` |
| token-color-62 | `rgba(229, 248, 244, 1)` |
| token-color-63 | `rgba(0, 134, 72, 1)` |
| token-color-64 | `rgba(26, 159, 98, 1)` |
| token-color-65 | `rgba(66, 194, 135, 1)` |
| token-color-66 | `rgba(87, 201, 149, 1)` |
| token-color-67 | `rgba(108, 207, 162, 1)` |
| token-color-68 | `rgba(129, 214, 175, 1)` |
| token-color-69 | `rgba(150, 221, 188, 1)` |
| token-color-70 | `rgba(171, 228, 202, 1)` |
| token-color-71 | `rgba(192, 235, 215, 1)` |
| token-color-72 | `rgba(213, 241, 228, 1)` |
| token-color-73 | `rgba(234, 248, 242, 1)` |
| token-color-74 | `rgba(0, 94, 255, 1)` |
| token-color-75 | `rgba(14, 120, 255, 1)` |
| token-color-76 | `rgba(45, 151, 255, 1)` |
| token-color-77 | `rgba(69, 163, 255, 1)` |
| token-color-78 | `rgba(92, 175, 255, 1)` |
| token-color-79 | `rgba(115, 186, 255, 1)` |
| token-color-80 | `rgba(138, 197, 255, 1)` |
| token-color-81 | `rgba(162, 209, 255, 1)` |
| token-color-82 | `rgba(185, 221, 255, 1)` |
| token-color-83 | `rgba(208, 232, 255, 1)` |
| token-color-84 | `rgba(232, 243, 255, 1)` |
| token-color-85 | `rgba(3, 19, 41, 1)` |
| token-color-86 | `rgba(13, 35, 65, 1)` |
| token-color-87 | `rgba(71, 93, 121, 1)` |
| token-color-88 | `rgba(94, 113, 138, 1)` |
| token-color-89 | `rgba(117, 133, 155, 1)` |
| token-color-90 | `rgba(140, 153, 171, 1)` |
| token-color-91 | `rgba(163, 174, 188, 1)` |
| token-color-92 | `rgba(186, 194, 205, 1)` |
| token-color-93 | `rgba(232, 235, 238, 1)` |
| token-color-94 | `rgba(83, 14, 238, 1)` |
| token-color-95 | `rgba(102, 38, 246, 1)` |
| token-color-96 | `rgba(122, 71, 238, 1)` |
| token-color-97 | `rgba(137, 91, 240, 1)` |
| token-color-98 | `rgba(166, 132, 244, 1)` |
| token-color-99 | `rgba(181, 152, 245, 1)` |
| token-color-100 | `rgba(196, 173, 247, 1)` |
| token-color-101 | `rgba(211, 193, 249, 1)` |
| token-color-102 | `rgba(225, 214, 251, 1)` |
| token-color-103 | `rgba(240, 234, 253, 1)` |
| token-color-104 | `rgba(0, 0, 0, 0.55)` |
| token-color-105 | `rgba(255, 67, 64, 1)` |
| token-color-106 | `rgba(240, 241, 245, 1)` |
| token-color-107 | `rgba(255, 207, 134, 1)` |
| token-color-108 | `rgba(48, 72, 105, 1)` |
| token-color-109 | `rgba(209, 214, 222, 1)` |
| token-color-110 | `rgba(151, 112, 242, 1)` |

### 圆角 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-border-radius-0 | `0px` |
| token-border-radius-4 | `2px` |
| token-border-radius-8 | `4px` |
| token-border-radius-12 | `6px` |
| token-border-radius-16 | `8px` |
| token-border-radius-20 | `10px` |
| token-border-radius-24 | `12px` |
| token-border-radius-32 | `16px` |
| token-border-radius-40 | `20px` |
| token-border-radius-60 | `30px` |
| token-border-radius-400 | `200px` |

### 边框宽度 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-border-width-1 | `0.5px` |
| token-border-width-2 | `1px` |
| token-border-width-3 | `1.5px` |
| token-border-width-4 | `2px` |

### 投影效果 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-effect | `0px 1px 4px 0px rgba(9, 32, 71, 0.02)` |
| token-effect-1 | `0px 5px 20px 0px rgba(0, 49, 99, 0.08)` |
| token-effect-2 | `0px 1px 8px 0px rgba(9, 32, 71, 0.02)` |

### 字体组合 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-text | `400 28px "PingFang SC"` |
| token-text-1 | `400 24px "PingFang SC"` |
| token-text-2 | `400 22px "PingFang SC"` |
| token-text-3 | `400 20px "PingFang SC"` |
| token-text-4 | `400 18px "PingFang SC"` |
| token-text-5 | `400 16px "PingFang SC"` |
| token-text-6 | `400 14px "PingFang SC"` |
| token-text-7 | `400 12px "PingFang SC"` |
| token-text-8 | `400 11px "PingFang SC"` |
| token-text-9 | `400 10px "PingFang SC"` |
| token-text-10 | `400 9px "PingFang SC"` |
| token-text-11 | `500 28px "PingFang SC"` |
| token-text-12 | `500 24px "PingFang SC"` |
| token-text-13 | `500 22px "PingFang SC"` |
| token-text-14 | `500 20px "PingFang SC"` |
| token-text-15 | `500 18px "PingFang SC"` |
| token-text-16 | `500 16px "PingFang SC"` |
| token-text-17 | `500 14px "PingFang SC"` |
| token-text-18 | `500 12px "PingFang SC"` |
| token-text-19 | `500 11px "PingFang SC"` |
| token-text-20 | `500 10px "PingFang SC"` |
| token-text-21 | `500 9px "PingFang SC"` |
| token-text-22 | `500 45px "Barlow Condensed"` |
| token-text-23 | `500 28px "Barlow Condensed"` |
| token-text-24 | `500 24px "Barlow Condensed"` |
| token-text-25 | `500 22px "Barlow Condensed"` |
| token-text-26 | `500 20px "Barlow Condensed"` |
| token-text-27 | `500 18px "Barlow Condensed"` |
| token-text-28 | `500 16px "Barlow Condensed"` |
| token-text-29 | `500 14px "Barlow Condensed"` |
| token-text-30 | `500 12px "Barlow Condensed"` |
| token-text-31 | `500 11px "Barlow Condensed"` |
| token-text-32 | `500 10px "Barlow Condensed"` |
| token-text-33 | `500 9px "Barlow Condensed"` |
| token-text-34 | `500 36px "Barlow Condensed"` |

### 版本信息

- 版本号：v1.5.0
- 更新日期：2026-04-24## 颜色 Token

| Token名称 | 值 |
|-----------|-----|
| 333333 | `rgba(51, 51, 51, 1)` |
| light-label-color-primary | `rgba(0, 0, 0, 1)` |
| dark-label-color-primary | `rgba(255, 255, 255, 1)` |
| el-color-success-dark-2 | `rgba(82, 155, 46, 1)` |
| el-color-primary | `rgba(64, 158, 255, 1)` |
| token-color | `rgba(255, 100, 53, 1)` |
| token-color-1 | `rgba(0, 181, 150, 1)` |
| token-color-2 | `rgba(22, 119, 254, 1)` |
| token-color-3 | `rgba(255, 159, 14, 1)` |
| token-color-4 | `rgba(0, 181, 150, 1)` |
| token-color-5 | `rgba(45, 187, 122, 1)` |
| token-color-6 | `rgba(22, 140, 255, 1)` |
| token-color-7 | `rgba(107, 50, 236, 1)` |
| token-color-8 | `rgba(25, 52, 88, 1)` |
| token-color-9 | `rgba(246, 248, 251, 1)` |
| token-color-10 | `rgba(246, 247, 251, 1)` |
| token-color-11 | `rgba(235, 236, 242, 1)` |
| token-color-12 | `rgba(222, 224, 229, 1)` |
| token-color-13 | `rgba(237, 237, 241, 1)` |
| token-color-14 | `rgba(255, 255, 255, 1)` |
| token-color-15 | `rgba(241, 242, 249, 1)` |
| token-color-16 | `rgba(255, 248, 242, 1)` |
| token-color-17 | `rgba(94, 113, 138, 1)` |
| token-color-18 | `rgba(163, 174, 188, 1)` |
| token-color-19 | `rgba(217, 227, 242, 1)` |
| token-color-20 | `rgba(26, 26, 26, 1)` |
| token-color-21 | `rgba(51, 51, 51, 1)` |
| token-color-22 | `rgba(102, 102, 102, 1)` |
| token-color-23 | `rgba(153, 153, 153, 1)` |
| token-color-24 | `rgba(204, 204, 204, 1)` |
| token-color-25 | `rgba(0, 0, 0, 0.75)` |
| token-color-26 | `rgba(255, 238, 238, 1)` |
| token-color-27 | `rgba(255, 255, 255, 1)` |
| token-color-28 | `rgba(26, 26, 26, 1)` |
| token-color-29 | `rgba(204, 204, 204, 1)` |
| token-color-30 | `rgba(118, 118, 118, 1)` |
| token-color-31 | `rgba(153, 153, 153, 1)` |
| token-color-32 | `rgba(117, 117, 117, 1)` |
| token-color-33 | `rgba(68, 68, 68, 1)` |
| token-color-34 | `rgba(255, 100, 53, 1)` |
| token-color-35 | `rgba(255, 67, 10, 1)` |
| el-color-warning | `rgba(230, 162, 60, 1)` |
| el-color-success | `rgba(103, 194, 58, 1)` |
| token-color-36 | `rgba(255, 67, 64, 1)` |
| token-color-37 | `rgba(240, 241, 245, 1)` |
| token-color-38 | `rgba(26, 26, 26, 1)` |
| token-color-39 | `rgba(225, 230, 239, 1)` |

### 圆角 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-border-radius-28 | `14px` |
| token-border-radius-8 | `4px` |
| token-border-radius-32 | `16px` |
| token-border-radius-6 | `3px` |
| token-border-radius-24 | `12px` |
| token-border-radius-16 | `8px` |
| token-border-radius-12 | `6px` |
| token-border-radius-36 | `18px` |
| token-border-radius-4 | `2px` |
| token-border-radius-20 | `10px` |
| token-border-radius-40 | `20px` |
| token-border-radius-60 | `30px` |
| token-border-radius-400 | `200px` |

### 间距 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-gap-0 | `0px` |
| token-gap-2 | `1px` |
| token-gap-4 | `2px` |
| token-gap-8 | `4px` |
| token-gap-12 | `6px` |
| token-gap-16 | `8px` |
| token-gap-20 | `10px` |
| token-gap-24 | `12px` |
| token-gap-28 | `14px` |
| token-gap-32 | `16px` |
| token-gap-40 | `20px` |
| token-gap-48 | `24px` |

### 内边距 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-padding-10 | `5px` |
| token-padding-10-1 | `5px` |

### 边框宽度 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-border-width-1 | `0.5px` |
| token-border-width-2 | `1px` |
| token-border-width-3 | `1.5px` |
| token-border-width-4 | `2px` |

### 投影效果 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-effect | `0px 2px 5px 0px rgba(0, 0, 0, 0.35)` |
| token-effect-1 | `0px 4px 16px 0px rgba(0, 0, 0, 0.16)` |
| token-effect-2 | `0px 1px 4px 0px rgba(9, 32, 71, 0.02)` |
| token-effect-3 | `0px 1px 8px 0px rgba(9, 32, 71, 0.02)` |
| token-effect-4 | `0px 5px 20px 0px rgba(0, 49, 99, 0.08)` |

### 字体组合 Token（已转换为375px画布）

| Token名称 | 值 |
|-----------|-----|
| token-text | `400 24px "Source Han Sans CN"` |
| token-text-1 | `700 8px "Source Han Sans CN"` |
| token-text-2 | `400 12px/12px "PingFangSC"` |
| token-text-3 | `500 28px "Barlow"` |
| token-text-4 | `400 20px/20px "PingFangSC"` |
| token-text-5 | `400 14px/14px "PingFangSC"` |
| token-text-6 | `400 22px/22px "PingFangSC"` |
| token-text-7 | `400 18px/18px "PingFangSC"` |
| token-text-8 | `400 9px/9px "PingFang SC"` |
| token-text-9 | `500 36px "Barlow"` |
| token-text-10 | `400 11px/11px "PingFangSC"` |
| token-text-11 | `400 6px "Source Han Sans"` |
| token-text-12 | `400 28px "PingFang SC"` |
| token-text-13 | `400 24px "PingFang SC"` |
| token-text-14 | `400 22px "PingFang SC"` |
| token-text-15 | `400 20px "PingFang SC"` |
| token-text-16 | `400 18px "PingFang SC"` |
| token-text-17 | `400 16px "PingFang SC"` |
| token-text-18 | `400 14px "PingFang SC"` |
| token-text-19 | `400 12px "PingFang SC"` |
| token-text-20 | `400 11px "PingFang SC"` |
| token-text-21 | `400 10px "PingFang SC"` |
| token-text-22 | `400 9px "PingFang SC"` |
| token-text-23 | `500 28px "PingFang SC"` |
| token-text-24 | `500 24px "PingFang SC"` |
| token-text-25 | `500 22px "PingFang SC"` |
| token-text-26 | `500 20px "PingFang SC"` |
| token-text-27 | `500 18px "PingFang SC"` |
| token-text-28 | `500 16px "PingFang SC"` |
| token-text-29 | `500 14px "PingFang SC"` |
| token-text-30 | `500 12px "PingFang SC"` |
| token-text-31 | `500 11px "PingFang SC"` |
| token-text-32 | `500 10px "PingFang SC"` |
| token-text-33 | `500 9px "PingFang SC"` |
| token-text-34 | `500 45px "Barlow Condensed"` |
| token-text-35 | `500 28px "Barlow Condensed"` |
| token-text-36 | `500 24px "Barlow Condensed"` |
| token-text-37 | `500 22px "Barlow Condensed"` |
| token-text-38 | `500 20px "Barlow Condensed"` |
| token-text-39 | `500 18px "Barlow Condensed"` |
| token-text-40 | `500 16px "Barlow Condensed"` |
| token-text-41 | `500 14px "Barlow Condensed"` |
| token-text-42 | `500 12px "Barlow Condensed"` |
| token-text-43 | `500 11px "Barlow Condensed"` |
| token-text-44 | `500 10px "Barlow Condensed"` |
| token-text-45 | `500 9px "Barlow Condensed"` |
| token-text-46 | `400 16px/16px "PingFangSC"` |
| english-header-h2 | `700 16px/23px "Inter"` |
| token-text-47 | `500 36px "Barlow Condensed"` |
| token-text-48 | `400 10px/10px "PingFangSC"` |
