import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
        path: '/plastic_consume1',
        component: () => import ('./components/SecondApplication.vue')
    }, {
        path: '/',
        component: () => import ('./components/FirstGuide.vue')
    }, {
        path: '/plastic_consume2',
        component: () => import ('./components/ThirdApprication.vue')
    }, {
        path: '/result',
        component: () => import ('./components/Result.vue')
    }
];

// router 객체생성
const router = new VueRouter({routes});

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
