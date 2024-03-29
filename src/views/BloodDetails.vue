<template>
  <v-app>
    <template v-if="loader">
      <LoadingScreen :isLoading="loader" />
    </template>
    <template>
      <v-main>
        <BloodNavBar />
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
          class="mx-auto mt-10 elevation-9 my4-card"
          max-width="1100"
          outlined
        >
          <v-card-title
            ><h2 style="font-family: Josefin Sans">
              Blood Collection Details
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
                  <v-btn color="#112D4E" dark class="ml-2" @click="addNew">
                    <v-icon>mdi-plus</v-icon>Add
                  </v-btn>
                </div>
              </v-toolbar>
            </template>
            <template v-slot:[`item.coldate`]="{ item }">
              <v-text-field
                v-model="editedItem.coldate"
                :hide-details="true"
                dense
                single-line
                :autofocus="true"
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.coldate }}</span>
            </template>
            <template v-slot:[`item.expdate`]="{ item }">
              <v-text-field
                v-model="editedItem.expdate"
                :hide-details="true"
                dense
                single-line
                :autofocus="true"
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.expdate }}</span>
            </template>
            <template v-slot:[`item.bloodgrp`]="{ item }">
              <v-text-field
                v-model="editedItem.bloodgrp"
                :hide-details="true"
                dense
                single-line
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.bloodgrp }}</span>
            </template>
            <template v-slot:[`item.haemog`]="{ item }">
              <v-text-field
                v-model="editedItem.haemog"
                :hide-details="true"
                dense
                single-line
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.haemog }}</span>
            </template>
            <template v-slot:[`item.platelate`]="{ item }">
              <v-text-field
                v-model="editedItem.platelate"
                :hide-details="true"
                dense
                single-line
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.platelate }}</span>
            </template>
            <template v-slot:[`item.quantity`]="{ item }">
              <v-text-field
                v-model="editedItem.quantity"
                :hide-details="true"
                dense
                single-line
                v-if="item.id === editedItem.id"
              ></v-text-field>
              <span v-else>{{ item.quantity }}</span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <div v-if="item.id === editedItem.id">
                <v-icon color="red" class="mr-3" @click="close">
                  mdi-window-close
                </v-icon>
                <v-icon color="green" @click="save"> mdi-content-save </v-icon>
              </div>
              <div v-else>
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
    this.bloodBankData();
  },
  data() {
    return {
      loader: true,
      search: "",
      headers: [
        {
          text: "Collection Date",
          value: "coldate",
          sortable: false,
        },
        {
          text: "Expiration Date",
          value: "expdate",
          sortable: false,
        },
        {
          text: "Blood Group",
          value: "bloodgrp",
          sortable: false,
        },
        {
          text: "haemoglobin",
          value: "haemog",
          sortable: false,
        },
        {
          text: "blood Platelets",
          value: "platelate",
          sortable: false,
        },
        {
          text: "Quantity",
          value: "quantity",
          sortable: false,
        },
        { text: "Actions", value: "actions", sortable: false, width: "100px" },
      ],
      list: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        coldate: "",
        expdate: "",
        bloodgrp: "",
        haemog: "",
        platelate: "",
        quantity: "",
      },
      defaultItem: {
        id: 0,
        coldate: "",
        expdate: "",
        bloodgrp: "",
        haemog: "g/decl",
        platelate: "/microL",
        quantity: "ml",
      },
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    async bloodBankData() {
      await axios
        .get("https://redgfserver.onrender.com/get/bloodbank")
        .then((result) => {
          console.log(result);
          let alldata = result.data;
          console.log(alldata);
          this.list = alldata;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
    },

    initialize() {
      this.list = [];
    },

    editItem(item) {
      this.editedIndex = this.list.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    async deleteItem(item) {
      console.log(item._id);
      await axios
        .delete(
          `https://redgfserver.onrender.com/delete/blood/details/${item._id}`
        )
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
        });
      const index = this.list.item;
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
        .post("https://redgfserver.onrender.com/add/new/blood/collection", {
          coldate: this.editedItem.coldate,
          expdate: this.editedItem.expdate,
          bloodgrp: this.editedItem.bloodgrp,
          haemog: this.editedItem.haemog,
          platelate: this.editedItem.platelate,
          quantity: this.editedItem.quantity,
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
      location.reload();
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
  background: #112d4e;
  color: #ffffff;
}
.w-100 {
  width: 100%;
}
.my4-card {
  width: 100%;
  max-width: 1200px;
  background-color: transparent;
  opacity: 0.75;
}
</style>