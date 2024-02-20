import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import router from './router/router'
// import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, fab);

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
