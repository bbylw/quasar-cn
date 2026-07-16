import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Introduction from './pages/Introduction.vue'
import QuickStart from './pages/QuickStart.vue'
import Components from './pages/Components.vue'
import CliGuide from './pages/CliGuide.vue'
import Ecosystem from './pages/Ecosystem.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Quasar Framework · 中文文档' } },
  { path: '/introduction', name: 'introduction', component: Introduction, meta: { title: '什么是 Quasar · 中文文档' } },
  { path: '/quick-start', name: 'quick-start', component: QuickStart, meta: { title: '快速开始 · 中文文档' } },
  { path: '/components', name: 'components', component: Components, meta: { title: 'Vue 组件 · 中文文档' } },
  { path: '/cli', name: 'cli', component: CliGuide, meta: { title: 'CLI 指南 · 中文文档' } },
  { path: '/ecosystem', name: 'ecosystem', component: Ecosystem, meta: { title: '生态系统 · 中文文档' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'Quasar Framework · 中文文档'
})
