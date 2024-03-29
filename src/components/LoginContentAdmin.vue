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

      <v-col justify="center">
        <v-btn
          class="mr-4"
          type="submit"
          dark
          @click="snackbar = true"
          color="black"
          :disabled="invalid"
        >
          Log in
        </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-col>
      <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    color="red"
  >
    {{ this.text }}
  </v-snackbar>
    </form>
  </validation-observer>
</template>
  
    <script>
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
    submit() {
      this.$refs.observer.validate();
      if (this.username == "admin" || this.password == "admin@1234") {
        this.$router.push({ path: "/admindashboard" });
      }
      if (this.username == "admin" || this.password == "admin") {
        this.$router.push({ path: "/admindashboard" });
      }
    },
    clear() {
      this.name = "";
      this.password = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
