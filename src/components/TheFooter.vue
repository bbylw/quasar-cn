<script setup lang="ts">
const year = new Date().getFullYear()

const sections = [
  {
    title: '文档',
    links: [
      { label: '介绍', to: '/introduction' },
      { label: '快速开始', to: '/quick-start' },
      { label: 'Vue 组件', to: '/components' },
      { label: 'CLI 指南', to: '/cli' },
      { label: '生态系统', to: '/ecosystem' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: 'GitHub', href: 'https://github.com/quasarframework/quasar' },
      { label: 'Discord 社区', href: 'https://chat.quasar.dev' },
      { label: '社区论坛', href: 'https://forum.quasar.dev' },
      { label: '视频教程', href: 'https://quasar.dev/video-tutorials' },
      { label: '路线图', href: 'https://roadmap.quasar.dev/' },
    ],
  },
  {
    title: '关于',
    links: [
      { label: '为什么捐赠', href: 'https://quasar.dev/why-donate' },
      { label: '赞助商', href: 'https://quasar.dev/sponsors-and-backers' },
      { label: '团队', href: 'https://quasar.dev/meet-the-team' },
      { label: '博客', href: 'https://blog.quasar.dev/' },
      { label: '品牌资源', href: 'https://github.com/quasarframework/quasar-art' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-[#262932] bg-[#0d0e11]">
    <div class="max-w-[1400px] mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-1">
          <RouterLink to="/" class="flex items-center gap-2.5 mb-4">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="#19a7a7" stroke-width="1.5"/>
              <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" fill="#19a7a7" opacity="0.7"/>
            </svg>
            <span class="font-display text-base font-bold text-[#f4f4f5]">Quasar</span>
          </RouterLink>
          <p class="text-sm text-[#71717a] leading-relaxed max-w-[240px]">
            以创纪录的速度构建高性能 Vue.js 用户界面。一套代码，多平台部署。
          </p>
        </div>

        <div
          v-for="section in sections"
          :key="section.title"
        >
          <h4 class="eyebrow mb-4">{{ section.title }}</h4>
          <ul class="space-y-2.5">
            <li v-for="link in section.links" :key="link.label">
              <RouterLink
                v-if="'to' in link"
                :to="link.to"
                class="text-sm text-[#a1a1aa] hover:text-[#19a7a7] transition-colors"
              >
                {{ link.label }}
              </RouterLink>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener"
                class="text-sm text-[#a1a1aa] hover:text-[#19a7a7] transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-[#262932] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-[#71717a]">
          MIT 许可证 · © 2015-{{ year }} PULSARDEV SRL, Razvan Stoenescu
        </p>
        <p class="text-xs text-[#71717a]">
          中文社区翻译 · 以
          <a href="https://quasar.dev" target="_blank" rel="noopener" class="text-[#19a7a7] hover:underline">官方文档</a>
          为准
        </p>
      </div>
    </div>
  </footer>
</template>
