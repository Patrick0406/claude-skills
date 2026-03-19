---
name: minimax-ui-design
description: Minimax风格现代科技UI设计系统。适用于生成企业级管理系统、数据展示平台和SaaS产品界面。使用此技能当用户提到：minimax风格、现代科技UI、红色渐变设计、企业级管理系统、数据展示平台、SaaS产品界面、阳光审计系统、工程管理系统等需要现代科技感UI的场景。技能会应用红色渐变主色调、玻璃拟态效果、专业商务风格的完整设计方案。
---

本技能用于生成符合Minimax风格的现代科技UI设计。Minimax风格的核心特点是：红色渐变主色调、现代科技感、玻璃拟态效果、专业商务风格。适用于企业级管理系统、数据可视化平台、SaaS产品界面等场景。

## 设计原则

### 核心理念
- **现代科技感**：融合抽象几何元素与渐变色彩
- **活力动感**：采用高饱和度红色系，传递年轻、活力的品牌形象
- **专业简洁**：信息层级清晰，布局规整有序
- **用户友好**：交互流畅，反馈及时

### 适用场景
- 企业级管理系统
- 数据可视化平台
- SaaS产品界面
- 工程审计系统
- 金融服务平台

## 色彩系统

### 主色调
使用以下颜色作为UI的主色调：
- **主色**：#FF4D4F (珊瑚红)
- **深红**：#E63946
- **浅红**：#FF8585
- **渐变**：linear-gradient(135deg, #FF4D4F 0%, #FF6B6B 50%, #FF8585 100%)

### 辅助色
- 成功：#52C41A
- 警告：#FA8C16
- 错误：#FF4D4F
- 信息：#1890FF

### 中性色
- 文字主色：#1A1A1A
- 文字次要：#666666
- 文字浅色：#999999
- 边框：#E8E8E8
- 背景灰：#F5F5F5
- 纯白：#FFFFFF

## 排版系统

### 字体家族
```
-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif
```

### 字号层级
- 超大标题：42px (font-weight: 700)
- 大标题：32px (font-weight: 700)
- 中标题：24px (font-weight: 600)
- 小标题：18px (font-weight: 600)
- 正文：15px (font-weight: 400)
- 辅助文：14px (font-weight: 400)
- 小字：12px (font-weight: 400)

## 组件规范

### 按钮
**主按钮**：
- 背景：渐变红色 (linear-gradient(135deg, #FF4D4F, #E63946))
- 圆角：24px
- 内边距：12px 32px
- 阴影：0 4px 12px rgba(255,77,79,0.3)
- 悬停：上移2px，阴影加深为 0 6px 20px rgba(255,77,79,0.4)

**描边按钮**：
- 背景：透明
- 边框：2px solid 当前文字颜色
- 圆角：24px
- 颜色：白色或主色调

**次要按钮**：
- 背景：#F5F5F5
- 圆角：24px

### 卡片
**标准卡片**：
- 背景：白色
- 圆角：16px
- 内边距：32px
- 阴影：0 2px 12px rgba(0,0,0,0.05)
- 悬停：上移2px，阴影加深

**Hero卡片**：
- 圆角：20px
- 内边距：48px
- 背景：渐变红色
- 阴影：0 8px 32px rgba(255,77,79,0.25)

### 表单输入框
- 高度：44px
- 内边距：12px 16px
- 边框：2px solid #E8E8E8
- 圆角：10px
- 聚焦：边框变红 (#FF4D4F)，添加阴影 0 0 0 3px rgba(255,77,79,0.1)

### 表格
**表头**：
- 背景：#F5F5F5
- 字重：600
- 颜色：#666666
- 内边距：14px 16px

**单元格**：
- 内边距：14px 16px
- 边框：1px solid #E8E8E8 (仅底部)
- 悬停背景：rgba(255,77,79,0.02)

## 阴影系统
- 小阴影：0 2px 8px rgba(0,0,0,0.06)
- 中阴影：0 2px 12px rgba(0,0,0,0.05)
- 大阴影：0 8px 32px rgba(255,77,79,0.25)
- 悬停阴影：0 6px 20px rgba(255,77,79,0.4)

## 圆角系统
- 小：8px
- 中：12px
- 大：16px
- 超大：20px
- 全圆角：24px

## 动画过渡
- 标准过渡：all 0.3s ease
- 快速过渡：all 0.2s ease
- 慢速过渡：all 0.5s ease
- 弹性过渡：all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

## 布局系统

### 间距规范
- 超小：8px
- 小：16px
- 中：24px
- 大：32px
- 超大：48px

### 响应式断点
- Desktop: ≥1200px
- Tablet: 768-1199px
- Mobile: <768px

## 常用图标
- 抽取：🎲
- 记录：📋
- 单位：🏢
- 设置：⚙️
- 上传：📁
- 下载：📥
- 备份：💾
- 恢复：🔄
- 打印：🖨️
- 成功：✅
- 警告：⚠️
- 错误：❌

## 实现代码

当需要生成Minimax风格UI时，使用bundled的脚本资源来获取设计系统代码：

### 读取设计系统脚本
读取 `/Users/pengzhen/minimax-ui-design-skill/scripts/design_system.js` 获取完整的JavaScript设计系统对象，包含：
- colors: 颜色系统
- shadows: 阴影系统
- borderRadius: 圆角系统
- spacing: 间距系统
- typography: 字体系统
- generateCSSVariables(): 生成CSS变量
- generateHeroBannerStyles(): 生成Hero Banner样式
- generateCardStyles(): 生成卡片样式
- generateButtonStyles(): 生成按钮样式

### 读取组件库脚本
读取 `/Users/pengzhen/minimax-ui-design-skill/scripts/components.js` 获取Vue组件模板，包含：
- heroBanner: Hero横幅组件
- statCard: 统计卡片组件
- dataTable: 数据表格组件
- uploadArea: 上传区域组件
- formInput: 表单输入组件

### 读取设计资源
读取 `/Users/pengzhen/minimax-ui-design-skill/scripts/assets.js` 获取设计资源，包含：
- DesignTokens: 设计令牌
- ComponentTemplates: 组件模板变体
- AnimationPresets: 动画预设
- IconLibrary: 图标库

## 使用示例

### 示例1：创建管理系统首页

```vue
<template>
  <div class="dashboard">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="hero-tag">{{ tag }}</div>
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
      <div class="hero-buttons">
        <button class="btn btn-outline">{{ primaryButtonText }}</button>
        <button class="btn btn-outline">{{ secondaryButtonText }}</button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="stats-grid">
      <div class="stat-card" v-for="stat in stats" :key="stat.label">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>
```

### 示例2：创建表单页面

```vue
<template>
  <div class="form-page">
    <div class="card">
      <h2 class="card-title">表单标题</h2>
      <div class="form-item">
        <label>字段名称 <span class="required">*</span></label>
        <input type="text" class="form-input" placeholder="请输入内容" />
      </div>
      <button class="btn btn-primary">提交</button>
    </div>
  </div>
</template>
```

### 示例3：创建数据表格

```vue
<template>
  <div class="card">
    <h2 class="card-title">数据列表</h2>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>列标题1</th>
            <th>列标题2</th>
            <th>列标题3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.id">
            <td>{{ row.field1 }}</td>
            <td>{{ row.field2 }}</td>
            <td>{{ row.field3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
```

## 生成流程

1. **理解需求**：分析用户需要什么类型的界面（首页、表单、表格、详情页等）
2. **应用设计系统**：从设计系统脚本中获取对应的颜色、阴影、圆角等值
3. **生成HTML/Vue代码**：使用提供的组件模板或自定义组件
4. **添加CSS样式**：使用generateCSSVariables()生成CSS变量，使用对应的生成函数
5. **确保响应式**：添加适当的媒体查询

## 输出要求

生成的代码应包含：
1. 完整的HTML结构
2. 内联或独立的CSS样式（使用设计系统中的值）
3. Vue组件模板（如适用）
4. 适当的响应式样式
5. 交互效果和过渡动画
