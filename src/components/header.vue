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
    <Menu class="menuIcon" />
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/icons/logo.vue";
import Menu from "@/components/icons/hamburger.vue";
export default defineComponent({
  components: { Logo, Menu },
  setup() {
    return {};
  },
});
</script>
