<template>
  <validation-observer ref="observer">
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
      <validation-provider v-slot="{ errors }" name="password" rules="required">
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
      <v-btn class="mr-4" type="submit" dark color="black"> Log in </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="red">
      {{ this.text }}
    </v-snackbar>
  </validation-observer>
</template>


<script>
// import axios from 'axios';
import { required, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

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

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    username: "",
    password: "",
    snackbar: false,
    text: "Please enter valid Username and Password",
    timeout: 2000,
  }),

  methods: {
    async submit() {
      try {
        this.$refs.observer.validate();
        if (this.$refs.observer.flags.valid) {
          // Send login request to the server
          const response = await fetch(
            "https://redgfserver.onrender.com/v1/auth/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: this.username,
                password: this.password,
              }),
            }
          );

          const data = await response.json();

          if (response.ok) {
            // Store the token in local storage
            window.dataLayer?.push({
            event: "Hospital-Log_in"
            });
            localStorage.setItem("token", data.token);
            // Redirect to the home page or perform other actions
            this.$router.push({ path: "/Hospital" });
          } else {
            this.snackbar = true;
            console.error(data.error);
          }
        }
      } catch (error) {
        console.error("An error occurred while logging in.", error);
      }
    },
    clear() {
      this.username = "";
      this.password = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
