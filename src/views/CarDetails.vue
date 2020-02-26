<template>
  <div class="car-details">
    <h1>CAR DETAILS .VUE</h1>
    <div v-if="details._id">{{ details }}</div>
    <button @click="deleteCar">delete</button>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    // NOTE if we have no cars in state
    if (!this.$store.state.cars.length) {
      // NOTE Go get the car by its id
      this.$store.dispatch("getCarById", this.$route.params.carId);
    } else {
      // NOTE otherwise, set the car as the active car, based on its ID
      this.$store.dispatch(
        "setActiveCar",
        this.$store.state.cars.find(c => c._id == this.$route.params.carId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.details._id);
    }
  }
};
</script>

<style></style>