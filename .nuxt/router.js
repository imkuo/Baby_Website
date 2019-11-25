import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2ace614 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _6c6cf862 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _522a1946 = () => interopDefault(import('../pages/parent\'s_feedback.vue' /* webpackChunkName: "pages/parent\'s_feedback" */))
const _5ab29f78 = () => interopDefault(import('../pages/Sign-up.vue' /* webpackChunkName: "pages/Sign-up" */))
const _ba75556a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _f2ace614,
    name: "home"
  }, {
    path: "/login",
    component: _6c6cf862,
    name: "login"
  }, {
    path: "/parent\\'s_feedback",
    component: _522a1946,
    name: "parent\\'s_feedback"
  }, {
    path: "/Sign-up",
    component: _5ab29f78,
    name: "Sign-up"
  }, {
    path: "/",
    component: _ba75556a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
