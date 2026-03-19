/**
 * MiniMax Design Assets
 * 设计令牌、组件模板、动画预设、图标库
 */

// 设计令牌
const DesignTokens = {
  colors: {
    primary: {
      50: '#FFF1F1',
      100: '#FFE3E3',
      200: '#FFC7C7',
      300: '#FFA0A0',
      400: '#FF6B6B',
      500: '#FF4D4F',
      600: '#FF4042',
      700: '#E63946',
      800: '#D62839',
      900: '#B91C1C'
    },
    semantic: {
      success: '#52C41A',
      warning: '#FA8C16',
      error: '#FF4D4F',
      info: '#1890FF'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E8E8E8',
      300: '#D9D9D9',
      400: '#BFBFBF',
      500: '#999999',
      600: '#666666',
      700: '#444444',
      800: '#1A1A1A',
      900: '#000000'
    }
  },

  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px'
  },

  borderRadius: {
    none: '0',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px'
  },

  fontSize: {
    xs: ['12px', '16px'],
    sm: ['14px', '20px'],
    base: ['15px', '22px'],
    lg: ['18px', '26px'],
    xl: ['24px', '32px'],
    '2xl': ['32px', '40px'],
    '3xl': ['42px', '52px'],
    '4xl': ['48px', '60px']
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  },

  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    primary: '0 4px 12px rgba(255,77,79,0.3)',
    'primary-lg': '0 8px 32px rgba(255,77,79,0.25)',
    'primary-hover': '0 6px 20px rgba(255,77,79,0.4)'
  }
};

// 组件模板
const ComponentTemplates = {
  heroBanner: {
    variants: {
      default: {
        background: 'linear-gradient(135deg, #FF4D4F 0%, #FF6B6B 50%, #FF8585 100%)',
        padding: '48px',
        borderRadius: '20px'
      },
      compact: {
        background: 'linear-gradient(135deg, #FF4D4F 0%, #FF6B6B 100%)',
        padding: '32px',
        borderRadius: '16px'
      },
      minimal: {
        background: '#FF4D4F',
        padding: '24px',
        borderRadius: '12px'
      }
    }
  },

  card: {
    variants: {
      elevated: {
        background: '#FFFFFF',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        borderRadius: '16px',
        padding: '32px'
      },
      outlined: {
        background: '#FFFFFF',
        border: '2px solid #E8E8E8',
        borderRadius: '16px',
        padding: '32px'
      },
      filled: {
        background: '#F5F5F5',
        borderRadius: '16px',
        padding: '32px'
      }
    }
  },

  button: {
    variants: {
      primary: {
        background: 'linear-gradient(135deg, #FF4D4F, #E63946)',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 32px',
        boxShadow: '0 4px 12px rgba(255,77,79,0.3)'
      },
      outline: {
        background: 'transparent',
        border: '2px solid currentColor',
        borderRadius: '24px',
        padding: '10px 32px'
      },
      ghost: {
        background: 'transparent',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 32px'
      },
      secondary: {
        background: '#F5F5F5',
        color: '#1A1A1A',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 32px'
      }
    },
    sizes: {
      sm: {
        padding: '8px 16px',
        fontSize: '14px'
      },
      md: {
        padding: '12px 32px',
        fontSize: '15px'
      },
      lg: {
        padding: '16px 48px',
        fontSize: '16px'
      }
    }
  },

  statCard: {
    variants: {
      default: {
        background: '#FFFFFF',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      },
      bordered: {
        background: '#FFFFFF',
        border: '1px solid #E8E8E8',
        borderRadius: '16px',
        padding: '24px'
      }
    }
  },

  form: {
    input: {
      height: '44px',
      padding: '12px 16px',
      border: '2px solid #E8E8E8',
      borderRadius: '10px',
      fontSize: '15px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#666666'
    }
  },

  table: {
    header: {
      background: '#F5F5F5',
      fontWeight: '600',
      color: '#666666',
      padding: '14px 16px'
    },
    cell: {
      padding: '14px 16px',
      borderBottom: '1px solid #E8E8E8'
    }
  }
};

