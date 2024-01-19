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
        class="mx-auto mt-10 elevation-9 my6-card"
        max-width="1100"
        outlined
      >
        <v-card-title><h2 style="Josefin Sans">Donors List</h2></v-card-title>
        <v-data-table
          :headers="headers"
          :items="list"
          :search="search"
          class="elevation-2"
          fixed-header
          height="350px"
        >
          <v-divider inset></v-divider>
          <template v-slot:top>
            <v-toolbar flat color="white">
              <div class="d-flex w-100">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  dense
                  outlined
                  single-line
                  hide-details
                ></v-text-field>
                <v-btn
                  style="background: #112d4e"
                  dark
                  class="ml-2"
                  @click="addNew"
                >
                  <v-icon>mdi-plus</v-icon>Add
                </v-btn>
              </div>
            </v-toolbar>
          </template>
          <template v-slot:[`item.name`]="{ item }">
            <v-text-field
              v-model="editedItem.name"
              :hide-details="true"
              dense
              single-line
              :autofocus="true"
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.name }}</span>
          </template>
          <template v-slot:[`item.addr`]="{ item }">
            <v-text-field
              v-model="editedItem.addr"
              :hide-details="true"
              dense
              single-line
              :autofocus="true"
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.addr }}</span>
          </template>
          <template v-slot:[`item.mob`]="{ item }">
            <v-text-field
              v-model="editedItem.mob"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.mob }}</span>
          </template>
          <template v-slot:[`item.email`]="{ item }">
            <v-text-field
              v-model="editedItem.email"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.email }}</span>
          </template>
          <template v-slot:[`item.gender`]="{ item }">
            <v-text-field
              v-model="editedItem.gender"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.gender }}</span>
          </template>
          <template v-slot:[`item.weight`]="{ item }">
            <v-text-field
              v-model="editedItem.weight"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.weight }}</span>
          </template>
          <template v-slot:[`item.d_bags`]="{ item }">
            <v-text-field
              v-model="editedItem.d_bags"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.d_bags }}</span>
          </template>
          <template v-slot:[`item.blood_group`]="{ item }">
            <v-text-field
              v-model="editedItem.blood_group"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.blood_group }}</span>
          </template>
          <template v-slot:[`item.dob`]="{ item }">
            <v-text-field
              v-model="editedItem.dob"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.dob }}</span>
          </template>
          <template v-slot:[`item.ldod`]="{ item }">
            <v-text-field
              v-model="editedItem.ldod"
              :hide-details="true"
              dense
              single-line
              v-if="item.id === editedItem.id"
            ></v-text-field>
            <span v-else>{{ item.ldod }}</span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <div v-if="item.id === editedItem.id">
              <v-icon color="red" class="mr-3" @click="close">
                mdi-window-close
              </v-icon>
              <v-icon color="green" @click="save"> mdi-content-save </v-icon>
            </div>
            <div v-else>
              <!-- <v-icon color="green" class="mr-3" @click="editItem(item)">
                mdi-pencil
              </v-icon> -->
              <v-icon color="red" @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </div>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-main>
  </v-app>
</template>
    
    
    <script>
import axios from "axios";
export default {
  mounted() {
    this.donorData();
  },
  data() {
    return {
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
        {
          url: "/BloodAbout",
          icon: "ri-contacts-line",
          title: "About",
          ico: "mdi mdi-information-outline",
        },
      ],
      search: "",
      headers: [
        {
          text: "Name",
          value: "name",
          sortable: false,
        },
        {
          text: "Address",
          value: "addr",
          sortable: false,
        },
        {
          text: "Mobile",
          value: "mob",
          sortable: false,
        },
        {
          text: "E-mail",
          value: "email",
          sortable: false,
        },
        {
          text: "Gender",
          value: "gender",
          sortable: false,
        },
        {
          text: "Weight",
          value: "weight",
          sortable: false,
        },
        {
          text: "Donated Blood Bags",
          value: "d_bags",
          sortable: false,
        },
        {
          text: "Blood Group",
          value: "blood_group",
          sortable: false,
        },

        {
          text: "DOB",
          value: "dob",
          sortable: false,
        },
        {
          text: "Last Date Of Donation",
          value: "ldod",
          sortable: false,
        },
        { text: "Actions", value: "actions", sortable: false, width: "100px" },
      ],
      list: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: "",
        addr: "",
        mob: 0,
        email: "",
        gender: "",
        weight: "",
        d_bags: 0,
        blood_group: "",
        dob: "",
        ldod: "",
      },
      defaultItem: {
        id: 0,
        name: "",
        addr: "",
        mob: 0,
        email: "",
        gender: "",
        weight: "kg",
        d_bags: 0,
        blood_group: "",
        dob: "",
        ldod: "",
      },
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.list = [];
    },

    async donorData() {
      await axios
        .get("https://redgfserver.onrender.com/get/donors")
        .then((result) => {
          let alldata = result.data;
          console.log(alldata);
          this.list = alldata;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    async deleteItem(item) {
      await axios
        .delete(`https://redgfserver.onrender.com/delete/donors/${item._id}`)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      const index = this.list.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.list.splice(index, 1);
    },

    close() {
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    addNew() {
      const addObj = Object.assign({}, this.defaultItem);
      addObj.id = this.list.length + 1;
      this.list.unshift(addObj);
      this.editItem(addObj);
    },
    async save() {
      await axios
        .post("https://redgfserver.onrender.com/add/new/donors", {
          name: this.editedItem.name,
          addr: this.editedItem.addr,
          mob: this.editedItem.mob,
          email: this.editedItem.email,
          gender: this.editedItem.gender,
          state: this.editedItem.state,
          weight: this.editedItem.weight,
          d_bags: this.editedItem.d_bags,
          blood_group: this.editedItem.blood_group,
          dob: this.editedItem.dob,
          ldod: this.editedItem.ldod,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        }),
        // location.reload();
        this.close();
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
  background: #372323;
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
  background: #dbe2ef;
  color: #ffffff;
}
.w-100 {
  width: 100%;
}
.my6-card {
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  opacity: 0.75;
}
</style>