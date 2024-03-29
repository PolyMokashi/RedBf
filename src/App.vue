<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />

    <v-footer fill-height dark padless>
      <v-card
        fill-height
        width="100%"
        flat
        tile
        class="white--text text-center"
      >
        <v-card-title style="justify-content: center">
          <h3>Team Defaulter</h3>
        </v-card-title>
        <v-divider></v-divider>
        <div>
          <v-card-text class="white--text" style="text-align: center">
            <h3 class="text-center">2023 — RedB</h3>
          </v-card-text>
        </div>
      </v-card>
    </v-footer>
  </div>
</template>

