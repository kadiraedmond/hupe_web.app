import './assets/main.css'
import './assets/style.css'
import './assets/icone.css'
import './assets/icone1.css'
import './assets/slide.css'
import './assets/slide.js'
import './assets/slide2.js'
import './assets/font.css'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);

const globalOptions = {
    mode: 'international',
    autoDefaultCountry: true,
    dropdownOptions: {
        diseable: false,
        showDialCodeInSelection: true,
    },
    inputOptions: {
        required: true,
        type: 'number',
        autofocus: true,
        placeholder: 'Entrez votre numéro de téléphone'
    }
};

app.use(router); 
app.use(VueTelInput, globalOptions);

app.mount('#app');
