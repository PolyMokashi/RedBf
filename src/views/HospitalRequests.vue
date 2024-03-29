<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader" />
    </template>
    <template>
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
      </div>
      <v-card
        class="mx-auto mt-10 elevation-9 my7-card"
        max-width="1100"
        outlined
      >
        <v-card-title
          ><h2>
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
              </v-row>
              <v-row>
              <v-col cols="6" sm="2" md="2">
                  <v-btn
                    type="submit"
                    :disabled="invalid"
                    style="background: #112D4E;"
                    x-large
                    dark
                    @click="request"
                    >Send Request</v-btn
                  >

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
  </template>
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
import HospitalNavBar from '@/components/navbar/HospitalNavBar.vue';
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: {
    HospitalNavBar,
    LoadingScreen,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loader:false,
      firstName: "",
      // loading:false,
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
      
    };
  },
  methods: {
    async request() {
      // this.loading=true
      // await new Promise(resolve => setTimeout(resolve, 3000))
      // this.loading = false
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
        })
        .finally(() => {
          this.loader = true;
        });
        this.arr.push(ans);
        location.reload();
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