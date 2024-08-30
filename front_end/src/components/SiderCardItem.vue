<!--
 * @Author: Ianarua 306781523@qq.com
 * @Date: 2024-07-23 11:10:08
 * @LastEditors: Ianarua 306781523@qq.com
 * @LastEditTime: 2024-07-31 14:03:20
 * @FilePath: front_end/src/components/SiderCardItem.vue
 * @Description: QuickStart -> SiderCard的每一项，传入HistoryList和点击函数
 -->
<template>
  <div
    :class="['card', chatId === cardData.historyId ? 'active' : '', showLoading ? 'disabled' : '']"
  >
    <a-popover overlay-class-name="card-hover" placement="right">
      <template #content>
        <div class="tools-box">
          <ul>
            <!--            <li @click="manage({ kb_name: cardData.title, kb_id: cardData.kbId })">-->
            <!--              <SvgIcon class="edit" name="icon-manage"></SvgIcon>-->
            <!--              <span class="tool-name">{{ common.manage }}</span>-->
            <!--            </li>-->
            <li @click="editKnowledgeBase()">
              <SvgIcon class="edit" name="edit" />
              <span class="tool-name">{{ common.rename }}</span>
            </li>
            <li @click="deleteKnowledgeBase({ kb_name: cardData.title, kb_id: cardData.kbId })">
              <SvgIcon class="delete" name="delete" />
              <span class="tool-name">{{ common.delete }}</span>
            </li>
          </ul>
        </div>
      </template>
      <div class="content">
        <div class="title">
          <p v-if="!cardData.isEdit" class="title-text">{{ cardData.title }}</p>
          <div v-else-if="cardData.isEdit" class="editing">
            <p class="title-text">
              <a-input v-model:value="editTitle" type="text" />
            </p>
            <span class="icon-box">
              <SvgIcon class="edit" name="card-confirm" @click.stop="ok()"></SvgIcon>
              <SvgIcon class="delete" name="card-cancel" @click.stop="close()"></SvgIcon>
            </span>
          </div>
        </div>
      </div>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
// import { pageStatus } from '@/utils/enum';
import { IKnowledgeItem } from '@/utils/types';

import { IHistoryList, useQuickStart } from '@/store/useQuickStart';
import { useKnowledgeBase } from '@/store/useKnowledgeBase';
import { getLanguage } from '@/language';
import message from 'ant-design-vue/es/message';

const { setShowDeleteModal, setCurrentId } = useKnowledgeBase();
const { showDeleteModal } = storeToRefs(useKnowledgeBase());
const common = getLanguage().common;
const { chatId, showLoading, deleteChatId } = storeToRefs(useQuickStart());
const { renameHistory } = useQuickStart();

interface IHistoryListOptional extends Partial<IHistoryList> {
  title: string;
  color?: string;
}

// title必选, historyId、kbId可选
interface IProps {
  cardData: IHistoryListOptional & { isEdit: boolean };
}

const props = defineProps<IProps>();
const { cardData } = toRefs(props);

const emit = defineEmits(['edit']);

// // 管理知识库
// const manage = (item: IKnowledgeItem) => {
//   setCurrentId(item.kb_id);
//   setCurrentKbName(item.kb_name);
//   setDefault(pageStatus.optionlist);
// };

// const isEdit = ref(false);

// 暂存修改后的title
const editTitle = ref('');

// 点击修改标题
const editKnowledgeBase = () => {
  editTitle.value = cardData.value.title;
  emit('edit', { historyId: cardData.value.historyId, isEdit: true });
  // isEdit.value = true;
};

//确定修改
const ok = async () => {
  try {
    renameHistory(chatId.value, editTitle.value);
    emit('edit', { historyId: cardData.value.historyId, isEdit: false });
    editTitle.value = '';
    // isEdit.value = false;
    message.success(common.renameSucceeded);
  } catch (err) {
    message.error(err.msg || common.renameFailed);
  }
};
//取消修改
const close = () => {
  editTitle.value = '';
  // isEdit.value = false;
  emit('edit', { historyId: cardData.value.historyId, isEdit: false });
};

// 删除知识库
const deleteKnowledgeBase = (item: IKnowledgeItem) => {
  deleteChatId.value = cardData.value.historyId;
  setShowDeleteModal(!showDeleteModal.value);
  setCurrentId(item.kb_id);
  console.log(`删除${item.kb_id}`);
};
</script>

<style lang="scss" scoped>
.card {
  width: 232px;
  overflow: hidden;
  position: relative;
  height: 48px;
  margin: 0 auto 16px;
  border-radius: 8px;
  background: #333647;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;

  .tools-box {
    background: #333647;

    ul {
      width: 100%;

      li {
        cursor: pointer;
        display: flex;
        width: 80px;
        padding: 0 2px;
        margin-bottom: 3px;
        box-sizing: content-box;
        height: 28px;
        align-items: center;
        font-size: 14px;
        font-weight: normal;
        line-height: 22px;
        color: #c0c0c0;

        .tool-name {
          color: #c0c0c0;
        }

        svg {
          margin: 0 6px 0 4px;
          width: 16px;
          height: 16px;
        }

        &:hover {
          background: #1e212f;
          color: #fff;
          border-radius: 12px;

          .tool-name {
            color: #fff;
          }
        }
      }
    }
  }

  .title {
    height: 22px;
    margin: 12px 1px 0 12px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    color: #222222;

    .editing {
      display: flex;
      align-items: center;

      .title-text {
        width: 160px;
        height: 28px;
        color: #ffffff;

        :deep(.ant-input) {
          padding: 2px 11px;
        }
      }

      .icon-box {
        color: #fff;
        display: flex;

        .edit,
        .delete {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .edit {
          margin-left: 12px;
          margin-right: 8px;
        }
      }

      :deep(.ant-input) {
        color: #999999;
        background: #fff;
        border-color: #7261e9;
      }
    }

    .title-text {
      width: 169px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #ffffff;
    }
  }
}

.card-hover {
  .ant-popover-arrow {
    display: none;
  }

  .ant-popover-content {
    .ant-popover-inner {
      transform: translateY(10px);
      background: #333647;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
  }
}

.active {
  background: linear-gradient(284deg, #7b5ef2 -1%, #c383fe 97%);
}

.disabled {
  cursor: not-allowed !important;

  span {
    cursor: not-allowed !important;
  }

  .close-icon {
    cursor: not-allowed !important;
  }

  .close-icon:hover {
    background: transparent !important;
  }
}
</style>
