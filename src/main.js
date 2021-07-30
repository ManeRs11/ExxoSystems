import Vue from 'vue'
import App from './App.vue'

// Wizzard Vue 
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'vue2-animate/dist/vue2-animate.min.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Vue-Router
import VueRouter from 'vue-router'
import router from './router'

// Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vee Validate
import VeeValidate from 'vee-validate'

// Firebase
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

// Moment Vue
import moment from "moment";
import VueMomentJS from "vue-momentjs";

// Lodash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// Sweet Alert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// CORS
import cors from 'cors'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueFormWizard)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(firebase)
Vue.use(cors)
Vue.use(firestorePlugin)
Vue.use(VueSweetalert2)
Vue.use(VueMomentJS, moment)
Vue.use(VueLodash, {lodash: lodash})

Vue.config.productionTip = false
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmcNzE6ypR_W1KoBNTvl4cnGjTNN_l5oM",
  authDomain: "exxosystems.firebaseapp.com",
  projectId: "exxosystems",
  storageBucket: "exxosystems.appspot.com",
  messagingSenderId: "79852182979",
  appId: "1:79852182979:web:b6670d1caea28912473176",
  measurementId: "G-LN6RW7E6WL"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user){
    console.log('', user)
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
})
