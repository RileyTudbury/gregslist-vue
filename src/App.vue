<template>
  <div id="app">
    <div class="row">
      <div class="col text-center">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'Home' }"
              :class="{
                active: $route.name == 'Home' || $route.name == 'CarDetails'
              }"
            >Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">Jorbs</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">Houses</router-link>
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
  /* background-color: green; */
}
.active {
  color: green;
}
</style>