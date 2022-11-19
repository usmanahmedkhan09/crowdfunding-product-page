import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueModalVue from './components/resuable/VueModal.vue'

import App from './App.vue'
import router from './router'

import './assets/css/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('vue-modal', VueModalVue)

app.mount('#app')
