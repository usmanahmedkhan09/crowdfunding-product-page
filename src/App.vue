<template>
  <widget-container-modal />
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { container } from "jenesius-vue-modal";
export default defineComponent({
  components: { WidgetContainerModal: container },
  setup() {
    return {};
  },
});
</script>
