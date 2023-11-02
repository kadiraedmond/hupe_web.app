// import './assets/main.css'
// import './assets/style.css'
// import './assets/icone.css'
// import './assets/icone1.css'
// import './assets/slide.css'
// import './assets/slide.js'
// import './assets/slide2.js'
// import './assets/font.css'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajoutez les icônes solid à la bibliothèque
library.add(fas);

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

// import { createApp } from 'vue'
// import App from './App.vue'

createApp(App).component('font-awesome-icon', FontAwesomeIcon);

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Importez le fichier de configuration de Vue Router
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App);

app.use(pinia)
app.use(router); // Utilisez Vue Router

app.mount('#app');
