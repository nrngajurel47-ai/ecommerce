import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@modules/home/HomePage.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@modules/product/ProductDetailPage.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@modules/cart/CartPage.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('@modules/checkout/CheckoutPage.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@modules/search/SearchPage.vue'),
  },
  {
    path: '/category/:categoryId',
    name: 'Category',
    component: () => import('@modules/home/CategoryPage.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@modules/order/OrderHistoryPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@modules/auth/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@modules/auth/RegisterPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = localStorage.getItem('user') !== null
  
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
