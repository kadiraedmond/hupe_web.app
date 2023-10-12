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

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);

app.use(router); 

app.mount('#app');
