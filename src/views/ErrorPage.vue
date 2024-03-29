<template>
  <v-app>
  <v-container fluid fill-height>
    <v-layout align-center justify-center fill-height>
      <v-flex xs12 sm8 md6>
        <v-card outlined elevation="8">
          <v-card-text>
            <div class="animation-container">
              <v-img
                src="https://i.ibb.co/LdPZt21/Picture2.png"
                alt="RedB"
                class="blood-drop-icon"
              />
              <div class="pulsating-circle"></div>
            </div>
            <h2 class="error-message">Uh oh! Lost in the system?</h2>
            <p class="description">
              We couldn't find the page you were looking for. But don't worry, your donation spirit is still valuable!
            </p>
            <router-link to="/">
            <button class="btn" style="background-color: #92000a;">
          <span class="mdi mdi-logout">Return to Home Page</span>
        </button>
            </router-link>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'BloodBank404',
  data() {
    return {};
  },
};
</script>

<style scoped>

.blood-drop-icon {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
}

.pulsating-circle {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.2);
  animation: pulsate 1s ease-in-out infinite;
}

.error-message {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
}

.description {
  font-size: 16px;
  text-align: center;
  margin: 16px auto;
}

.mt-4 {
  margin-top: 16px;
}

@keyframes pulsate {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
