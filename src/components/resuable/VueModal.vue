<template>
  <div class="modal_container" :class="show ? 'open' : 'close'" v-if="show">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
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
