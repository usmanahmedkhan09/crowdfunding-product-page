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
            <span>left</span>
          </h1>
        </div>
        <div class="description_body">
          <p>
            {{ data.description }}
          </p>
          <h1 v-if="data.left != null">
            {{ data.left }}
            <span>left</span>
          </h1>
        </div>
      </div>
    </div>
    <div v-if="data.isActive && data.price" class="pledgeCard--footer">
      <p>Enter your pledge</p>
      <div class="amount_wrapper">
        <div class="input_wrapper">
          <span>$</span>
          <input v-model="amount" type="number" />
        </div>
        <button :disabled="amount == 0" class="button" @click="addamount(data)">
          Continue
        </button>
      </div>
    </div>
    <div class="disabled" v-if="data.left == 0"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useBambooStore } from "@/stores/counter";
export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    let amount = ref(0);
    const { handlePledgeAddition } = useBambooStore();

    const addamount = (data: any) => {
      handlePledgeAddition(data, amount.value);
      context.emit("closeModal");
    };

    return { handlePledgeAddition, amount, addamount };
  },
});
</script>
