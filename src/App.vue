<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <div class="col text-center">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Home' }"
              :class="{
                active: $route.name == 'Home'
              }"
            >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'CarsView' }" class="nav-link">Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Houses' }" class="nav-link">Houses</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Jobs' }" class="nav-link">Jorbs</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  max-width: 100vw;
  color: white;
  background-color: black;
}
</style>