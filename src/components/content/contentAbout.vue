<template>
  <div class="contentAbout card">
    <p class="title">About this project</p>
    <p class="description">
      The Matercarft Bamboo Mointer Riser is the study and stylish plateform
      that elavates your screen to more comfortable viewing height.Placing your
      mointer at eye level has the potentialto imrove your posture nad make you
      more comfortable while at work, helping you stay focused at task at hand.
    </p>
    <p class="description">
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allows notepads, pens and USB stoicks to
      be stored under the stand.
    </p>
    <BambooCardVue
      v-for="(stand, index) in bambooStands"
      :key="index"
      :data="stand"
    ></BambooCardVue>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BambooCardVue from "./resuable/bambooCard.vue";
import { useBambooStore } from "@/stores/counter";

export default defineComponent({
  components: { BambooCardVue },
  setup() {
    const { bambooStands } = useBambooStore();

    return {
      bambooStands,
    };
  },
});
</script>
