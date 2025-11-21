<template>
  <div class="file-uploader text-center">
    <div
      class="dropzone border border-dashed p-4 text-center rounded"
      @dragover.prevent
      @drop.prevent="handleDrop"
      @click="handleClick"
      :class="{ 'dropzone-hover': isDragging }"
      @dragenter.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
    >
      <i class="bi bi-cloud-arrow-up fs-1 mb-2"></i>
      <p class="mb-1">拖拽文件到这里，或点击此区域选择文件</p>
      <p class="small text-muted mb-0">
        支持类型: {{ acceptTypesDisplay }} | 单文件最大: {{ maxSizeText }} | 最多 {{ maxFiles }} 个文件
      </p>

      <!-- 隐藏文件输入 -->
      <input ref="fileInput" type="file" multiple class="d-none" @change="handleFileSelect" :accept="acceptTypes" />
    </div>

    <!-- 文件列表 -->
    <ul class="list-group mt-3" ref="sortableEl">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(file, index) in files" :key="file.id">
        <div class="d-flex align-items-center">
          <img
            v-if="file.preview"
            :src="file.preview"
            class="me-2 rounded"
            style="width: 50px; height: 50px; object-fit: cover"
            alt="preview"
          />
          <i v-else class="bi bi-file-earmark-pdf text-danger fs-2 me-2"></i>
          <!-- PDF/其他文件图标 -->
          <div>
            <strong>{{ file.file.name }}</strong>
            <div class="text-muted small">{{ formatBytes(file.file.size) }}</div>

            <div class="progress mt-1" v-if="file.progress > 0">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                :style="{ width: file.progress + '%' }"
              >
                {{ file.progress }}%
              </div>
            </div>
          </div>
        </div>

        <div>
          <button class="btn btn-sm btn-outline-danger" @click="removeFile(index)">删除</button>
        </div>
      </li>
    </ul>

    <!-- 上传按钮 -->
    <button class="btn btn-primary mt-3" :disabled="files.length === 0 || uploading" @click="uploadAll">
      <i class="bi bi-send"></i> {{ uploading ? "上传中..." : "开始上传" }}
    </button>
  </div>
</template>

<script setup lang="ts">
// 修复5：组件卸载时清理所有预览 URL
import { computed, onMounted, onUnmounted, ref } from "vue";
import axios from "axios";
import Sortable from "sortablejs";

// 修复1：正确定义 UploadFile 接口
interface UploadFile {
  id: number;
  file: File;
  progress: number;
  preview?: string; // 修复：添加 preview 属性
  uploadedUrl?: string;
}

const props = defineProps({
  acceptTypes: { type: String, default: ".modules,.jpg,.png" },
  maxSize: { type: Number, default: 5 * 1024 * 1024 }, // 5MB
  maxFiles: { type: Number, default: 5 },
  uploadUrl: { type: String, required: true }
});

const emit = defineEmits<{
  (event: "success", urls: (string | undefined)[]): void;
}>();

const files = ref<UploadFile[]>([]);
const uploading = ref(false);
const isDragging = ref(false);
let idCounter = 0;

const fileInput = ref<HTMLInputElement | null>(null);
const sortableEl = ref<HTMLElement | null>(null);

const formatBytes = (x: number) => (x / 1024 / 1024).toFixed(2) + " MB";
const maxSizeText = formatBytes(props.maxSize);

const acceptTypesDisplay = computed(() => props.acceptTypes.replace(/\./g, "").replace(/,/g, ", "));

// 修复2：安全地处理点击事件
function handleClick() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files) return;
  addFiles(Array.from(input.files));
  input.value = "";
}

function handleDrop(event: DragEvent) {
  if (!event.dataTransfer) return;
  addFiles(Array.from(event.dataTransfer.files));
  isDragging.value = false;
}

function addFiles(selected: File[]) {
  if (files.value.length + selected.length > props.maxFiles) {
    alert(`最多只能上传 ${props.maxFiles} 个文件`);
    return;
  }

  selected.forEach(file => {
    if (file.size > props.maxSize) {
      alert(`${file.name} 超过最大限制 ${maxSizeText}`);
      return;
    }

    let preview: string | undefined;
    if (file.type.startsWith("image/")) {
      preview = URL.createObjectURL(file); // 生成图片预览
    }

    // 修复3：正确创建 UploadFile 对象
    const uploadFile: UploadFile = {
      id: idCounter++,
      file,
      progress: 0,
      preview // 现在 preview 是接口的一部分
    };

    files.value.push(uploadFile);
  });
}

function removeFile(index: number) {
  // 修复4：清理预览 URL，避免内存泄漏
  const file = files.value[index];
  if (file?.preview) {
    URL.revokeObjectURL(file.preview);
  }
  files.value.splice(index, 1);
}

onMounted(() => {
  if (sortableEl.value) {
    new Sortable(sortableEl.value, {
      animation: 150,
      handle: ".list-group-item"
    });
  }
});

async function uploadAll() {
  if (files.value.length === 0) return;

  uploading.value = true;
  try {
    for (const f of files.value) {
      await uploadFile(f);
    }
    emit(
      "success",
      files.value.map(f => f.uploadedUrl)
    );
  } catch (error) {
    console.error("上传失败:", error);
    alert("上传失败，请重试");
  } finally {
    uploading.value = false;
  }
}

async function uploadFile(item: UploadFile) {
  const formData = new FormData();
  formData.append("files", item.file);

  const response = await axios.post(props.uploadUrl, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: progressEvent => {
      if (progressEvent.total) {
        item.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      }
    }
  });

  item.uploadedUrl = response.data.url;
}

onUnmounted(() => {
  files.value.forEach(file => {
    if (file.preview) {
      URL.revokeObjectURL(file.preview);
    }
  });
});
</script>

<style scoped>
.dropzone {
  cursor: pointer;
  background: #f8f9fa;
  border: 2px dashed #6f42c1;
  border-radius: 8px;
  transition: all 0.2s;
}
.dropzone-hover {
  background: #e2e6ea;
  border-color: #5a32a3;
}
</style>
