<template>
  <main class="content">
    <ContentHeaderVue />
    <ContentStaticsVue />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContentHeaderVue from "./contentHeader.vue";
import ContentStaticsVue from "./contentStatics.vue";

export default defineComponent({
  components: { ContentHeaderVue, ContentStaticsVue },
  setup() {
    return {};
  },
});
</script>
