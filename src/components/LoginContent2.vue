<template>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required"
        >
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
  
        <v-btn
          class="mr-4"
          type="submit"
          color="black"
          dark
          :disabled="invalid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>
  </template>

  <script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      username: '',
      password: '',
      email: '',
      select: null,
      
    }),

    methods: {
      async submit() {
      try {
      this.$refs.observer.validate();
      if (this.$refs.observer.flags.valid) {
      
        // Send login request to the server
        const response = await fetch('http://localhost:4000/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store the token in local storage
          localStorage.setItem('token', data.token);

          // Redirect to the home page or perform other actions
          // ...
          this.$router.push({ path: "/BloodBank" });
        } else {
          console.error(data.error);
        }
      }
      } catch (error) {
        console.error('An error occurred while logging in.', error);
      }
      // if (this.username=="apex"||this.password=="apex@1234"){
      //   this.$router.push({ path: "/Hospital" });
      // }
    },
      clear () {
        this.username = ''
        this.password = ''
        // this.email = ''
        // this.select = null
        // this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
  </script>