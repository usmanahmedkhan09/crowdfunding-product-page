<template>
  <div class="bambooCard">
    <div class="bambooCard--header">
      <p class="title">{{ bambooStand.title }}</p>
      <p class="price">{{ bambooStand.priceTitle }}</p>
    </div>
    <div class="bambooCard--body">
      <p>{{ bambooStand.description }}</p>
    </div>
    <div class="bambooCard--footer">
      <h1>
        {{ bambooStand.left }}
        <sup>left</sup>
      </h1>
      <button class="button">{{ bambooStand.btntext }}</button>
    </div>
    <div class="disabled" v-if="bambooStand.left == 0"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
    pledge: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let bambooStand = ref(props.data);

    return { bambooStand };
  },
});
</script>
