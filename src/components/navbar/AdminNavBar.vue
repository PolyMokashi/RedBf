<template>
        <nav class="my_nav d-none d-md-block">
      <v-container
        class="fill-height d-flex justify-space-between align-center"
      >
        <div class="logo">
          <img width="150" src="https://i.ibb.co/LdPZt21/Picture2.png" alt="" />
        </div>
        <div class="links">
          <router-link
            class="link text-decoration-none black--text"
            v-for="(items, i) in links"
            :key="i"
            :to="items.url"
          >
            <span class="font-size:1.4vw black underline_left"></span>
            <span style="font-size: 1.4vw" :class="items.ico">
              {{ items.title }}
            </span>
            <span class="font-size:1.4vw black underline_right"></span>
          </router-link>
        </div>
        <routerLink :to="'/AdminLogin'"
          ><button class="btn">
            <span class="mdi mdi-logout">Log Out</span>
          </button></routerLink
        >
      </v-container>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            links: [
        {
          url: "/BloodBank",
          icon: "mdi-water-plus",
          title: "Blood Bank",
          ico: "mdi mdi-home-outline",
        },
        {
          url: "/Hospital",
          icon: "mdi-hospital-building",
          title: "Hospital",
          ico: "mdi mdi-water-plus",
        },
      ],
        }
    }
}
</script>

<style>
.my_nav {
  backdrop-filter: blur(10px);
}
.link {
  padding: 10px 20px;
  position: relative;
}
.link .underline_left,
.link .underline_right {
  display: block;
  position: absolute;
  height: 4px;
  width: 0px;
  bottom: -4px;
  transition: 0.25s;
}
.link .underline_left {
  left: 50%;
  border-radius: 2px 0 0 2px;
}
.link .underline_right {
  right: 50%;
  border-radius: 0 2px 2px 0;
}
.link:hover .underline_left {
  width: 50%;
  color: rgb(0, 0, 0);
  left: 0;
}
.link:hover .underline_right {
  width: 50%;
  color: rgb(0, 0, 0);
  right: 0;
}

.btn {
  position: relative;
  border: none;
  background: #112d4e;
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  overflow: hidden;
  border: 2px solid #fff5;
  border-radius: 1px;
  transition: 0.25s;
}
.btn:hover {
  box-shadow: 5px 5px 5px #0005;
  transform: scale(1.025);
}
.btn:active {
  box-shadow: 0 0 0 #fffdfd;
  transform: scale(1.5);
}
.btn::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 50%
  );
  top: 0;
  left: -80%;
  transform: skew(-45deg);
  transition: 1s;
}
.btn:hover::before {
  left: 120%;
}
</style>