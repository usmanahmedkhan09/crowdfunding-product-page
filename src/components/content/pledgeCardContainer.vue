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
      v-for="(data, index) in cardDetails"
      :data="data"
      :key="index"
      @toggleStatus="(val) => toggleStatus(val)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import IconCloseVue from "../icons/IconClose.vue";
import PledgeCardVue from "./resuable/pledgeCard.vue";

export default defineComponent({
  components: { IconCloseVue, PledgeCardVue },
  setup() {
    const cardDetails = ref([
      {
        title: "Pledge width no reward",
        priceTitle: "",
        price: null,
        left: null,
        btntext: null,
        isActive: false,
        description:
          "You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      },
      {
        title: "Bamboo Stand",
        priceTitle: "Pledge $25 or more",
        price: 25,
        left: 101,
        btntext: "Select Reward",
        isActive: false,
        description:
          "You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and you'll be added to a special Backer member list",
      },
      {
        title: "Black Edition Stand",
        priceTitle: "Pledge $75 or more",
        price: 75,
        left: 64,
        btntext: "Select Reward",
        isActive: false,
        description:
          "You get a Black Special Edition computer stand and a personal thank you.You'll be added to our Backer member list.Shipping is included",
      },
      {
        title: "Mahogany Special Edition",
        priceTitle: "Pledge $200 or more",
        price: 75,
        left: 0,
        btntext: "Out of stock",
        isActive: false,
        description:
          "You get a two Specail Edition Mahogany stands, a Backer T-shirt, and personal thank you.You'll be added to our Backer member list.Shipping is included",
      },
    ]);

    const toggleStatus = (title: any) => {
      cardDetails.value = cardDetails.value.filter((x: any) => {
        if (x.title == title) {
          x.isActive = true;
        } else {
          x.isActive = false;
        }
        return x;
      });
    };

    return {
      cardDetails,
      toggleStatus,
    };
  },
});
</script>