// 动画预设
const AnimationPresets = {
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  },

  keyframes: {
    fadeIn: `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    fadeInUp: `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
    fadeInDown: `
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0;
  }
}`,
    scaleIn: `
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`,
    pulse: `
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,
    shimmer: `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}`,
    spin: `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },

  delays: {
    100: '0.1s',
    200: '0.2s',
    300: '0.3s',
    400: '0.4s',
    500: '0.5s'
  }
};

// 图标库
const IconLibrary = {
  actions: {
    extract: '🎲',
    view: '👁️',
    edit: '✏️',
    delete: '🗑️',
    download: '📥',
    upload: '📤',
    print: '🖨️',
    share: '🔗',
    search: '🔍',
    filter: '🔽',
    sort: '↕️',
    refresh: '🔄',
    save: '💾',
    copy: '📋',
    cut: '✂️',
    paste: '📝',
    undo: '↩️',
    redo: '↪️'
  },
  navigation: {
    home: '🏠',
    records: '📋',
    units: '🏢',
    settings: '⚙️',
    backup: '💾',
    restore: '🔄',
    menu: '☰',
    close: '✕',
    back: '⬅️',
    forward: '➡️',
    up: '⬆️',
    down: '⬇️'
  },
  status: {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: 'ℹ️',
    loading: '⏳',
    pending: '⏰',
    done: '🏁',
    help: '❓'
  },
  files: {
    folder: '📁',
    file: '📄',
    excel: '📊',
    pdf: '📕',
    image: '🖼️',
    doc: '📝',
    zip: '📦',
    video: '🎬',
    audio: '🎵'
  },
  objects: {
    user: '👤',
    users: '👥',
    star: '⭐',
    heart: '❤️',
    money: '💰',
    calendar: '📅',
    clock: '🕐',
    location: '📍',
    phone: '📞',
    email: '✉️',
    link: '🔗',
    lock: '🔒',
    unlock: '🔓',
    key: '🔑'
  }
};

// 页面布局模板
const PageTemplates = {
  dashboard: {
    sections: ['hero', 'stats', 'content'],
    layout: {
      hero: { height: 'auto', padding: '48px' },
      stats: { grid: 4, gap: '24px' },
      content: { grid: 2, gap: '24px' }
    }
  },
  form: {
    sections: ['header', 'form', 'actions'],
    layout: {
      header: { padding: '24px 0' },
      form: { maxWidth: '600px', margin: '0 auto' },
      actions: { align: 'center', gap: '16px' }
    }
  },
  list: {
    sections: ['header', 'toolbar', 'table', 'pagination'],
    layout: {
      header: { padding: '24px 0' },
      toolbar: { align: 'space-between' },
      table: { striped: true, hover: true },
      pagination: { align: 'center' }
    }
  }
};

// 颜色映射
const ColorMaps = {
  primary: {
    main: '#FF4D4F',
    dark: '#E63946',
    light: '#FF8585',
    gradient: 'linear-gradient(135deg, #FF4D4F 0%, #FF6B6B 50%, #FF8585 100%)'
  },
  status: {
    success: '#52C41A',
    warning: '#FA8C16',
    error: '#FF4D4F',
    info: '#1890FF'
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    light: '#999999',
    disabled: '#BFBFBF'
  },
  background: {
    white: '#FFFFFF',
    gray: '#F5F5F5',
    dark: '#1A1A1A'
  }
};

// 导出所有资源
export {
  DesignTokens,
  ComponentTemplates,
  AnimationPresets,
  IconLibrary,
  PageTemplates,
  ColorMaps
};

export default {
  DesignTokens,
  ComponentTemplates,
  AnimationPresets,
  IconLibrary,
  PageTemplates,
  ColorMaps
};
