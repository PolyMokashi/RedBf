<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader" />
    </template>
    <template>
      <BloodNavBar />
      <div class="bg">
        <div class="lamp">
          <div class="lava">
            <div class="blob" v-for="i in 7" :key="i"></div>
            <div class="blob top"></div>
            <div class="blob bottom"></div>
          </div>
        </div>

        <v-container fill-height>
          <v-layout align-center justify-center class="pt-16,margin-top-0">
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
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
                    <h1 style="color: White">{{ card.value }}</h1>
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
import LoadingScreen from "@/components/LoadingScreen.vue";
import BloodNavBar from "@/components/navbar/BloodNavBar.vue";
export default {
  components: {
    LoadingScreen,
    BloodNavBar,
  },
  data() {
    return {
      loader: true,
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
          value: "120",
          flex: 4,
          color: "red",
          color2: "#367E18",
          rotate: "275",
        },
        {
          title: "no. of donated Blood bags",
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
        .finally(() => {
          this.loader = false;
        });
    },

    async donors() {
      await axios
        .get("https://redgfserver.onrender.com/get/donors")
        .then((result) => {
          let alldata = result.data;
          this.donorcount = alldata.length;
          this.donorcount = this.donorcount.toString();
          this.cards[2].value = this.donorcount;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
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

/* ----------- lamp css ------------- */

.lamp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  z-index: -1;
  /*filter: blur(100px);*/
}

.lava {
  filter: url("#goo");
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.blob {
  border-radius: 50%;
  background: #ffffff;
  /* Other sample colors:
      Orange: #e8630a
      Pink: #EA3281
      Fuscia: #E71669
      Purple: #661BAC
      Yellow: #FDC600
      Kermit green: #75AC25
      Light blue: #3283B5
      Dark blue: #0A5D9A
      Gunmetal: #232F37
      BGLight: #1B2735
      BGDark: #090a0f
      Want more colors? check out https://coolors.co/ for inspiration.
      */
  position: absolute;
}
.blob.top {
  border-radius: 50%;
  width: 100%;
  height: 3%;
  top: -3%;
  left: 0;
}
.blob.bottom {
  border-radius: 50%;
  width: 100%;
  height: 4%;
  bottom: -3%;
  left: 0;
}
.blob:nth-child(1) {
  width: 200px;
  height: 200px;
  left: 35%;
  bottom: -15%;

  animation: wobble 4s ease-in-out alternate infinite,
    blob-one ease-in-out 13s infinite;
}
.blob:nth-child(2) {
  width: 330px;
  height: 330px;
  right: 24%;
  bottom: -65%;

  animation: wobble 5s ease-in-out alternate infinite,
    blob-two ease-in-out 22s infinite;
}
.blob:nth-child(3) {
  width: 150px;
  height: 150px;
  bottom: -15%;
  left: 34%;

  animation: wobble 6s ease-in-out alternate infinite,
    blob-three ease-in-out 16s infinite;
}
.blob:nth-child(4) {
  width: 235px;
  height: 235px;
  bottom: -19%;
  left: 30%;

  animation: wobble 7s ease-in-out alternate infinite,
    blob-four ease-in-out 12s infinite;
}
.blob:nth-child(5) {
  width: 55px;
  height: 55px;
  bottom: -25%;
  left: 34%;

  animation: wobble 9s ease-in-out alternate infinite,
    blob-five ease-in-out 32s infinite;
}
.blob:nth-child(6) {
  width: 35px;
  height: 35px;
  bottom: -25%;
  right: 34%;

  animation: wobble 10s ease-in-out alternate infinite,
    blob-six ease-in-out 12s infinite;
}
.blob:nth-child(7) {
  width: 435px;
  height: 435px;
  bottom: -85%;
  right: 40%;

  animation: wobble 11s ease-in-out alternate infinite,
    blob-seven ease-in-out 32s infinite;
}
@keyframes blob-one {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-700%);
  }
}

@keyframes blob-two {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-420%);
  }
}

@keyframes blob-three {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-305%);
  }
}
@keyframes blob-four {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-605%);
  }
}
@keyframes blob-five {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-700%);
  }
}
@keyframes blob-six {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-700%);
  }
}
@keyframes blob-seven {
  0%,
  100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-300%);
  }
}

@keyframes wobble {
  50% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  100% {
    border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
  }
}

/*------ cradit -------------- */
.cradit {
  position: fixed;
  font-size: 12px;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}
/* .my-card {
  background-color: transparent;
  opacity: 0.8;
} */
</style>