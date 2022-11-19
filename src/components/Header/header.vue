<template>
  <header class="header">
    <div class="logo">
      <Logo />
    </div>
    <nav>
      <ul>
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </nav>
    <Menu @click="showMoal = true" class="menuIcon" />
    <vue-modal :show="showMoal"></vue-modal>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Logo from "@/components/icons/logo.vue";
import Menu from "@/components/icons/hamburger.vue";
import SidebarVue from "./sidebar.vue";

export default defineComponent({
  components: { Logo, Menu, SidebarVue },
  setup() {
    const showMoal = ref(false);
    return { showMoal };
  },
});
</script>
