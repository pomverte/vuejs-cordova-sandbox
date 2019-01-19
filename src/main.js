import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

import firebase from "firebase";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyA2NAbOmww4amDi43aGzwgF5e0By5ALm34",
  authDomain: "fir-test-7c5ed.firebaseapp.com",
  databaseURL: "https://fir-test-7c5ed.firebaseio.com",
  projectId: "fir-test-7c5ed"
};

firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
