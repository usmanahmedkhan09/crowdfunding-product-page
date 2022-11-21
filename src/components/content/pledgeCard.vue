<template>
  <div class="pledgeCard card">
    <bambooCardVue
      v-for="(stand, index) in cardDetails"
      :key="index"
      :data="stand"
      :pledge="true"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import bambooCardVue from "./resuable/bambooCard.vue";

export default defineComponent({
  components: { bambooCardVue },
  setup() {
    const cardDetails = ref([
      {
        title: "Bamboo Stand",
        priceTitle: "Pledge $25 or more",
        price: 25,
        left: 101,
        btntext: "Select Reward",
        description:
          "You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      },
      {
        title: "Black Edition Stand",
        priceTitle: "Pledge $75 or more",
        price: 75,
        left: 64,
        btntext: "Select Reward",
        description:
          "You get a Black Special Edition computer stand and a personal thank you.You'll be added to our Backer member list.Shipping is included",
      },
      {
        title: "Mahogany Special Edition",
        priceTitle: "Pledge $200 or more",
        price: 75,
        left: 0,
        btntext: "Out of stock",
        description:
          "You get a two Specail Edition Mahogany stands, a Backer T-shirt, and personal thank you.You'll be added to our Backer member list.Shipping is included",
      },
    ]);
    return {
      cardDetails,
    };
  },
});
</script>
