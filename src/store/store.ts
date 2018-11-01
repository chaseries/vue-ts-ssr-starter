import Vue from "vue";
import Vuex from "vuex";
import { Store } from "vuex/types";


Vue.use(Vuex);

export default function createStore (): Store<{}> {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  });
}
