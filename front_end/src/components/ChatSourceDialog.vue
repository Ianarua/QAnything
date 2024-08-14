<template>
  <Teleport to="body">
    <a-modal
      v-model:open="chatSourceVisible"
      centered
      :title="common.dataSource"
      wrap-class-name="chat-source-modal"
      :footer="null"
      force-render
    >
      <Source ref="sourceRef" />
    </a-modal>
  </Teleport>
</template>
<script lang="ts" setup>
import Source from './Source/index.vue';
import { useChatSource } from '@/store/useChatSource';
import { getLanguage } from '@/language/index';

const common = getLanguage().common;

const { chatSourceVisible } = storeToRefs(useChatSource());

const sourceRef = ref<InstanceType<typeof Source>>(null);

const handleChatSource = async file => {
  await nextTick();
  sourceRef.value.handleChatSource(file);
};

const checkFileType = async fileName => {
  await nextTick();
  return sourceRef.value.checkFileType(fileName);
};

defineExpose({ handleChatSource, checkFileType });
</script>
<style lang="scss" scoped></style>
