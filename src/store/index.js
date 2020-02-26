import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: [],
    houses: [],
    activeHouse: []
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },

    setHouses(state, houses) {
      state.houses = houses
    },

    addCar(state, car) {
      state.cars.push(car)
    },

    removeCar(state, id) {
      state.cars = state.cars.filter(c => c._id != id)
    },

    setActiveCar(state, car) {
      state.activeCar = car
    },

    setActiveHouse(state, house) {
      state.activeHouse = house
    }


  },

  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars")
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getHouses({ commit, dispatch }) {
      try {
        let res = await _api.get("houses")
        commit("setHouses", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getCarById({ commit, dispatch }, id) {
      try {
        let res = await _api.get(id)
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Home" })
      }
    },

    async getHouseById({ commit, dispatch }, id) {
      try {
        let res = await _api.get(id)
        commit("setActiveHouse", res.data.data)
      } catch (error) {
        console.error(error)
        router.push({ name: "Home" })
      }
    },

    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post("", newCar)
        commit("addCar", res.data.data)
        router.push({ name: "CarDetails", params: { carId: res.data.data._id } })

      } catch (error) {
        console.error(error)
      }
    },

    async deleteCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.delete(carId)
        commit("removeCar", carId)
        commit("setActiveCar", {})
      } catch (error) {
        console.error(error)
      }
    },

    async deleteHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _api.delete(houseId)
        commit("removeHouse", houseId)
        commit("setActiveHouse", {})
      } catch (error) {
        console.error(error)
      }
    }
  }
})
