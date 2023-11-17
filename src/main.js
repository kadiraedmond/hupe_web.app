// import './assets/main.css'
// import './assets/style.css'
// import './assets/icone.css'
// import './assets/icone1.css'
// import './assets/slide.css'
// import './assets/slide.js'
// import './assets/slide2.js'
// import './assets/font.css'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import VOtpInput from "vue3-otp-input"
import 'vue3-toastify/dist/index.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

const pinia = createPinia()
const app = createApp(App)

const globalOptions = {
    mode: 'national',
    autoDefaultCountry: true,
    dropdownOptions: {
        disable: false,
        showDialCodeInSelection: true,
    },
    inputOptions: {
        required: true,
        type: 'String', 
        autofocus: true,
        placeholder: 'Téléphone'
    }
}


app.use(router) 
app.use(pinia)
app.use(VueTelInput, globalOptions)

app.component('v-otp-input', VOtpInput).mount('#app')