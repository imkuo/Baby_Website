import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19e131fa = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4029f3de = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5e68fd3e = () => interopDefault(import('../pages/parent\'s_feedback.vue' /* webpackChunkName: "pages/parent\'s_feedback" */))
const _a9da8680 = () => interopDefault(import('../pages/Sign-up.vue' /* webpackChunkName: "pages/Sign-up" */))
const _768250c7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _19e131fa,
    name: "home"
  }, {
    path: "/login",
    component: _4029f3de,
    name: "login"
  }, {
    path: "/parent\\'s_feedback",
    component: _5e68fd3e,
    name: "parent\\'s_feedback"
  }, {
    path: "/Sign-up",
    component: _a9da8680,
    name: "Sign-up"
  }, {
    path: "/",
    component: _768250c7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
