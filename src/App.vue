<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Parallaxy from "@lucien144/vue3-parallaxy";

import { ref, onMounted } from 'vue'

const backgroundImg = ref(null)
const onMouseMove = (e) => {
  console.log('mousemove', e.clientX, e.clientY, window.innerWidth, window.innerHeight, backgroundImg.value)
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  backgroundImg.value.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
  // img.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
};

</script>

<template>

  <div @mousemove="onMouseMove" style="position:absolute; top:0; left:0; width:100vw; height: 100vh; overflow:hidden;">
    <img  class="background-img" ref="backgroundImg" src="https://www.templatefoundation.com/previews/launch/assets/img/background.jpg">


  </div>

<!--  -->
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

  <div style="position:relative; z-index:1;">
  <RouterView />
  </div>
</template>

<style scoped>

.background-img {
  position: relative;
  display: block;
  left: -5vh;
  top: -5vh;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  max-width: 110vw;



  backface-visibility: hidden;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
