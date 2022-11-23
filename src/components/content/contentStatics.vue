<template>
  <div class="contentStatics card">
    <div class="wrapper">
      <div class="amount">
        <h2>
          {{ statics.totalamount.toLocaleString() }}
        </h2>
        <span>of 100,000 backed</span>
      </div>
      <div class="backers">
        <h2>
          {{ statics.backers.toLocaleString() }}
        </h2>
        <span>total backers</span>
      </div>
      <div class="days">
        <h2>{{ statics.days }}</h2>
        <span>days left</span>
      </div>
    </div>
    <div class="input_range">
      <progress id="file" value="89914" :max="100000"></progress>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useBambooStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const { statics } = useBambooStore();
    return {
      statics,
    };
  },
});
</script>
