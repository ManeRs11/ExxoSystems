import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../components/404.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'ExxoSystems',
      component: () => import('../views/index.vue'),
      meta: {
        requiresAuth: false
      }
    },
    // Authentication
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});

export default router
