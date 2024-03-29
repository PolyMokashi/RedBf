<template>
    <v-app>
        <template v-if="isLoading">
          <section class="sec-loading">
            <div class="one"></div>
          </section>
        </template>
    </v-app>
</template>

<script>
export default {
  props: {
    isLoading: Boolean, // Define a prop to control loader visibility
  },
};
</script>

<style>
:root {
  --border-width: 7px;
}

.sec-loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sec-loading .one {
  height: 150px;
  width: 150px;
  border: var(--border-width) solid #880808;
  transform: rotate(45deg);
  border-radius: 0 50% 50% 50%;
  position: relative;
  animation: move 0.5s linear infinite alternate-reverse;
}
.sec-loading .one::before {
  content: "";
  position: absolute;
  height: 55%;
  width: 55%;
  border-radius: 50%;
  border: var(--border-width) solid transparent;
  border-top-color:#880808;
  border-bottom-color: #880808;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes move {
  to {
    transform: translateY(15px) rotate(45deg);
  }
}
</style>