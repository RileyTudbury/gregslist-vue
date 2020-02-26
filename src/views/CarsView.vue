<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-right">
        <button v-if="!carForm" @click="carForm = true" class="btn btn-success">Add-Car</button>
        <button v-else @click="carForm = false" class="btn btn-danger">cancel</button>
      </div>
      <div class="col-12">
        <create-car v-if="carForm" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <cars />
      </div>
    </div>
  </div>
</template>

<script>
import Cars from "@/components/Cars";
import CreateCar from "@/components/CreateCar";
export default {
  name: "CarsView",
  data() {
    return {
      carForm: false
    };
  },
  components: {
    Cars,
    CreateCar
  }
};
</script>