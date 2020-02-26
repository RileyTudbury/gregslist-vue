<template>
  <div class="house col-2">
    <div class="card">
      <img :src="houseData.imgUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ houseData.year }} - {{ houseData.price }}</h5>
      </div>
      <button @click="deleteHouse">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "House",
  //NOTE child components 'catch' information in props
  props: ["houseData", "houseIndex"],
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.houseData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveHouse", this.houseData);
    }
  }
};
</script>

<style scoped>
.house {
  cursor: pointer;
  color: black;
}
img {
  max-height: 40vh;
  max-width: auto;
}
</style>