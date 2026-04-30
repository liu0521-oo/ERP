import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: '首页 - 桓晟' }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/pages/Orders.vue'),
    meta: { title: '订单管理 - 桓晟' }
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('@/pages/Inventory.vue'),
    meta: { title: '库存管理 - 桓晟' }
  },
  {
    path: '/platforms',
    name: 'Platforms',
    component: () => import('@/pages/Platforms.vue'),
    meta: { title: '多平台对接 - 桓晟' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    meta: { title: '关于我们 - 桓晟' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string || '桓晟'
  next()
})

export default router
