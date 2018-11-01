import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);


const pageAbout =
  () => import("PAGE/about/Index.vue");

const pageIndex =
  () => import("PAGE/Index.vue");

const routeIndex: RouteConfig = {
  path: "/",
  component: pageIndex,
  meta: { title: "Home" }
};

const routeAbout: RouteConfig = {
  path: "/about",
  component: pageAbout,
  meta: { title: "About" }
};

const routes: RouteConfig[] = [
  routeIndex,
  routeAbout
];


export default function createRouter() {
  return new VueRouter({
    mode: "history",
    routes
  });
}
