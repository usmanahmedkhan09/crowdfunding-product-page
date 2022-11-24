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
        <span>left</span>
      </h1>
      <button class="button" @click="showModal = true">
        {{ bambooStand.btntext }}
      </button>
    </div>
    <div class="disabled" v-if="bambooStand.left == 0"></div>
  </div>
  <vue-modal :show="showModal">
    <PledgeCardContainer @closeModal="(val) => closeModal(val)" />
  </vue-modal>
  <vue-modal :show="openSuccessModal">
    <successPopupVue @closeModal="openSuccessModal = false" />
  </vue-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PledgeCardContainer from "@/components/content/pledgeCardContainer.vue";
import successPopupVue from "@/components/resuable/success-popup.vue";
export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
    pledge: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PledgeCardContainer,
    successPopupVue,
  },
  setup(props) {
    let bambooStand = ref(props.data);
    const showModal = ref(false);
    const openSuccessModal = ref(false);

    const closeModal = (val: Boolean) => {
      if (val) {
        showModal.value = false;
        setTimeout(() => {
          openSuccessModal.value = true;
        }, 500);
      } else {
        showModal.value = false;
      }
    };

    return { bambooStand, showModal, openSuccessModal, closeModal };
  },
});
</script>
