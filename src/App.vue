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
          <h4>
            Contact Me: 
            <v-btn icon href="mailto:pradeepmokashi12@gmail.com" md>
                <v-icon>mdi-email</v-icon>
              </v-btn>
            <v-btn icon href="https://www.linkedin.com/in/pradeep-mokashi-b962b9208/" md>
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon href="https://github.com/PolyMokashi" md>
                <v-icon>mdi-github</v-icon>
              </v-btn>
              
              <v-btn icon href="https://twitter.com/Poly_Mokashi12" md>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon href="https://www.instagram.com/poly_mokashi/" md>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </h4>
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

