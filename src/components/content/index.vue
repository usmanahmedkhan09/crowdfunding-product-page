<template>
  <main class="content">
    <ContentHeaderVue />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContentHeaderVue from "./contentHeader.vue";

export default defineComponent({
  components: { ContentHeaderVue },
  setup() {
    return {};
  },
});
</script>
