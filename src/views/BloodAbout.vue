<template>
  <v-app>
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
            <span style="font-size: 1.4vw" :class="items.ico">
              {{ items.title }}
            </span>
            <span class="font-size:1.4vw black underline_right"></span>
          </a>
        </div>
        <a href="/LoginBlood"
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
        <!-- <div class="links">
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
        </div> -->
        <!-- <div class="action_btn">
                    <v-btn fab small><i class="ri-file-download-line"></i></v-btn>
                  </div> -->
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

      <v-container fill-height>
        <!-- <v-layout> -->
        <v-layout align-center justify-center class="pt-16">
          <v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="https://img.freepik.com/free-vector/hand-drawn-blood-infographic_23-2148759349.jpg" height="350"></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <h1>{{ aboutTitle }}</h1>
              <h3>{{ aboutContent }}</h3>
            </v-col>
          </v-row>
            <pre>



              
            </pre>
            <v-row>
            <v-col cols="12" sm="6">
              <h1>{{ aboutTitle2 }}</h1>
              <h3>{{ aboutContent2 }}</h3>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="https://img.freepik.com/free-vector/flat-patient-doctor-with-syringe-taking-blood-sample-tube-laboratory-woman-doing-medical-test-procedure-analysis-diagnosis-diseases-lab-research-checkup-health-concept_88138-942.jpg" height="350"></v-img>
            </v-col>
          </v-row>
            <pre>




            </pre>
            <v-row>
              <v-col cols="12" sm="6">
                <v-img src="https://img.freepik.com/premium-vector/digital-health-concept-doctor-looks-patient-s-electronic-chart-electronic-gadgets-health-care-concept_199064-1196.jpg" height="350"></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <h1>{{ aboutTitle3 }}</h1>
                <h3>{{ aboutContent3 }}</h3>
            </v-col>
          </v-row>
          <!-- <v-row> -->
            <v-row>
            <v-col>
          <v-footer
          fill-height
            dark
            padless
          >
          <v-card
          fill-height
          width="1200"
          flat
          tile
          class="white--text text-center"
          >
              <!-- <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text> -->
        <v-card-title style="justify-content: center;">
          <h3>Team Defaulter</h3>
        </v-card-title>
        <v-divider>

          <v-card-title style="justify-content: center;">
            redbcorp@outlook.com
          </v-card-title>
        </v-divider>
        <!-- <pre>

        </pre> -->
              <!-- <v-card-text style="justify-content: center;" class="white--text pt-0">
                  <h2>
                Team Head - Pradeep Mokashi 
                <pre>

                </pre>
                <p>
                Team Members- Atharva Parle,
                              Vivekananda Mane,
                              Kaustubh Jankar,
                              Akash Mandlik
                            </p>
                  </h2>
              </v-card-text> -->
        
              <v-divider></v-divider>
              
              <h3> <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>RedB</strong>
              </v-card-text>
            </h3>
            </v-card>
          </v-footer>
        </v-col>
        </v-row>
          </v-row>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
      
      
      <script>
  // const gradients = [
  //   ["#222"],
  //   ["#42b3f4"],
  //   ["red", "orange", "yellow"],
  //   ["purple", "violet"],
  //   ["#00c6ff", "#F0F", "#FF0"],
  //   ["#f72047", "#ffd200", "#1feaea"],
  // ];
  export default {
    data() {
      return {
        profileImage: '',
      aboutTitle: '',
      aboutContent: '',
        // gradient: gradients[5],
        
        
        // gradients: [
        //   ["#222"],
        //   ["#42b3f4"],
        //   ["red", "orange", "yellow"],
        //   ["purple", "violet"],
        //   ["#00c6ff", "#F0F", "#FF0"],
        //   ["#f72047", "#ffd200", "#1feaea"],
        // ],
        fill: false,
        type: "trend",
        autoLineWidth: false,
        interval: {},
        value2: 0,
        links: [
          {
            url: "/BloodBank",
            icon: "ri-home-smile-2-line",
            title: "Home",
            ico: "mdi mdi-home-outline",
          },
          {
            url: "/donors",
            icon: "ri-user-line",
            title: "Donors",
            ico: "mdi mdi-water-plus",
          },
          {
            url: "/details",
            icon: "ri-service-line",
            title: "Blood Details",
            ico: "mdi mdi-list-box",
          },
          {
            url: "/requests",
            icon: "ri-contacts-line",
            title: "Blood Requests",
            ico: "mdi mdi-bell-alert-outline",
          },
          // {
          //   url: "/acceptedrequests",
          //   icon: "ri-contacts-line",
          //   title: "Accepted Requests",
          //   ico:"mdi mdi-check-decagram-outline"
          // },
          {
            url: "/about",
            icon: "ri-contacts-line",
            title: "About",
            ico: "mdi mdi-information-outline",
          },
        ],
        cards: [
          { title: "Blood Requests", value: "120", flex: 4,color:"red",color2:"#367E18", rotate: "275"},
          { title: "Donated Blood", value: "150L", flex: 4, color:"#00008b",color2:"#A020F0", rotate: "190"},
          { title: "No. of Donors", value: "94", flex: 4,color:"#A020F0",color2:"#03001C", rotate: "170" },
        ],
        // req:[
        // {
        //     url: "/requests",
        //     icon: "ri-home-smile-2-line",
        //     title: "Accepted Requests",
        //     ico:"mdi mdi-check-decagram-outline"
        //   },
        // ]
      };
      
    },
    
    
      methods:{
        fetchAboutContent() {
      // Simulated asynchronous API call or store retrieval
      setTimeout(() => {
        this.aboutTitle = 'What is RedB & Why it is Important?';
        
        this.aboutTitle2 = 'What Problem Does RedB Solve?';
        
        this.aboutTitle3 = 'Impact of RedB on Society';

        this.aboutContent =
          'RedB: Intelligent Management system for Blood Banks& Hospitals, is a new generation technology that connects hospital administration with blood banks using artificial intelligence, machine learning, and computer networking. It helps to streamline blood bank operations, ensure accurate inventory management, and facilitate the process of blood product requests and transfusions. RedB is important because it plays a critical role in saving lives by improving the efficiency and accuracy of blood banks operations.';

        this.aboutContent2 =
          'RedB solves the problem of inefficient and inaccurate blood bank management by providing a streamlined system for managing blood inventory, donations, and transfusions. This system ensures that hospitals have access to the required blood products when needed, reduces wastage, and ensures proper storage and transportation of blood. With RedB, hospitals can ensure that they have the right blood products on hand, improving patient safety and outcomes.';

        this.aboutContent3 =
          'The impact of RedB on Indian society is significant as it helps to improve the efficiency and accuracy of blood bank operations, resulting in improved patient outcomes. RedB ensures that hospitals have access to the required blood products when needed, reduces wastage, and ensures proper storage and transportation of blood. By facilitating the process of blood product requests and transfusions, RedB plays a critical role in saving lives and improving the overall healthcare system in India.';
      }, 2000);
    },
      },
      mounted(){
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
.cardmy {
  transition: opacity 0.5s ease-in-out;
}

.cardmy:not(.on-hover) {
  opacity: 0.5;
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
  color: red;
  left: 0;
}
.link:hover .underline_right {
  width: 50%;
  color: red;
  right: 0;
}

.btn {
  position: relative;
  border: none;
  background: #112d4e;
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
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