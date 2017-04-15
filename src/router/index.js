import Vue from 'vue';
import Router from 'vue-router';
import loginpage from '../components/loginPage/loginPage';
import qrcode from '../components/qrcode/qrcode';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'start',
    component: loginpage
  }, {
    path: '/qrcode',
    name: 'qrcode',
    component: qrcode
  }]
});
