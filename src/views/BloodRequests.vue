<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader" />
    </template>
    <template>
      <BloodNavBar />
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
        class="mx-auto mt-10 elevation-9 my2-card"
        max-width="1100"
        outlined
      >
        <v-card-title
          ><h2 style="font-family: Josefin Sans">
            Blood Requests
          </h2></v-card-title
        >
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
              </div>
            </v-toolbar>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <span>
              <v-icon
                color="green"
                class="mr-3"
                @click="(snackbar = true), moveToAccepted(item)"
                v-if="!item.accepted"
              >
                mdi-check-underline-circle-outline
              </v-icon>
              <v-snackbar v-model="snackbar" color="success">
                <h3 style="color: black">Request Accepted</h3>
                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snackbar = false">
                    <strong style="color: black">Close</strong>
                  </v-btn>
                </template>
              </v-snackbar>
              <v-icon
                color="red"
                @click="(snackbar2 = true), moveToRejected(item)"
                v-if="!item.rejected"
              >
                mdi-close-circle-outline
              </v-icon>
              <v-icon v-else @click="(snackbar3 = true), Deleteitem(item)">
                mdi-close-box-outline
              </v-icon>
              <v-snackbar v-model="snackbar2" color="red">
                <h3 style="color: black">Request Rejected</h3>
                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snackbar2 = false">
                    <strong>Close</strong>
                  </v-btn>
                </template>
              </v-snackbar>
              <v-snackbar v-model="snackbar3" dark>
                <h3>Request Deleted</h3>
                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snackbar3 = false">
                    <strong>Close</strong>
                  </v-btn>
                </template>
              </v-snackbar>
            </span>
          </template>
        </v-data-table>
      </v-card>
    </v-main>
    </template>
  </v-app>
</template>

   
      
<script>
import axios from "axios";
import LoadingScreen from "@/components/LoadingScreen.vue";
import BloodNavBar from "@/components/navbar/BloodNavBar.vue";

export default {
  components: {
    LoadingScreen,
    BloodNavBar,
  },
  mounted() {
    this.bloodBankRequest();
  },
  data() {
    return {
      loader: true,
      acceptedItems: [],
      snackbar: false,
      snackbar2: false,
      snackbar3: false,
      accepted: false,
      rejected: false,
      search: "",
      headers: [
        {
          text: "Patient Name",
          value: "name",
          sortable: false,
        },

        {
          text: "Blood Group",
          value: "bloodgrp",
          sortable: false,
        },
        {
          text: "Priority",
          value: "priority",
          sortable: true,
        },

        {
          text: "Hospital Name",
          value: "hospital",
          sortable: false,
        },

        {
          text: "Quantity Of Bags",
          value: "quantity",
          sortable: false,
        },
        { text: "Actions", value: "actions", sortable: true, width: "100px" },
      ],
      list: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        bloodgrp: "",
        priority: "",
        hospital: "",
        quantity: "",
      },
      defaultItem: {
        name: "",
        bloodgrp: "",
        priority: "",
        hospital: "",
        quantity: "",
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

    async bloodBankRequest() {
      await axios
        .get("https://redgfserver.onrender.com/get/blood/request")
        .then((result) => {
          let alldata = result.data;
          this.list = alldata;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    async moveToAccepted(item) {
      item.accepted = true;
      item.rejected = true;
      await axios
        .post("https://redgfserver.onrender.com/post/status", {
          _id: item._id,
          name: item.name,
          stat: "accepted",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    async moveToRejected(item) {
      item.rejected = true;
      item.accepted = false;
      await axios
        .post("https://redgfserver.onrender.com/post/status", {
          _id: item._id,
          name: item.name,
          stat: "rejected",
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
        this.rejectedItems.push(item);
    },
    async Deleteitem(item) {
      console.log(item._id);
      await axios
        .delete(`https://redgfserver.onrender.com/delete/request/${item._id}`)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
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
  background-color: #470202;
  background: radial-gradient(
    ellipse at bottom,
    rgb(67, 13, 13),
    rgb(19, 3, 3)
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
.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: #dbe2ef;
  color: #ffffff;
}
.w-100 {
  width: 100%;
}
.my2-card {
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  opacity: 0.75;
}
</style>