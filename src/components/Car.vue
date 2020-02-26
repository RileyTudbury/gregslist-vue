<template>
  <div class="car col-2">
    <div class="card">
      <img :src="carData.imgUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ carData.make }} - {{ carData.model }}</h5>
      </div>
      <button @click="deleteCar">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car",
  //NOTE child components 'catch' information in props
  props: ["carData", "carIndex"],
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.carData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveCar", this.carData);
    }
  }
};
</script>

<style scoped>
.car {
  cursor: pointer;
  color: black;
}
img {
  max-height: 40vh;
  max-width: auto;
}
</style>