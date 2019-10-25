import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase"

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCXUFuE-KzMZ83dc6vveMR-luaalrHuGGk',
  authDomain: '',
  databaseURL: '',
  projectId: 'citation-notes',
  storageBucket: '',
  messagingSenderId: ''
};

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
