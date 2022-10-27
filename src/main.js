import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/common.css'
import VueParticles from 'vue-particles';
import VueKinesis from "vue-kinesis";
let app = createApp(App);
// 全局安装路由组件
app.use(router).use(store).use(ElementPlus).use(VueParticles).use(VueKinesis).mount('#app');