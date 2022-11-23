<template>
  <div class="pledge_container card">
    <div class="pledge_container--header">
      <IconCloseVue @click="$emit('closeModal')" />
      <div class="title_wrapper">
        <h1>Back this project</h1>
        <p>
          Want to support us in bringing MasterCraft Bamboo Mointer Riser out in
          the world
        </p>
      </div>
    </div>
    <PledgeCardVue
      v-for="(data, index) in bambooStands"
      :data="data"
      :key="index"
      @toggleStatus="(val) => toggleStatus(val)"
      @closeModal="$emit('closeModal')"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import IconCloseVue from "../icons/IconClose.vue";
import PledgeCardVue from "./resuable/pledgeCard.vue";
import { useBambooStore } from "@/stores/counter";

export default defineComponent({
  components: { IconCloseVue, PledgeCardVue },
  setup() {
    const { bambooStands, toggleStatus } = useBambooStore();

    return {
      bambooStands,
      toggleStatus,
    };
  },
});
</script>
