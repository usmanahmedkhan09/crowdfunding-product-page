import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () =>
{
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment()
  {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useBambooStore = defineStore('bamboo', () =>
{

  const statics = ref({
    totalamount: 89914,
    backers: 5007,
    days: 56,
  })


  const bambooStands = ref([
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

  const toggleStatus = (title: any) =>
  {
    bambooStands.value = bambooStands.value.filter((x: any) =>
    {
      if (x.title == title)
      {
        x.isActive = true;
      } else
      {
        x.isActive = false;
      }
      return x;
    });
  };

  const handlePledgeAddition = (data: any, amount: number) =>
  {
    bambooStands.value.filter((item: any) =>
    {
      if (item.title == data.title)
      {
        item.left--
      }
      return item
    })
    statics.value.totalamount += amount
    statics.value.backers++
  }

  return { bambooStands, statics, toggleStatus, handlePledgeAddition }

})