import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home/index.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../view/Category/index.vue')
  },
  {
    path: '/category-detail/:categoryId',
    name: 'category-detail',
    component: () => import('../view/CategoryDetail/index.vue'),
    props: true
  },
  {
    path: '/order-confirm',
    name: 'order-confirm',
    component: () => import('../view/OrderConfirm/index.vue'),
    props: true,
    meta: { requireAuth: true }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../view/Order/index.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/order-detail/:orderId',
    name: 'order-detail',
    component: () => import('../view/OrderDetail/index.vue'),
    props: true,
    meta: { requireAuth: true }
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('../view/Pay/index.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: () => import('../view/Product/index.vue'),
    props: true
  },
  {
    path: '/comment/:productId',
    name: 'comment',
    component: () => import('../view/Comment/index.vue'),
    props: true
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../view/Recommend/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../view/Cart/index.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../view/Search/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../view/User/index.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../view/NotFound/index.vue')
  }
]

// 创建 router 实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
