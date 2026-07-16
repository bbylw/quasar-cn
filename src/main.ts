import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { revealDirective } from './directives/reveal'

const app = createApp(App)
app.directive('reveal', revealDirective)
app.use(router)
app.mount('#app')
