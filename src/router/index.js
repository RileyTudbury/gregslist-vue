import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import CarsView from '../views/CarsView.vue'
// @ts-ignore
import CarDetails from "../views/CarDetails.vue"
// @ts-ignore
import Home from "../views/Home.vue"
// @ts-ignore
import Houses from "../components/Houses.vue"
// @ts-ignore
import Jobs from "../components/Jobs.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'CarsView',
    component: CarsView
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars/:carId',
    name: "CarDetails",
    component: CarDetails
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  routes
})

export default router
