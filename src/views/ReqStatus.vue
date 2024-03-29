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
        <v-container fluid>
          <v-card
            class="mx-auto mt-10 elevation-9 my2-card"
            max-width="1100"
            outlined
          >
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      <h1>Name</h1>
                    </th>
                    <th class="text-left">
                      <h1>Status</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>
                      <h3>{{ item.name }}</h3>
                    </td>
                    <td>
                      <h3>{{ item.stat }}</h3>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-container>
      </v-main>
    </template>
  </v-app>
</template>
    
    
<script>
import axios from "axios";
import HospitalNavBar from "@/components/navbar/HospitalNavBar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: {
    HospitalNavBar,
    LoadingScreen,
  },
  mounted() {
    this.getstatus();
  },
  data() {
    return {
      desserts: [],
      loader:true,
    };
  },
  methods: {
    async getstatus() {
      await axios
        .get("https://redgfserver.onrender.com/get/status")
        .then((result) => {
          let alldata = result.data;
          this.desserts = alldata;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },
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