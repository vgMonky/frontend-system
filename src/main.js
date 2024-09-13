import './feature_modules/StyleVariables/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/feature_modules/Navegation/router'

createApp(App).use(router).mount('#app')