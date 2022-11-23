<template>
  <div class="bambooCard" v-if="bambooStand.left != null">
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
      <button class="button" @click="showModal = true">
        {{ bambooStand.btntext }}
      </button>
    </div>
    <div class="disabled" v-if="bambooStand.left == 0"></div>
  </div>
  <vue-modal :show="showModal">
    <PledgeCardContainer @closeModal="showModal = false" />
  </vue-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PledgeCardContainer from "@/components/content/pledgeCardContainer.vue";

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
  components: {
    PledgeCardContainer,
  },
  setup(props) {
    let bambooStand = ref(props.data);
    const showModal = ref(false);

    return { bambooStand, showModal };
  },
});
</script>
