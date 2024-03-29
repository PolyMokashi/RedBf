<template>
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
              Hospital Login
            </v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-card-text>
                    <v-row>
                      <v-col> 
                        <v-card-title ><h1><span style="color:red">R</span>ed<span style="color:red">B</span></h1></v-card-title>

                      </v-col>
                    </v-row>
                    <LoginContent />
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
                  <div>
                    <v-card
                      class="d-inline-flex pl-pa-2 ml-9"
                      color="grey"
                      outlined
                      tile
                    >
                      <router-link to="/">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue"> mdi-hospital-building </v-icon>
                        </v-btn>
                      </router-link>
                    </v-card>
                    <v-card class="d-inline-flex pl-pa-2 ml-9" outlined tile>
                      <router-link to="/LoginBlood">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red"> mdi-water-plus </v-icon>
                        </v-btn>
                      </router-link>
                    </v-card>
                  </div>
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
import LoginContent from "@/components/LoginContent.vue";
export default {
  name: "LoginHospital",
  components: {
    LoginContent,
  },
  data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/WvHv6Wp/7362.jpg",
        },
        {
          src: "https://i.ibb.co/kQqz7S0/7534.jpg",
        },
        {
          src: "https://i.ibb.co/QksR4s6/24089.jpg",
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

.background {
  background-image: url("https://media.istockphoto.com/id/1199363232/photo/abstract-red-and-black-are-light-pattern-with-the-gradient-is-the-with-floor-wall-metal.jpg?b=1&s=170667a&w=0&k=20&c=_GRc_SXY1XtsWsfs_67JyF6S5juhYlg-Lxt8IG5yl7E=");
  background-size: cover;
}

.my-card {
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  opacity: 0.8;
}
</style>