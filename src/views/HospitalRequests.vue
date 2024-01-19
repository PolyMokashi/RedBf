<template>
  <v-app>
    <v-main>
      <nav class="my_nav d-none d-md-block">
        <v-container
          class="fill-height d-flex justify-space-between align-center"
        >
          <div class="logo">
            <a href="RedB" target="_blank_"
              ><img
                width="150"
                src="https://i.ibb.co/LdPZt21/Picture2.png"
                alt=""
            /></a>
          </div>
          <div class="links">
            <a
              class="link text-decoration-none black--text"
              v-for="(items, i) in links"
              :key="i"
              :href="items.url"
            >
              <span class="font-size:1.4vw black underline_left"></span>
              <span style="font-size:1.4vw" :class="items.ico">
                {{ items.title }}
              </span>
              <span class="font-size:1.4vw black underline_right"></span>
            </a>
          </div>
          <a href="/"
            ><button class="btn">
              <span class="mdi mdi-logout">Log Out</span>
            </button></a
          >
        </v-container>
      </nav>
      <nav
        class="my_nav d-md-none"
        style="position: absolute; bottom: 1px; width: 100%"
      >
        <v-container
          class="fill-height d-flex justify-space-between align-center"
        >
          <!-- <div class="logo"><a href="" target="_blank_"><img width="40" src="https://i.ibb.co/LdPZt21/Picture2.png" alt="" /></a></div> -->
          <div class="links">
            <a
              class="link text-decoration-none white--text"
              v-for="(items, i) in links"
              :key="i"
              :href="items.url"
            >
              <span class="black underline_left"></span>
              <i :class="items.icon"></i>
              <span class="black underline_right"></span>
            </a>
          </div>
          <div class="action_btn">
            <v-btn fab small><i class="ri-file-download-line"></i></v-btn>
          </div>
        </v-container>
      </nav>
      <div class="bg">
        <div class="lamp">
          <div class="lava">
            <div class="blob" v-for="i in 7" :key="i"></div>
            <div class="blob top"></div>
            <div class="blob bottom"></div>
          </div>
        </div>
      </div>
      <v-card
        class="mx-auto mt-10 elevation-9 my7-card"
        max-width="1100"
        outlined
      >
        <v-card-title
          ><h2 style="Josefin Sans">
            Requests for Blood
          </h2></v-card-title
        >
        <v-container fluid>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <v-form @submit.prevent="submit">
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="firstName"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-account"
                      label="First Name"
                      required
                      outlined
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="lastName"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-account"
                      label="Last Name"
                      required
                      outlined
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="bloodgrp"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-water-plus-outline"
                      label="Blood Group"
                      outlined
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="hospital"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-hospital-building"
                      label="Hospital Name"
                      outlined
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="quantity"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-blood-bag"
                      label="Required Quantity of Bags"
                      outlined
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="number"
                    rules="required"
                  >
                    <v-text-field
                      v-model="priority"
                      maxlength="2"
                      :error-messages="errors"
                      prepend-inner-icon="mdi mdi-priority-high"
                      label="Priority 1-10"
                      outlined
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <!-- <v-col class="d-flex ml-auto"> -->
                  
              </v-row>
              <v-row>
              <v-col cols="6" sm="2" md="2">
                  <v-btn
                    type="submit"
                    :disabled="invalid"
                    style="background: #112D4E;"
                    x-large
                    dark
                    :loading="loading"
                    @click="request"
                    >Send Request</v-btn
                  >
                <!-- </v-col> -->

              </v-col>
                <v-col pl="3" ms="2">
                  <v-btn x-large text @click="clear"> clear </v-btn>
                </v-col>
          
            </v-row>
            </v-form>
          </validation-observer>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>
  
     
        
        <script>
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

import axios from "axios";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      firstName: "",
      loading:false,
      lastName: "",
      bloodgrp: "",
      hospital: "",
      quantity: "",
      priority: "",
      snackbar: false,
      snackbar2: false,
      snackbar3: false,
      valid: false,
      arr: [],
      links: [
        {
          url: "/Hospital",
          icon: "ri-home-smile-2-line",
          title: "Home",
          ico: "mdi mdi-home-outline",
        },
        //   {
        //     url: "/donors",
        //     icon: "ri-user-line",
        //     title: "Donors",
        //     ico: "mdi mdi-water-plus",
        //   },
        {
          url: "/status",
          icon: "ri-service-line",
          title: "View Status",
          ico: "mdi mdi-bell-plus-outline",
        },
        {
          url: "/hospitalrequests",
          icon: "ri-contacts-line",
          title: "Create Requests",
          ico: "mdi mdi-bell-check-outline",
        },
        {
          url: "/BloodAbout",
          icon: "ri-contacts-line",
          title: "About",
          ico: "mdi mdi-information-outline",
        },
      ],
    };
  },
  methods: {
    async request() {
      this.loading=true
      await new Promise(resolve => setTimeout(resolve, 3000))
      this.loading = false
      let ans = {
        name: `${this.firstName} ${this.lastName}`,
        bloodgrp: this.bloodgrp,
        hospital: this.hospital,
        quantity: this.quantity,
        priority: this.priority,
      };

      await axios
        .post("https://redgfserver.onrender.com/post/new/request", {
          name: this.firstName + " " + this.lastName,
          bloodgrp: this.bloodgrp,
          hospital: this.hospital,
          quantity: this.quantity,
          priority: this.priority,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        }),
        this.arr.push(ans);
        location.reload();
      console.log(this.arr);
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.bloodgrp = "";
      this.hospital = "";
      this.quantity = "";
      this.firstName = "";
      this.lastName = "";
      this.priority="";
      this.$refs.observer.reset();
    },
  },
};
</script>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
}
#app {
  /*background: url(https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib)
            center/cover no-repeat;*/
  background-color: #f9f7f7;
  background: radial-gradient(ellipse at bottom, #dbe2ef, #393e46);
  overflow: hidden;
  z-index: 1;
}
.my_nav {
  backdrop-filter: blur(10px);
}
.link {
  padding: 10px 20px;
  position: relative;
}
.link .underline_left,
.link .underline_right {
  display: block;
  position: absolute;
  height: 4px;
  width: 0px;
  bottom: -4px;
  transition: 0.25s;
}
.link .underline_left {
  left: 50%;
  border-radius: 2px 0 0 2px;
}
.link .underline_right {
  right: 50%;
  border-radius: 0 2px 2px 0;
}
.link:hover .underline_left {
  width: 50%;
  left: 0;
}
.link:hover .underline_right {
  width: 50%;
  right: 0;
}

.btn {
  position: relative;
  border: none;
  background: #112d4e;
  backdrop-filter: blur(10px);
  color: #f9f7f7;
  padding: 10px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  overflow: hidden;
  border: 2px solid #fff5;
  border-radius: 1px;
  transition: 0.25s;
}
.btn:hover {
  box-shadow: 5px 5px 5px #0005;
  transform: scale(1.025);
}
.btn:active {
  box-shadow: 0 0 0 #fffdfd;
  transform: scale(1.5);
}
.btn::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 50%
  );
  top: 0;
  left: -80%;
  transform: skew(-45deg);
  transition: 1s;
}
.btn:hover::before {
  left: 120%;
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
  background: #232f37;
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
.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: #DBE2EF;
  color: #ffffff;
}
.w-100 {
  width: 100%;
}
.my7-card {
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  opacity: 0.75;
}
</style>