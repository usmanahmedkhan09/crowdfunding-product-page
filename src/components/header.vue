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
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/icons/logo.vue";
export default defineComponent({
  components: { Logo },
  setup() {
    return {};
  },
});
</script>
