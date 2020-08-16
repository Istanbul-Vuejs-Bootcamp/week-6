import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      meta: {
        isRequireAuth: true,
      }

    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
      meta: {
        isRequireAuth: false,
      }
    },
    {
      path: '/register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
      meta: {
        isRequireAuth: false,
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/User/Profile.vue'),
      meta: {
        isRequireAuth: true,
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


const isAuthenticated = (to, from, next) => {

  const accessToken = store.getters["auth/getAccessToken"] || localStorage.getItem('ACCESS_TOKEN');
  const user = store.getters['auth/getAuthUser'];
  if(accessToken && user === null) {
    store.dispatch('auth/me').then((response) => {
      next();
    }).catch((error) => {
      next('/login')
    })
  }

  /*
  if (user === null && to.meta && to.meta.isRequireAuth) {
    next('/login')
  } else {
    next();
  }
  */




}

router.beforeEach((to, from, next) => {
  isAuthenticated(to, from, next);
  next();
})

export default router
