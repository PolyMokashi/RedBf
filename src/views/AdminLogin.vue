<template  >
  <v-app>
    <v-container class="fill-height d-flex justify-space-between align-center">
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
        <v-card
          class="elevation-9"
          color="grey lighten-0"
          width="700"
          height="620"
        >
          <v-toolbar dark color="black">
            <v-toolbar-title> RedB Admin Login </v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col>
              <v-row>
                <v-col>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-card-title
                          ><div class="logo">
                            <a href="RedB" target="_blank_"
                              ><img
                                width="120"
                                src="https://i.ibb.co/LdPZt21/Picture2.png"
                                alt=""
                            /></a>
                          </div>
                          <h1 style="margin-left: 2cm">
                            <span style="color: red">R</span>ed<span
                              style="color: red"
                              >B</span
                            >
                          </h1></v-card-title
                        >
                      </v-col>
                    </v-row>
                    <LoginContentAdmin />
                  </v-card-text>

                  <v-divider dense></v-divider>
                  <v-col justify="center">
                    <v-card class="d-inline-flex pl-pa-2 ml-9" outlined tile>
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
<h3>Username- admin</h3>
<h3>Password- admin</h3>
                  </v-col>
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
import LoginContentAdmin from "@/components/LoginContentAdmin.vue";
export default {
  components: {
    LoginContentAdmin,
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