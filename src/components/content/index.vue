<template>
  <main class="content">
    <ContentHeaderVue />
    <ContentStaticsVue />
    <ContentAbout />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContentHeaderVue from "./contentHeader.vue";
import ContentStaticsVue from "./contentStatics.vue";
import ContentAbout from "./contentAbout.vue";
export default defineComponent({
  components: { ContentHeaderVue, ContentStaticsVue, ContentAbout },
  setup() {
    return {};
  },
});
</script>
