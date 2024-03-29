<template>
  <v-app>
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
        <v-layout align-center justify-center class="pt-16">
          <v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://img.freepik.com/free-vector/hand-drawn-blood-infographic_23-2148759349.jpg"
                  height="350"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h1>{{ aboutTitle }}</h1>
                <h3>{{ aboutContent }}</h3>
              </v-col>
            </v-row>
            <pre></pre>
            <v-row>
              <v-col cols="12" sm="6">
                <h1>{{ aboutTitle2 }}</h1>
                <h3>{{ aboutContent2 }}</h3>
              </v-col>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://img.freepik.com/free-vector/flat-patient-doctor-with-syringe-taking-blood-sample-tube-laboratory-woman-doing-medical-test-procedure-analysis-diagnosis-diseases-lab-research-checkup-health-concept_88138-942.jpg"
                  height="350"
                ></v-img>
              </v-col>
            </v-row>
            <pre></pre>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img
                  src="https://img.freepik.com/premium-vector/digital-health-concept-doctor-looks-patient-s-electronic-chart-electronic-gadgets-health-care-concept_199064-1196.jpg"
                  height="350"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h1>{{ aboutTitle3 }}</h1>
                <h3>{{ aboutContent3 }}</h3>
              </v-col>
            </v-row>
            </v-row>
        </v-layout>
        
      </v-container>
      
    </div>
  </v-app>
  
</template>
      
<script>
import BloodNavBar from "@/components/navbar/BloodNavBar.vue";
export default {
  components: {
    BloodNavBar,
  },
  data() {
    return {
      aboutTitle: "",
      aboutContent: "",
    };
  },

  methods: {
    fetchAboutContent() {
      setTimeout(() => {
        this.aboutTitle = "What is RedB & Why it is Important?";

        this.aboutTitle2 = "What Problem Does RedB Solve?";

        this.aboutTitle3 = "Impact of RedB on Society";

        this.aboutContent =
          "RedB: Intelligent Management system for Blood Banks& Hospitals, is a new generation technology that connects hospital administration with blood banks using artificial intelligence, machine learning, and computer networking. It helps to streamline blood bank operations, ensure accurate inventory management, and facilitate the process of blood product requests and transfusions. RedB is important because it plays a critical role in saving lives by improving the efficiency and accuracy of blood banks operations.";

        this.aboutContent2 =
          "RedB solves the problem of inefficient and inaccurate blood bank management by providing a streamlined system for managing blood inventory, donations, and transfusions. This system ensures that hospitals have access to the required blood products when needed, reduces wastage, and ensures proper storage and transportation of blood. With RedB, hospitals can ensure that they have the right blood products on hand, improving patient safety and outcomes.";

        this.aboutContent3 =
          "The impact of RedB on Indian society is significant as it helps to improve the efficiency and accuracy of blood bank operations, resulting in improved patient outcomes. RedB ensures that hospitals have access to the required blood products when needed, reduces wastage, and ensures proper storage and transportation of blood. By facilitating the process of blood product requests and transfusions, RedB plays a critical role in saving lives and improving the overall healthcare system in India.";
      }, 500);
    },
  },
  mounted() {
    this.fetchAboutContent();
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
  /*background: url(https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib)
          center/cover no-repeat;*/
  background-color: #ffffff;
  background: radial-gradient(
    ellipse at bottom,
    rgb(249, 247, 247),
    rgb(104, 104, 104)
  );
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
/* .my-card {
    background-color: transparent;
    opacity: 0.8;
  } */
</style>