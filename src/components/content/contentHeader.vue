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
      <button class="button">Back this project</button>
      <div class="bookmarkBtn">
        <div class="icon_wrapper">
          <BookmarkIcon />
        </div>
        <span>BookMark</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MastercraftLogo from "../icons/logo-mastercraft.vue";
import BookmarkIcon from "../icons/bookmark.vue";

export default defineComponent({
  components: { MastercraftLogo, BookmarkIcon },
  setup() {
    return {};
  },
});
</script>
