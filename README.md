# Claude Code 本地技能库

本仓库用于存储和管理 Claude Code 的自定义技能。

## 已安装技能

### minimax-ui-design
Minimax风格现代科技UI设计系统。适用于生成企业级管理系统、数据展示平台和SaaS产品界面。

**触发场景**：minimax风格、现代科技UI、红色渐变设计、企业级管理系统、数据展示平台、SaaS产品界面、阳光审计系统、工程管理系统等需要现代科技感UI的场景。

## 安装方式

1. 在 Claude Code 中添加此 marketplace：
```bash
claude plugins marketplace add Patrick0406/claude-skills
```

2. 安装技能：
```bash
claude plugins install minimax-ui@Patrick0406/claude-skills
```

## 本地开发

如需添加新技能：
1. 在 `skills/` 目录下创建新的技能文件夹
2. 更新 `.claude-plugin/marketplace.json` 中的插件列表
3. 提交并推送到此仓库
