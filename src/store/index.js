import Vue from "vue";
import Vuex from "vuex";

import * as auth from "./modules/Auth";
import * as user from "./modules/User";
import * as message from "./modules/Message";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  modules: {
    auth,
    user,
    message,
  },
});