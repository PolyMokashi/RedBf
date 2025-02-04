<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader" />
    </template>
    <template v-else >
      <HospitalNavBar />
      <v-main>
      <div class="bg">
        <div class="lamp">
          <div class="lava">
            <div class="blob" v-for="i in 7" :key="i"></div>
            <div class="blob top"></div>
            <div class="blob bottom"></div>
          </div>
        </div>

        <v-container fill-height>
          <v-layout align-center justify-center class="pt-16, margin-top-0">
            <v-col
              justify="center"
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
            >
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
          </v-layout>
        </v-container>
      </div>
      </v-main>
    </template>
  </v-app>
</template>
    
    
<script>
import axios from "axios";
import HospitalNavBar from '@/components/navbar/HospitalNavBar.vue';
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: {
    HospitalNavBar,
    LoadingScreen,
  },
  data() {
    return {
      loader:true,
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
      cards: [
        {
          title: "Blood Requests Raised",
          value: "80",
          flex: 4,
          color: "red",
          color2: "#367E18",
          rotate: "275",
        }
      ],
    };
  },
  methods: {
    async req_raised() {
      await axios
        .get("https://redgfserver.onrender.com/get/blood/request")
        .then((result) => {
          let alldata = result.data;
          this.count = alldata.length;
          this.count = this.count.toString();
          this.cards[0].value = this.count;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },
  },
  mounted() {
    this.req_raised();
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
  background-color: #f9f7f7;
  background: radial-gradient(ellipse at bottom, #dbe2ef, #393e46);
  overflow: hidden;
  z-index: 1;
}

/*------ cradit -------------- */
.cradit {
  position: fixed;
  font-size: 12px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}
</style>
