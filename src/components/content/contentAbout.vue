<template>
  <div class="contentAbout card">
    <p class="title">About this project</p>
    <p class="description">
      The Matercarft Bamboo Mointer Riser is the study and stylish plateform
      that elavates your screen to more comfortable viewing height.Placing your
      mointer at eye level has the potentialto imrove your posture nad make you
      more comfortable while at work, helping you stay focused at task at hand.
    </p>
    <p class="description">
      Featuring artisan craftsmanship, the simplicity of design creates extra
      desk space below your computer to allows notepads, pens and USB stoicks to
      be stored under the stand.
    </p>
    <BambooCardVue
      v-for="(stand, index) in cardDetails"
      :key="index"
      :data="stand"
    ></BambooCardVue>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BambooCardVue from "./resuable/bambooCard.vue";

export default defineComponent({
  components: { BambooCardVue },
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
