<template>
  <HeaderVue />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderVue from "@/components/header.vue";

export default defineComponent({
  components: { HeaderVue },
  setup() {
    return {
      HeaderVue,
    };
  },
});
</script>
