import { createApp } from 'vue'
import DogApp from './App.vue'
import Vue from 'vue'
import router from './router'

const app = createApp(DogApp);

app.use(router);
app.use(Vue);
app.mount('#app');

