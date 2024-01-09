<template>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider v-slot="{ errors }" name="Name" rules="required">
          <v-text-field
            v-model="username"
            :error-messages="errors"
            label="UserName"
            prepend-icon="mdi-account"
            outlined
            clearable
            required
          ></v-text-field>
        </validation-provider>
        
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required"
          >
        <v-text-field
          v-model="password"
          outlined
          clearable
          :error-messages="errors"
          prepend-icon="mdi-lock-outline"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </validation-provider>
        
  <v-col justify="center">
        <v-btn
          class="mr-4"
          type="submit"
          dark
          color="black"
          :disabled="invalid"
        >
          submit
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
    </v-col>
      </form>
    </validation-observer>
  </template>
  
    <script>
  import { required, digits, email, max, regex } from "vee-validate/dist/rules";
  import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
  } from "vee-validate";
  
  setInteractionMode("eager");
  
  extend("digits", {
    ...digits,
    message: "{_field_} needs to be {length} digits. ({_value_})",
  });
  
  extend("required", {
    ...required,
    message: "{_field_} can not be empty",
  });
  
  extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters",
  });
  
  extend("regex", {
    ...regex,
    message: "{_field_} {_value_} does not match {regex}",
  });
  
  extend("email", {
    ...email,
    message: "Email must be valid",
  });
  
  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      username: "",
      password:"",
    }),
  
    methods: {
      submit() {
        this.$refs.observer.validate();
        if (this.username=="admin"||this.password=="admin@1234"){
          this.$router.push({ path: "/admindashboard" });
        }
      },
      clear() {
        this.name = "";
        this.password="";
        this.$refs.observer.reset();
      },
    },
  };
  </script>