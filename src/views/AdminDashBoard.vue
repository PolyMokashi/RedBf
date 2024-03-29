<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader"/>
    </template>
    <template v-else>
<NavBar/>
    <div>
      <BackGround/>
      <v-container fill-height>
        <v-layout align-center justify-center class="pt-16, margin-top-0">
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex" >
              <v-hover v-slot="{ hover }" open-delay="100">
                <v-card
                  style="text-align: center; font-size: 40px"
                  elevation-9
                  height="540"
                  class="cardmy"
                  :color="card.color"
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title
                    class="white--text"
                    style="font-size: 30px"
                    :inner-text.prop="card.title"
                  ></v-card-title>
                  <h1 style="color: rgb(0, 0, 0)">{{ card.value }}</h1>
                  <v-sheet class="pt-16 mt-16" :color="card.color">
                    <v-sparkline
                      :height="height"
                      :value="value"
                      :gradient="gradient"
                      :smooth="radius || false"
                      :padding="padding"
                      :line-width="width"
                      :stroke-linecap="lineCap"
                      :gradient-direction="gradientDirection"
                      :fill="fill"
                      :type="type"
                      :auto-line-width="autoLineWidth"
                      auto-draw
                    ></v-sparkline>
                  </v-sheet>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </div>
    </template>
  </v-app>
</template>
      
<script>
import axios from "axios";

import LoadingScreen from '@/components/LoadingScreen.vue';
import NavBar from '@/components/navbar/AdminNavBar.vue';
import BackGround from '@/components/BackGround/BackGround.vue'
export default {
  components: {
    LoadingScreen,
    NavBar,
    BackGround
  },
  data() {
    return {
      loader: true,
      count: 0,
      data: [],
      donorcount: 0,
      width: 5,
      height: 120,
      radius: 15,
      padding: 15,
      lineCap: "round",
      gradient: ["green", "red", "blue", "pink"],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 5, 9, 11],
      gradientDirection: "top",
      fill: false,
      type: "trend",
      autoLineWidth: false,
      interval: {},
      value2: 0,
      cards: [
        {
          title: "Blood Requests",
          value: "80",
          flex: 4,
          color: "red",
          color2: "#367E18",
          rotate: "275",
        },
        {
          title: "No. of Donated Blood Bags",
          value: "278",
          flex: 4,
          color: "#00008b",
          color2: "#A020F0",
          rotate: "190",
        },
        {
          title: "No. of Donors",
          value: "94",
          flex: 4,
          color: "#A020F0",
          color2: "#03001C",
          rotate: "170",
        },
      ],
    };
  },
  methods: {
    async bloodBankRequest() {
      await axios
        .get("https://redgfserver.onrender.com/get/blood/request")
        .then((result) => {
          let alldata = result.data;
          alldata.map((obj) => obj.d_bags);
          this.count = alldata.length;
          this.count = this.count.toString();
          this.cards[0].value = this.count;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(()=>{this.loader=false})
    },

    async donors() {
      await axios
        .get("https://redgfserver.onrender.com/get/donors")
        .then((result) => {
          this.loader = true;
          let alldata = result.data;
          this.donorcount = alldata.length;
          this.donorcount = this.donorcount.toString();
          this.cards[2].value = this.donorcount;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(()=>{this.loader=false})
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.bloodBankRequest();
    this.donors();
    this.interval = setInterval(() => {
      if (this.value2 === 100) {
        return (this.value2 = 0);
      }
      this.value2 += 10;
    }, 1000);
  },
};
</script>
      <style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}
#app {
  background-color: #ffffff;
  background: radial-gradient(
    ellipse at bottom,
    rgb(249, 247, 247),
    rgb(104, 104, 104)
  );
  overflow: hidden;
  z-index: 1;
}
.cardmy {
  transition: opacity 0.5s ease-in-out;
}

.cardmy:not(.on-hover) {
  opacity: 0.5;
}

</style>