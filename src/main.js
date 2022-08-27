import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style/all.scss'


const app = createApp(App);
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(bootstrap)
app.mount('#app')
