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
          class="mx-auto mt-10 elevation-9 my6-card"
          max-width="1100"
          outlined
        >
          <v-card-title
            ><h2 style="font-family: Josefin Sans">
              Donors List
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
        <v-snackbar v-model="backend_error" :timeout="timeout" color="red">
          {{ errorcapture }}
        </v-snackbar>
        <v-snackbar v-model="check_res" :timeout="timeout" dark>
         <strong>{{ res_message }}</strong> 
        </v-snackbar>
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
    this.donorData();
  },
  data() {
    return {
      res_message: "",
      check_res: false,
      backend_error: false,
      errorcapture: null,
      timeout: 2000,
      loader: true,
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
          this.list = alldata;
        })
        .catch((err) => {
          this.backend_error = true;
          this.errorcapture = err;
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
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
          this.backend_error = true;
          this.errorcapture = err;
          console.log(err);
        })
        .finally(() => {
          this.loader = false;
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
          this.check_res = true;
          this.res_message = result.data.name;
        })
        .catch((err) => {
          this.backend_error = true;
          this.errorcapture = err;
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