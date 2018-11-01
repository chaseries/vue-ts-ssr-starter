import Vue from "vue";
import App from "SRC/App.vue";
import { Component } from "vue/types";
import VueRouter from "vue-router/types";
import { Store } from "vuex/types";
import { sync } from "vuex-router-sync";
import createRouter from "SRC/router";
import createStore from "SRC/store/store";


export const createApp = function createApp() {

  const router: VueRouter = createRouter();
  const store: Store<{}> = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
