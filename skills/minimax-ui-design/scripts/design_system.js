/**
 * MiniMax Design System
 * Minimax风格现代科技UI设计系统
 */

const MiniMaxDesignSystem = {
  // 颜色系统
  colors: {
    primary: {
      main: '#FF4D4F',
      dark: '#E63946',
      light: '#FF8585',
      gradient: 'linear-gradient(135deg, #FF4D4F 0%, #FF6B6B 50%, #FF8585 100%)',
      gradientSimple: 'linear-gradient(135deg, #FF4D4F, #E63946)'
    },
    success: '#52C41A',
    warning: '#FA8C16',
    error: '#FF4D4F',
    info: '#1890FF',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      light: '#999999'
    },
    background: {
      white: '#FFFFFF',
      gray: '#F5F5F5',
      gradient: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)'
    },
    border: '#E8E8E8'
  },

  // 阴影系统
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.06)',
    md: '0 2px 12px rgba(0,0,0,0.05)',
    lg: '0 8px 32px rgba(255,77,79,0.25)',
    hover: '0 6px 20px rgba(255,77,79,0.4)'
  },

  // 圆角系统
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '24px'
  },

  // 间距系统
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px'
  },

  // 字体系统
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '15px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '42px'
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },

  // 生成CSS变量
  generateCSSVariables() {
    return `
:root {
  --primary-color: ${this.colors.primary.main};
  --primary-dark: ${this.colors.primary.dark};
  --primary-light: ${this.colors.primary.light};
  --primary-gradient: ${this.colors.primary.gradient};
  --success-color: ${this.colors.success};
  --warning-color: ${this.colors.warning};
  --error-color: ${this.colors.error};
  --info-color: ${this.colors.info};
  --text-primary: ${this.colors.text.primary};
  --text-secondary: ${this.colors.text.secondary};
  --text-light: ${this.colors.text.light};
  --bg-white: ${this.colors.background.white};
  --bg-gray: ${this.colors.background.gray};
  --bg-gradient: ${this.colors.background.gradient};
  --border-color: ${this.colors.border};

  --shadow-sm: ${this.shadows.sm};
  --shadow-md: ${this.shadows.md};
  --shadow-lg: ${this.shadows.lg};
  --shadow-hover: ${this.shadows.hover};

  --radius-sm: ${this.borderRadius.sm};
  --radius-md: ${this.borderRadius.md};
  --radius-lg: ${this.borderRadius.lg};
  --radius-xl: ${this.borderRadius.xl};
  --radius-full: ${this.borderRadius.full};

  --spacing-xs: ${this.spacing.xs};
  --spacing-sm: ${this.spacing.sm};
  --spacing-md: ${this.spacing.md};
  --spacing-lg: ${this.spacing.lg};
  --spacing-xl: ${this.spacing.xl};

  --font-family: ${this.typography.fontFamily};
}
`;
  },

  // 生成完整CSS样式
  generateFullStyles() {
    return `
${this.generateCSSVariables()}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: ${this.typography.fontFamily};
  font-size: ${this.typography.sizes.base};
  color: ${this.colors.text.primary};
  background: ${this.colors.background.gradient};
  line-height: 1.6;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  font-size: ${this.typography.sizes.base};
  font-weight: ${this.typography.weights.semibold};
  border-radius: ${this.borderRadius.full};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.btn-primary {
  background: ${this.colors.primary.gradientSimple};
  color: ${this.colors.background.white};
  box-shadow: 0 4px 12px rgba(255,77,79,0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: ${this.shadows.hover};
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-outline {
  background: transparent;
  border: 2px solid ${this.colors.background.white};
  color: ${this.colors.background.white};
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
}

.btn-secondary {
  background: ${this.colors.background.gray};
  color: ${this.colors.text.primary};
}

.btn-secondary:hover {
  background: #E8E8E8;
}

/* 卡片样式 */
.card {
  background: ${this.colors.background.white};
  border-radius: ${this.borderRadius.lg};
  padding: ${this.spacing.lg};
  box-shadow: ${this.shadows.md};
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: ${this.shadows.lg};
}

.card-title {
  font-size: ${this.typography.sizes.lg};
  font-weight: ${this.typography.weights.semibold};
  color: ${this.colors.text.primary};
  margin-bottom: ${this.spacing.md};
}

/* Hero Banner样式 */
.hero-banner {
  background: ${this.colors.primary.gradient};
  border-radius: ${this.borderRadius.xl};
  padding: ${this.spacing.xl};
  color: ${this.colors.background.white};
  position: relative;
  overflow: hidden;
  box-shadow: ${this.shadows.lg};
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 40%);
  pointer-events: none;
}

.hero-tag {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 6px 16px;
  border-radius: ${this.borderRadius.full};
  font-size: ${this.typography.sizes.sm};
  font-weight: ${this.typography.weights.medium};
  margin-bottom: ${this.spacing.sm};
}

.hero-title {
  font-size: ${this.typography.sizes['2xl']};
  font-weight: ${this.typography.weights.bold};
  margin-bottom: ${this.spacing.sm};
  position: relative;
}

.hero-subtitle {
  font-size: ${this.typography.sizes.lg};
  opacity: 0.9;
  margin-bottom: ${this.spacing.lg};
  position: relative;
}

.hero-buttons {
  display: flex;
  gap: ${this.spacing.sm};
  position: relative;
}

/* 统计卡片 */
.stat-card {
  background: ${this.colors.background.white};
  border-radius: ${this.borderRadius.lg};
  padding: ${this.spacing.lg};
  box-shadow: ${this.shadows.sm};
}

.stat-label {
  font-size: ${this.typography.sizes.sm};
  color: ${this.colors.text.secondary};
  margin-bottom: 8px;
}

.stat-value {
  font-size: ${this.typography.sizes['2xl']};
  font-weight: ${this.typography.weights.bold};
}

/* 表单样式 */
.form-item {
  margin-bottom: ${this.spacing.md};
}

.form-item label {
  display: block;
  font-size: ${this.typography.sizes.sm};
  font-weight: ${this.typography.weights.medium};
  color: ${this.colors.text.secondary};
  margin-bottom: 8px;
}

.form-item .required {
  color: ${this.colors.error};
}

.form-input {
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  font-size: ${this.typography.sizes.base};
  font-family: ${this.typography.fontFamily};
  border: 2px solid ${this.colors.border};
  border-radius: ${this.borderRadius.md};
  outline: none;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: ${this.colors.primary.main};
  box-shadow: 0 0 0 3px rgba(255,77,79,0.1);
}

.form-input::placeholder {
  color: ${this.colors.text.light};
}

.form-input.error {
  border-color: ${this.colors.error};
}

.error-message {
  display: block;
  font-size: ${this.typography.sizes.xs};
  color: ${this.colors.error};
  margin-top: 4px;
}

/* 表格样式 */
.data-table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: ${this.colors.background.gray};
  font-weight: ${this.typography.weights.semibold};
  color: ${this.colors.text.secondary};
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid ${this.colors.border};
}

.data-table td {
  padding: 14px 16px;
  border-bottom: 1px solid ${this.colors.border};
  color: ${this.colors.text.primary};
}

.data-table tr:hover {
  background: rgba(255,77,79,0.02);
}

/* 上传区域 */
.upload-area {
  border: 2px dashed ${this.colors.border};
  border-radius: ${this.borderRadius.lg};
  padding: ${this.spacing.xl};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: ${this.colors.primary.main};
  background: rgba(255,77,79,0.02);
}

.upload-icon {
  font-size: 48px;
  margin-bottom: ${this.spacing.sm};
}

.upload-title {
  font-size: ${this.typography.sizes.base};
  color: ${this.colors.text.primary};
  margin-bottom: 8px;
}

.upload-hint {
  font-size: ${this.typography.sizes.sm};
  color: ${this.colors.text.light};
}

/* 间距工具类 */
.mt-sm { margin-top: ${this.spacing.sm}; }
.mt-md { margin-top: ${this.spacing.md}; }
.mt-lg { margin-top: ${this.spacing.lg}; }
.mb-sm { margin-bottom: ${this.spacing.sm}; }
.mb-md { margin-bottom: ${this.spacing.md}; }
.mb-lg { margin-bottom: ${this.spacing.lg}; }

/* 响应式 */
@media (max-width: 768px) {
  .hero-banner {
    padding: ${this.spacing.lg};
  }

  .hero-title {
    font-size: ${this.typography.sizes.xl};
  }

  .hero-subtitle {
    font-size: ${this.typography.sizes.base};
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
`;
  },

  // 生成Hero Banner样式
  generateHeroBannerStyles() {
    return `
.hero-banner {
  background: ${this.colors.primary.gradient};
  border-radius: ${this.borderRadius.xl};
  padding: ${this.spacing.xl};
  color: ${this.colors.background.white};
  position: relative;
  overflow: hidden;
  box-shadow: ${this.shadows.lg};
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 40%);
  pointer-events: none;
}
`;
  },

  // 生成卡片样式
  generateCardStyles() {
    return `
.card {
  background: ${this.colors.background.white};
  border-radius: ${this.borderRadius.lg};
  padding: ${this.spacing.lg};
  box-shadow: ${this.shadows.md};
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: ${this.shadows.lg};
}
`;
  },

  // 生成按钮样式
  generateButtonStyles() {
    return `
.btn-primary {
  background: ${this.colors.primary.gradientSimple};
  color: ${this.colors.background.white};
  border: none;
  border-radius: ${this.borderRadius.full};
  padding: 12px 32px;
  font-weight: ${this.typography.weights.semibold};
  box-shadow: 0 4px 12px rgba(255,77,79,0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: ${this.shadows.hover};
}

.btn-outline {
  background: transparent;
  border: 2px solid ${this.colors.background.white};
  color: ${this.colors.background.white};
  border-radius: ${this.borderRadius.full};
  padding: 10px 32px;
  transition: all 0.3s ease;
}
`;
  }
};

export default MiniMaxDesignSystem;
