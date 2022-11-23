<template>
  <div class="contentHeader card">
    <div class="header_logo">
      <MastercraftLogo />
    </div>
    <h2 class="title">Mastercraft Bamboo Monitor Riser</h2>
    <p class="subtitle">
      A beautiful & handcrafted moniter stand to reduce neck and eye strain
    </p>
    <div class="buttons">
      <button class="button" @click="showModal = true">
        Back this project
      </button>
      <div
        @click="isActive = !isActive"
        class="bookmarkBtn"
        :class="{ active: isActive }"
      >
        <div class="icon_wrapper">
          <BookmarkIcon />
        </div>
        <span>{{ isActive ? "BookMark" : "BookMarked" }}</span>
      </div>
    </div>
    <vue-modal :show="showModal">
      <PledgeCardContainer @closeModal="(val) => closeModal(val)" />
    </vue-modal>
    <vue-modal :show="openSuccessModal">
      <successPopupVue @closeModal="openSuccessModal = false" />
    </vue-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MastercraftLogo from "../icons/logo-mastercraft.vue";
import BookmarkIcon from "../icons/bookmark.vue";
import PledgeCardContainer from "./pledgeCardContainer.vue";
import SuccessPopupVue from "../resuable/success-popup.vue";

export default defineComponent({
  components: {
    MastercraftLogo,
    BookmarkIcon,
    PledgeCardContainer,
    SuccessPopupVue,
  },
  setup() {
    const isActive = ref(true);
    const showModal = ref(false);
    const openSuccessModal = ref(false);

    const closeModal = (val: Boolean) => {
      if (val) {
        showModal.value = false;
        setTimeout(() => {
          openSuccessModal.value = true;
        }, 500);
      } else {
        showModal.value = false;
      }
    };

    return {
      showModal,
      isActive,
      openSuccessModal,
      closeModal,
    };
  },
});
</script>
