/**
 * MiniMax Components
 * Minimax风格Vue组件库
 */

const MiniMaxComponents = {
  // Hero Banner组件
  heroBanner: {
    template: `
<div class="hero-banner">
  <div class="hero-content">
    <div class="hero-tag">{{ tag }}</div>
    <h1 class="hero-title">{{ title }}</h1>
    <p class="hero-subtitle">{{ subtitle }}</p>
    <div class="hero-buttons">
      <button class="btn btn-outline" @click="onPrimaryAction">{{ primaryButtonText }}</button>
      <button class="btn btn-outline" @click="onSecondaryAction">{{ secondaryButtonText }}</button>
    </div>
    <div class="hero-features" v-if="features && features.length">
      <div v-for="(feature, index) in features" :key="index" class="feature-item">
        <div class="feature-icon">{{ feature.icon }}</div>
        <div class="feature-text">
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
`,
    props: {
      tag: { type: String, default: '标签' },
      title: { type: String, default: '主标题' },
      subtitle: { type: String, default: '副标题' },
      primaryButtonText: { type: String, default: '主要操作' },
      secondaryButtonText: { type: String, default: '次要操作' },
      features: { type: Array, default: () => [] }
    },
    methods: {
      onPrimaryAction() {
        this.$emit('primary-action');
      },
      onSecondaryAction() {
        this.$emit('secondary-action');
      }
    }
  },

  // 统计卡片组件
  statCard: {
    template: `
<div class="stat-card">
  <div class="stat-label">{{ label }}</div>
  <div class="stat-value" :style="{ color: color }">{{ value }}</div>
  <div v-if="trend" class="stat-trend" :class="trendClass">
    <span class="trend-icon">{{ trendIcon }}</span>
    {{ trend }}
  </div>
</div>
`,
    props: {
      label: { type: String, required: true },
      value: { type: [String, Number], required: true },
      color: { type: String, default: '#FF4D4F' },
      trend: { type: String, default: '' }
    },
    computed: {
      trendClass() {
        if (!this.trend) return '';
        return this.trend.includes('+') ? 'trend-up' : 'trend-down';
      },
      trendIcon() {
        if (!this.trend) return '';
        return this.trend.includes('+') ? '↑' : '↓';
      }
    }
  },

  // 数据表格组件
  dataTable: {
    template: `
<div class="data-table-container">
  <table class="data-table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" @click="onRowClick(row)">
        <td v-for="column in columns" :key="column.key">
          <slot :name="column.key" :row="row">
            {{ row[column.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="!data || data.length" class="table-empty">
    暂无数据
  </div>
</div>
`,
    props: {
      columns: { type: Array, required: true },
      data: { type: Array, default: () => [] }
    },
    methods: {
      onRowClick(row) {
        this.$emit('row-click', row);
      }
    }
  },

  // 上传区域组件
  uploadArea: {
    template: `
<div
  class="upload-area"
  :class="{ 'is-dragover': isDragover }"
  @click="triggerFileInput"
  @dragover.prevent="onDragover"
  @dragleave="onDragleave"
  @drop.prevent="onDrop"
>
  <input
    ref="fileInput"
    type="file"
    :accept="accept"
    style="display: none"
    @change="onFileChange"
  >
  <div class="upload-icon">📁</div>
  <div class="upload-title">{{ title }}</div>
  <div class="upload-hint">{{ hint }}</div>
  <div v-if="fileList && fileList.length" class="upload-file-list">
    <div v-for="(file, index) in fileList" :key="index" class="upload-file-item">
      <span class="file-name">{{ file.name }}</span>
      <span class="file-remove" @click.stop="removeFile(index)">×</span>
    </div>
  </div>
</div>
`,
    props: {
      title: { type: String, default: '拖拽文件到此处，或点击上传' },
      hint: { type: String, default: '支持 .xlsx, .xls 格式' },
      accept: { type: String, default: '.xlsx,.xls' },
      multiple: { type: Boolean, default: false }
    },
    data() {
      return {
        isDragover: false,
        fileList: []
      };
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      onDragover() {
        this.isDragover = true;
      },
      onDragleave() {
        this.isDragover = false;
      },
      onDrop(e) {
        this.isDragover = false;
        const files = Array.from(e.dataTransfer.files);
        this.handleFiles(files);
      },
      onFileChange(e) {
        const files = Array.from(e.target.files);
        this.handleFiles(files);
      },
      handleFiles(files) {
        if (this.multiple) {
          this.fileList = [...this.fileList, ...files];
        } else {
          this.fileList = [files[0]];
        }
        this.$emit('change', this.fileList);
      },
      removeFile(index) {
        this.fileList.splice(index, 1);
        this.$emit('change', this.fileList);
      }
    }
  },

  // 表单输入组件
  formInput: {
    template: `
<div class="form-item">
  <label v-if="label">
    {{ label }}
    <span v-if="required" class="required">*</span>
  </label>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :class="{ 'error': error }"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <span v-if="error" class="error-message">{{ error }}</span>
</div>
`,
    props: {
      modelValue: { type: [String, Number], default: '' },
      label: { type: String, default: '' },
      type: { type: String, default: 'text' },
      placeholder: { type: String, default: '' },
      required: { type: Boolean, default: false },
      error: { type: String, default: '' }
    },
    emits: ['update:modelValue']
  },

  // 文本域组件
  formTextarea: {
    template: `
<div class="form-item">
  <label v-if="label">
    {{ label }}
    <span v-if="required" class="required">*</span>
  </label>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :class="{ 'error': error }"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
  <span v-if="error" class="error-message">{{ error }}</span>
</div>
`,
    props: {
      modelValue: { type: String, default: '' },
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
      rows: { type: Number, default: 4 },
      required: { type: Boolean, default: false },
      error: { type: String, default: '' }
    },
    emits: ['update:modelValue']
  },

  // 下拉选择组件
  formSelect: {
    template: `
<div class="form-item">
  <label v-if="label">
    {{ label }}
    <span v-if="required" class="required">*</span>
  </label>
  <select
    :value="modelValue"
    :class="{ 'error': error }"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
  <span v-if="error" class="error-message">{{ error }}</span>
</div>
`,
    props: {
      modelValue: { type: [String, Number], default: '' },
      label: { type: String, default: '' },
      placeholder: { type: String, default: '请选择' },
      options: { type: Array, default: () => [] },
      required: { type: Boolean, default: false },
      error: { type: String, default: '' }
    },
    emits: ['update:modelValue']
  },

  // 复选框组件
  formCheckbox: {
    template: `
<div class="form-checkbox" :class="{ 'is-checked': modelValue }">
  <label>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <span class="checkbox-box"></span>
    <span class="checkbox-label">{{ label }}</span>
  </label>
</div>
`,
    props: {
      modelValue: { type: Boolean, default: false },
      label: { type: String, default: '' }
    },
    emits: ['update:modelValue']
  },

  // 标签组件
  tag: {
    template: `
<span class="tag" :class="'tag-' + type">
  {{ text }}
</span>
`,
    props: {
      text: { type: String, required: true },
      type: { type: String, default: 'default' }
    }
  },

  // 分页组件
  pagination: {
    template: `
<div class="pagination">
  <button
    class="pagination-btn"
    :disabled="currentPage <= 1"
    @click="$emit('update:currentPage', currentPage - 1)"
  >
    上一页
  </button>
  <span class="pagination-info">
    第 {{ currentPage }} / {{ totalPages }} 页
  </span>
  <button
    class="pagination-btn"
    :disabled="currentPage >= totalPages"
    @click="$emit('update:currentPage', currentPage + 1)"
  >
    下一页
  </button>
</div>
`,
    props: {
      currentPage: { type: Number, default: 1 },
      totalPages: { type: Number, default: 1 }
    },
    emits: ['update:currentPage']
  },

  // 模态框组件
  modal: {
    template: `
<div v-if="visible" class="modal-mask" @click="handleMaskClick">
  <div class="modal-container" :class="'modal-' + size" @click.stop>
    <div class="modal-header">
      <h3 class="modal-title">{{ title }}</h3>
      <button class="modal-close" @click="close">×</button>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
`,
    props: {
      visible: { type: Boolean, default: false },
      title: { type: String, default: '标题' },
      size: { type: String, default: 'medium' },
      maskClosable: { type: Boolean, default: true }
    },
    emits: ['update:visible', 'close'],
    methods: {
      close() {
        this.$emit('update:visible', false);
        this.$emit('close');
      },
      handleMaskClick() {
        if (this.maskClosable) {
          this.close();
        }
      }
    }
  },

  // 确认对话框
  confirmDialog: {
    template: `
<modal
  :visible="visible"
  title="确认"
  size="small"
  @update:visible="$emit('update:visible', $event)"
>
  <div class="confirm-content">
    <div class="confirm-icon">⚠️</div>
    <p>{{ message }}</p>
  </div>
  <template #footer>
    <button class="btn btn-secondary" @click="cancel">{{ cancelText }}</button>
    <button class="btn btn-primary" @click="confirm">{{ confirmText }}</button>
  </template>
</modal>
`,
    props: {
      visible: { type: Boolean, default: false },
      message: { type: String, default: '确定要执行此操作吗？' },
      confirmText: { type: String, default: '确定' },
      cancelText: { type: String, default: '取消' }
    },
    emits: ['update:visible', 'confirm', 'cancel'],
    components: { Modal: this.modal }
  }
};

// Vue组件注册
const MiniMaxComponentsInstaller = {
  install(Vue) {
    Object.keys(MiniMaxComponents).forEach(name => {
      Vue.component(name, MiniMaxComponents[name]);
    });
  }
};

export default MiniMaxComponents;
export { MiniMaxComponentsInstaller };
