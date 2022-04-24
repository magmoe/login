import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "../views/login.vue"
import RestrictedView from "../views/restricted.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [

    {
      path: "/",
      name: "login",
      component: LoginView
    },
    {
      path: "/restricted",
      name: "restricted",
      component: RestrictedView
    }
  ]
})
