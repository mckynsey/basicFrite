<template>
  <div class="global">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
*,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-image: url("../src/assets/Image_fondfond.svg");
  background-repeat: no-repeat ;
  background-size: cover;
  background-position: center 200px;}
</style>
