import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/* add font awesome icon component */
let app = createApp(App)

app.use(router).mount('#app')
