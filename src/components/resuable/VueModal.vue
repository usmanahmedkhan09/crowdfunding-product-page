<template>
  <div class="modal_container" :class="show ? 'open' : 'close'" v-if="show">
    <div class="modal--body">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
