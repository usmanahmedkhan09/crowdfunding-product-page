<template>
  <div class="pledge_container card">
    <div class="pledge_container--header">
      <IconCloseVue />
      <div class="title_wrapper">
        <h1>Back this project</h1>
        <p>
          Want to support us in bringing MasterCraft Bamboo Mointer Riser out in
          the world
        </p>
      </div>
    </div>
    <div class="pledgeCard">
      <div class="pledgeCard--content">
        <div class="radio_wrapper">
          <input type="radio" class="radioBtn" />
        </div>
        <div class="description_wrapper">
          <div class="description_header">
            <div class="wrapper">
              <p class="p_title">Pledge with no reward</p>
              <p class="p_price">Pledge $25 or more</p>
            </div>
            <h1>
              100
              <sup>left</sup>
            </h1>
          </div>
          <div class="description_body">
            <p>
              You get an ergonomic stand made of natural bamboo.You've helped us
              launch our promotional campaign, and you'll be added to a special
              Backer member list
            </p>
          </div>
        </div>
        <!-- <div class="pledgeCard--content--header">
          
        </div> -->
        <!-- <div class="pledgeCard--content--body">
         
        </div> -->
      </div>
      <!-- <div class="pledgeCard--content">
        <p>
          You get an ergonomic stand made of natural bamboo.You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list
        </p>
      </div> -->
    </div>
    <!-- <bambooCardVue
      v-for="(stand, index) in cardDetails"
      :key="index"
      :data="stand"
      :pledge="true"
    /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import bambooCardVue from "./resuable/bambooCard.vue";
import IconCloseVue from "../icons/IconClose.vue";

export default defineComponent({
  components: { bambooCardVue, IconCloseVue },
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
