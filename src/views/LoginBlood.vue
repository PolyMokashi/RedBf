<template  >
  <v-app>
    <v-container class="fill-height d-flex justify-space-between align-center" >
      <div class="bg">
              <div class="lamp">
                <div class="lava">
                  <div class="blob" v-for="i in 7" :key="i"></div>
                  <div class="blob top"></div>
                  <div class="blob bottom"></div>
                </div>
              </div>
              </div>
      <v-layout align-center justify-center>
        <v-card class="elevation-9 my-card" color="grey lighten-0">
          <v-toolbar dark color="black">
            <v-toolbar-title>
              Blood Bank Login
            </v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-card-text>
                    <v-row>
                      <!-- <v-col class="pr-mr-0"> -->
                        <!-- <v-avatar size="130">
                          <img
                            src="https://i.ibb.co/LdPZt21/Picture2.png"
                            alt="RedB"
                          />
                        </v-avatar> -->
                      <!-- </v-col> -->
                      
                      <v-col >
                        <v-card-title><h1><span style="color:red">R</span>ed<span style="color:red">B</span></h1></v-card-title>
                        <!-- <v-card-title
                          >Intelligent Blood Management System for Hospitals and
                          Blood Banks</v-card-title
                        > -->
                      </v-col>
                    </v-row>
                    <LoginContent2 />
                  </v-card-text>
                  <div>
                    <h3 class="ml-5">
                      Administrator?
                      <router-link color="red" to="/AdminLogin"
                        >click here</router-link
                      >
                    </h3>
                  </div>
                  <v-divider dense></v-divider>
                  <v-card class="d-inline-flex pl-pa-2 ml-9" outlined tile>
                    <router-link to="/">
                      <v-btn depressed outlined color="grey">
                        <v-icon color="blue"> mdi-hospital-building </v-icon>
                      </v-btn>
                    </router-link>
                  </v-card>
                  <v-card
                    class="d-inline-flex pl-pa-2 ml-9"
                    color="grey"
                    outlined
                    tile
                  >
                    <router-link to="/LoginBlood">
                      <v-btn depressed outlined color="grey">
                        <v-icon color="red"> mdi-water-plus </v-icon>
                      </v-btn>
                    </router-link>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-carousel
                    :show-arrows="false"
                    class="curve"
                    cycle
                    height="500"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(item, i) in items"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import LoginContent2 from "@/components/LoginContent2.vue";
export default {
  name: "LoginBlood",
  components: {
    LoginContent2,
  },
  data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/RpWs73K/49081.jpg",
        },
        {
          src: "https://i.ibb.co/rHH32Sx/27109.jpg",
        },
        {
          src: "https://i.ibb.co/0nzprRk/624170.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.curve {
  border-bottom-left-radius: 400px !important;
}
.curved {
  border-bottom-right-radius: 400px !important;
}



.my-card {
  width: 100%;
  max-width: 1200px;
  /* background-color: transparent; */
  /* opacity: 0.9; */
}
</style>