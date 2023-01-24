import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import {BootstrapIconsPlugin} from "bootstrap-icons-vue"
import Vuelidate from '@vuelidate/core'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import NavbarOrganism from "@/components/subComponents/NavbarOrganism";
import FooterOrganism from "@/components/subComponents/FooterOrganism";
import {createPinia} from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
app.use(BootstrapIconsPlugin);
app.use(pinia);
app.use(Vuelidate);
app.use(VueGoogleMaps, {
    load: {
        key:'',                         //paste your personal Google API here
        libraries: 'places',
    }
});

//you can use components application wide, by adding them before the full app is mounted
//this way you have them available in the App.vue file as well
app.component('NavbarOrganism', NavbarOrganism);
app.component('FooterComponent', FooterOrganism);

app.mount('#app');

