# 设计规范摘要

本文件提炼自 `滴滴货运司机端设计规范.skills`，用于在实现页面和组件时快速查阅。

**重要说明**：本设计规范基于 `375px` 宽度画布制定，所有字号、间距、尺寸等参数均针对375px宽度画布优化。

**尺寸换算规则（重要）**：
- **MasterGo 设计稿来源**：所有来自 MasterGo 的设计稿均基于 `750px` 宽度画布
- **本规范基准**：本设计规范基于 `375px` 宽度画布
- **换算规则**：从 MasterGo 读取的尺寸数值，需自动除以 2 后再写入本规范

## 核心原则

- 清晰：信息层次分明，重点明确
- 高效：操作流程简洁，减少司机理解和操作成本
- 统一：颜色、字体、组件状态与结构保持一致

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

### 圆角 Token

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

### 边框宽度 Token

| Token名称 | 值 |
|-----------|-----|
| token-border-width-1 | `0.5px` |
| token-border-width-2 | `1px` |
| token-border-width-3 | `1.5px` |
| token-border-width-4 | `2px` |

### 投影效果 Token

| Token名称 | 值 |
|-----------|-----|
| token-effect | `0px 1px 4px 0px rgba(9, 32, 71, 0.02)` |
| token-effect-1 | `0px 5px 20px 0px rgba(0, 49, 99, 0.08)` |
| token-effect-2 | `0px 1px 8px 0px rgba(9, 32, 71, 0.02)` |

### 字体组合 Token

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
- 更新日期：2026-04-24
