<template>
  <div class="bambooCard">
    <div class="bambooCard--header">
      <p v-if="!pledge" class="title">{{ bambooStand.title }}</p>
      <p v-if="!pledge" class="price">{{ bambooStand.priceTitle }}</p>
      <input v-if="pledge" type="radio" class="radioBtn" />
      <div v-if="pledge" class="title_wrapper">
        <p class="title">{{ bambooStand.title }}</p>
        <p class="price">{{ bambooStand.priceTitle }}</p>
      </div>
      <h1 v-if="pledge">
        {{ bambooStand.left }}
        <sup>left</sup>
      </h1>
    </div>
    <div class="bambooCard--body">
      <p>{{ bambooStand.description }}</p>
    </div>
    <div class="bambooCard--footer" v-if="!pledge">
      <h1>
        {{ bambooStand.left }}
        <sup>left</sup>
      </h1>
      <button class="button">{{ bambooStand.btntext }}</button>
    </div>
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
