import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: '首页 - 财通出海' }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/pages/Orders.vue'),
    meta: { title: '订单管理 - 财通出海' }
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('@/pages/Inventory.vue'),
    meta: { title: '库存管理 - 财通出海' }
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('@/pages/Analytics.vue'),
    meta: { title: '数据分析 - 财通出海' }
  },
  {
    path: '/platforms',
    name: 'Platforms',
    component: () => import('@/pages/Platforms.vue'),
    meta: { title: '多平台对接 - 财通出海' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: { title: '关于我们 - 财通出海' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || '财通出海'
  next()
})

export default router
