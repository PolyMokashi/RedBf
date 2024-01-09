<template >
    <v-app>
      <v-container fluid class="background">
        <v-layout align-center justify-center>
          <v-card class="elevation-9 my-card">
                    <v-card-text>
                      <v-row>
                        <v-col class="mr-0">
                          <v-avatar size="150">
                            <img
                              src="https://serving.photos.photobox.com/1870685894c82169fed05cb2ad30e5d6e73409328d05f1c126a27c37f8c5d6d244a4d83f.jpg"
                              alt="RedB"
                            />
                          </v-avatar>
                        </v-col>
                        <v-card-title
                        >Intelligent Blood Management System for Hospitals and
                        Blood Banks</v-card-title>
                        <v-col class="ml-0">
                        </v-col>
                      </v-row>
                      <RegisterContent2 />
                    </v-card-text>
                    <div>
                    <h3 class="ml-5">Already Register?</h3></div>
                    <v-divider dense></v-divider>
                    <div>
                        <h3 class="ml-3">Choose:</h3>
                    <v-card class="d-inline-flex pl-pa-2 ml-9" color="grey" outlined tile>
                      <router-link to="/">
                      <v-btn depressed outlined color="grey">
                        <v-icon color="blue">
                          mdi-hospital-building
                        </v-icon>
                      </v-btn>
                    </router-link>
                    </v-card>
                    <v-card class="d-inline-flex pl-pa-2 ml-9" outlined tile>
                      <router-link to="/LoginBlood">
                      <v-btn depressed outlined color="grey">
                        <v-icon color="red" >
                          mdi-water-plus
                        </v-icon>
                      </v-btn>
                    </router-link>
                    </v-card>
                  </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import RegisterContent2 from "@/components/RegisterContent2.vue";
  export default {
    name: "RegisterBlood",
    components: {
      RegisterContent2
  },
    data() {
      return {
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      };
    },
  };
  </script>
  
  <style>
  
  .background {
    background-image: url("https://media.istockphoto.com/id/1199363232/photo/abstract-red-and-black-are-light-pattern-with-the-gradient-is-the-with-floor-wall-metal.jpg?b=1&s=170667a&w=0&k=20&c=_GRc_SXY1XtsWsfs_67JyF6S5juhYlg-Lxt8IG5yl7E=");
    background-size: cover;
  }
  
  .my-card {
    width: 100%;
    max-width: 1000px;
    /* background-color: transparent; */
    /* opacity: 0.9; */
  }
  </style>