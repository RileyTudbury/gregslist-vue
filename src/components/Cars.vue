<template>
  <div class="cars row">
    <!-- NOTE Props are data passed from parent to child component -->
    <div class="col-12">
      <label for="filter-price">Max Price</label>
      <input type="number" id="filter-price" v-model="maxPrice" />
    </div>
    <div class="row">
      <car v-for="(carObj, index) in cars" :key="carObj._id" :carData="carObj" :carIndex="index" />
    </div>
  </div>
</template>

<script>
import Car from "./Car";
export default {
  name: "Cars",
  mounted() {
    //NOTE mounted is fired when the component is 'mounted' to the page
    //NOTE '$' is a reference to the Root instance (main.js)
    this.$store.dispatch("getCars");
  },
  data() {
    return {
      page: 0,
      maxPrice: 0
    };
  },
  //NOTE Computed's are watching the store for changes (observers) and are reactive to change
  //NOTE Computeds can be treated like getters (variable properties) and should always be used when getting data from the state
  computed: {
    //NOTE Computeds must always return a value
    cars() {
      let data = this.$store.state.cars;
      if (this.maxPrice > 0) {
        data = data.filter(c => c.price < parseInt(this.maxPrice));
      }
      //   return this.$store.state.cars.slice(this.page, this.page + 3);
      return data;
    }
  },
  components: {
    Car
  }
};
</script>

<style></style>