<template>
  <div class="pledgeCard" :class="data.isActive ? 'active' : ''">
    <div class="pledgeCard--content">
      <div class="radio_wrapper">
        <input
          type="radio"
          class="radioBtn"
          :checked="data.isActive == true"
          @change="$emit('toggleStatus', data.title)"
        />
      </div>
      <div class="description_wrapper">
        <div class="description_header">
          <div class="wrapper">
            <p class="p_title">{{ data.title }}</p>
            <p class="p_price">{{ data.priceTitle }}</p>
          </div>
          <h1 v-if="data.left != null">
            {{ data.left }}
            <sup>left</sup>
          </h1>
        </div>
        <div class="description_body">
          <p>
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="data.isActive" class="pledgeCard--footer">
      <p>Enter your pledge</p>
      <div class="amount_wrapper">
        <div class="input_wrapper">
          <span>$</span>
          <input type="number" />
        </div>
        <button class="button">Continue</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>
