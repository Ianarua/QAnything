<template>
  <div class="chat-source">
    <PdfView v-if="sourceType === 'pdf' && sourceUrl" :source-url="sourceUrl" />
    <DocxView v-if="sourceType === 'docx' && sourceUrl" :source-url="sourceUrl" />
    <ExcelView v-if="sourceType === 'xlsx' && sourceUrl" :source-url="sourceUrl" />
    <a-image
      v-if="imageArr.includes(sourceType) && sourceUrl"
      :src="sourceUrl"
      :preview-mask="false"
    />
    <div v-if="sourceType === 'txt'" class="txt" style="white-space: pre-wrap">
      {{ textContent }}
    </div>
    <HighLightMarkDown v-if="sourceType === 'md'" class="txt" :content="textContent" />
  </div>
</template>

<script setup lang="ts">
import PdfView from '@/components/Source/PdfView.vue';
import ExcelView from '@/components/Source/ExcelView.vue';
import DocxView from '@/components/Source/DocxView.vue';
import HighLightMarkDown from '@/components/HighLightMarkDown.vue';
import { useChatSource } from '@/store/useChatSource';
import { resultControl } from '@/utils/utils';
import urlResquest from '@/services/urlConfig';
import message from 'ant-design-vue/es/message';

const { sourceUrl, sourceType, textContent } = storeToRefs(useChatSource());
const { setChatSourceVisible, setSourceType, setSourceUrl, setTextContent } = useChatSource();

let imageArr = ['jpg', 'png', 'jpeg'];

// 检查信息来源的文件是否支持窗口化渲染
let supportSourceTypes = ['pdf', 'docx', 'xlsx', 'txt', 'md', 'jpg', 'png', 'jpeg'];
const checkFileType = filename => {
  if (!filename) {
    return false;
  }
  const arr = filename.split('.');
  if (arr.length) {
    const suffix = arr.pop();
    return supportSourceTypes.includes(suffix);
  } else {
    return false;
  }
};

const handleChatSource = file => {
  const isSupport = checkFileType(file.file_name);
  if (isSupport) {
    queryFile(file);
  }
};

defineExpose({ handleChatSource, checkFileType });

async function queryFile(file) {
  try {
    setSourceUrl(null);
    const res: any = await resultControl(await urlResquest.getFile({ file_id: file.file_id }));
    const suffix = file.file_name.split('.').pop();
    const b64Type = getB64Type(suffix);
    setSourceType(suffix);
    setSourceUrl(`data:${b64Type};base64,${res.file_base64}`);
    if (suffix === 'txt' || suffix === 'md') {
      const decodedTxt = atob(res.file_base64);
      const correctStr = decodeURIComponent(escape(decodedTxt));
      setTextContent(correctStr);
      setChatSourceVisible(true);
    } else {
      setChatSourceVisible(true);
    }
  } catch (e) {
    message.error(e.msg || '获取文件失败');
  }
}

let b64Types = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
  'text/markdown',
  'image/jpeg',
  'image/png',
  'image/jpeg',
];

function getB64Type(suffix) {
  const index = supportSourceTypes.indexOf(suffix);
  return b64Types[index];
}
</script>

<style lang="scss" scoped>
.chat-source {
  width: 100%;
  min-height: 35vh;
  max-height: calc(90vh - 48px);
  overflow-y: scroll;
  border-radius: 8px;
  display: flex;

  &::-webkit-scrollbar {
    height: 14px !important;
  }

  .txt {
    width: 680px;
    height: auto;
    padding: 15px 20px 30px 20px;
  }

  :deep(.ant-image) {
    margin: 5px auto;
    max-width: 100%;
  }
}
</style>
