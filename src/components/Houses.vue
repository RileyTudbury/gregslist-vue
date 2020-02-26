<template>
  <div class="houses row">
    <div class="col-12">
      <h1 class="text-center">Houses!</h1>
    </div>
    <house v-for="houseObj in houses" :key="houseObj._id" :houseData="houseObj" />
  </div>
</template>

<script>
import House from "./House";
export default {
  name: "Houses",
  mounted() {
    this.$store.dispatch("getHouses");
  },
  data() {
    return {};
  },
  computed: {
    houses() {
      let data = this.$store.state.houses;
      return data;
    }
  },
  components: {
    House
  }
};
</script>

<style>
</style>