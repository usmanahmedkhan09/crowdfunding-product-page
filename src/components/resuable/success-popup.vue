<template>
  <div class="success_popup card">
    <IconCheckVue />
    <div class="content">
      <p class="message_title">Thanks for your support!</p>
      <p class="message_des">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser Worldwide. You will get and eamil once our campagin is
        completed
      </p>
      <button class="button" @click="$emit('closeModal')">Got it!</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconCheckVue from "../icons/check.vue";

export default defineComponent({
  components: { IconCheckVue },
  setup() {
    return {};
  },
});
</script>
