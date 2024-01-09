<template>
  <v-app>
    <!-- TEXT AOE AND THE IMAGE  -->


    <div class="text-center">
      <img src="../assets/prog.png" alt="" height="50" width="50" class="mt-2">
      <h3 class="my-2 blue--text"> AOE </h3>

    </div>
    <hr class="font-weight-bold mx-2">

    <!-- TOOLBAR AND ITS ATTRIBUTES  -->


    <!-- <nav class="pa-2 mx-2">
            <v-toolbar dense flat color="blue darken-3">

        YOUR CODE FOR TOOLBAR WILL GO HERE 

            </v-toolbar>
        </nav> -->


    <div class="text-center mt-3 orange--text">

      <h2>Welcome Sign up for AOE</h2>
      <h3><i>(Its Free)</i></h3>

    </div>
    <br>
    <v-container class="text-left ml-15">
      <div>
        <v-row>
          <v-col cols="3">
            <v-text-field label="First Name" single-line outlined></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="Middle Name" single-line outlined></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="Last Name" single-line outlined></v-text-field>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field label="Mobile No." single-line outlined></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Email" single-line outlined></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            class="input-group--focused"
            @click:append="show3 = !show3"
            outlined
          ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirm Password"
            hint="At least 8 characters"
            class="input-group--focused"
            @click:append="show4 = !show4"
            outlined
          ></v-text-field>
          </v-col>
        </v-row>
      </div>
      <br>
     <div class="text-right orange-text">

      <span >Already have account? <b> <u> Sign in </u> </b> </span>

      <v-btn
              color="success"
              dark
              large
            >
              Register
            </v-btn>

     </div>
    </v-container>

  </v-app>
</template>
  
<script>
  export default {
    data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>
  