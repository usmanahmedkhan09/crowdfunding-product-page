<template>
  <HeaderVue />
  <!-- <Content /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderVue from "@/components/Header/header.vue";
import Content from "@/components/content/index.vue";

export default defineComponent({
  components: { HeaderVue, Content },
  setup() {
    return {
      HeaderVue,
    };
  },
});
</script>
