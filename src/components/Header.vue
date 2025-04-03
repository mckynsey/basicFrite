<template>
  <div id="barnav">
    <div class="logo">
        <img src="../assets/563b5540-02df-4f6d-940c-2c0f55b07c2c.jpg" alt="Logo de la salle de sport" height="207" width="273,54"/>
    </div>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/subscription">Abonnement</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>
<script setup></script>
<style scoped>
#barnav {
  margin: 0;
  background-color: #8A9EDB;
  padding: 0;
}

.logo {
  width: 100px;
  height: 207px;
  background-color: #6C81EB;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6C81EB;
  padding: 10px;
}

nav a {
  background-color: #8A9EDB;
  padding: 10px;
  margin: 0 30px;
  list-style: none;
  text-decoration: none;
  color: white;
}
</style>
