<template>
  <div class="sidebar">
    <div class="icon_wrapper">
      <Logo />
      <IconCloseVue @click="$emit('toggleSidebar')" class="close_icon" />
    </div>
    <div class="card">
      <ul>
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/icons/logo.vue";
import IconCloseVue from "../icons/IconClose.vue";

export default defineComponent({
  components: { Logo, IconCloseVue },
  setup() {
    return {};
  },
});
</script>
