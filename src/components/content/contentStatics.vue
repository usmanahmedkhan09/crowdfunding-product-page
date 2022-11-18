<template>
  <div class="contentStatics card">
    <div class="wrapper">
      <div class="amount">
        <h2>89,914</h2>
        <span>of 100,000 backed</span>
      </div>
      <div class="backers">
        <h2>5,007</h2>
        <span>total backers</span>
      </div>
      <div class="days">
        <h2>56</h2>
        <span>days left</span>
      </div>
    </div>
    <div class="input_range">
      <input type="range" name="price" id="price" min="0" max="100" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
