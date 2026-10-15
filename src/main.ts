import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from "./router";

// Leserichtung
const rtlLanguages = ['ar', 'he', 'fa', 'ur']
const language = (navigator.language || 'de').split('-')[0]
document.documentElement.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr'

createApp(App)
    .use(router)
    .mount('#app')
