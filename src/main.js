import "bootstrap/dist/js/bootstrap.bundle.min.js" 
 
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import VOtpInput from "vue3-otp-input"
import 'vue3-toastify/dist/index.css'
 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import i18n from "./translations/i18n"
 

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
app.use(i18n)

app.component('v-otp-input', VOtpInput).mount('#app')