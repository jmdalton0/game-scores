import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faXmark, faPlus);

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);

app.mount('#app');
