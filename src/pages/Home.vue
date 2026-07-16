<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelectorAll<HTMLElement>('.spotlight').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    })
  })
})

const features = [
  { title: '一套代码库', desc: '为 SPA、SSR、PWA、移动应用、桌面应用和浏览器扩展同时构建。无需重复劳动。', tag: 'cross_platform' },
  { title: '80+ 高质量组件', desc: '遵循 Material Design 规范，覆盖表单、导航、布局、数据展示全部场景。', tag: 'ui_components' },
  { title: 'CLI 工程化', desc: '内置脚手架、热重载、代码检查、构建优化，将 Vue CLI 和 Vite 能力融为一体。', tag: 'toolchain' },
  { title: '主题系统', desc: '支持 Material Design 和 iOS 风格，Sass 变量深度定制，CSS 变量动态切换。', tag: 'theming' },
  { title: '暗色模式', desc: '内置 $q.dark API，一行代码切换明暗主题，与所有组件无缝协作。', tag: 'dark_mode' },
  { title: '响应式优先', desc: 'Flex Grid + 响应式断点，从手机到 4K 显示器一致体验。', tag: 'responsive' },
  { title: '国际化 (i18n)', desc: '内置 i18n 插件，40+ 语言包开箱即用，日期/数字本地化。', tag: 'i18n' },
  { title: '动画系统', desc: '过渡、动画、涟漪效果开箱即用，支持自定义缓动函数。', tag: 'motion' },
  { title: 'TypeScript', desc: '完整类型定义，Composition API，defineComponent 全类型推导。', tag: 'typescript' },
]

const comparison = [
  { feature: '目标平台', quasar: '6+ 平台', vue: '仅 Web', nuxt: 'SSR/Web' },
  { feature: 'UI 组件', quasar: '80+', vue: '需第三方', nuxt: '需第三方' },
  { feature: '移动应用', quasar: '原生支持', vue: '不支持', nuxt: '不支持' },
  { feature: '桌面应用', quasar: 'Electron', vue: '不支持', nuxt: '不支持' },
  { feature: 'PWA', quasar: '内置', vue: '需插件', nuxt: '模块' },
  { feature: 'SSR', quasar: '内置', vue: '不支持', nuxt: '核心能力' },
  { feature: '暗色模式', quasar: '内置 API', vue: '手动实现', nuxt: '手动实现' },
  { feature: '构建工具', quasar: 'Vite', vue: 'Vite', nuxt: 'Nitro' },
]

const ecosystem = [
  { name: 'Vue 3', desc: '基于最新 Vue 3 Composition API' },
  { name: 'Vite', desc: '极速构建与 HMR' },
  { name: 'Capacitor', desc: '移动应用运行时' },
  { name: 'Electron', desc: '桌面应用运行时' },
  { name: 'Sass', desc: '深度主题定制' },
  { name: 'Pinia', desc: '状态管理' },
]
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="relative overflow-hidden">
      <div class="max-w-[1400px] mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div class="grid grid-cols-12 gap-8 items-center">
          <!-- Left: 7 cols -->
          <div class="col-span-12 lg:col-span-7">
            <p class="eyebrow-accent mb-6 reveal" v-reveal>
              [ quasar · v2 · vue_3 ]
            </p>
            <h1 class="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] leading-[1.05] font-bold tracking-tighter text-[#f4f4f5] reveal" style="--i:1" v-reveal="1">
              以 Vue 之力<br/>
              <span class="text-[#19a7a7]">覆盖每一个</span><br/>
              目标平台
            </h1>
            <p class="mt-6 text-lg text-[#a1a1aa] leading-relaxed max-w-[52ch] reveal" style="--i:2" v-reveal="2">
              Quasar 是一套基于 Vue.js 的跨平台框架。编写一次代码，
              部署为 SPA、SSR、PWA、移动应用、桌面应用和浏览器扩展。
              内置 80+ 组件、CLI 工具链和完整主题系统。
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3 reveal" style="--i:3" v-reveal="3">
              <RouterLink
                to="/quick-start"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#19a7a7] text-[#0d0e11] font-semibold text-sm hover:bg-[#2bc4c4] transition-colors"
              >
                开始使用
                <span>→</span>
              </RouterLink>
              <RouterLink
                to="/introduction"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#262932] text-[#d4d4d8] font-medium text-sm hover:border-[#19a7a7] hover:text-[#19a7a7] transition-colors"
              >
                了解框架
              </RouterLink>
            </div>
          </div>

          <!-- Right: 5 cols — deployment pipeline -->
          <div class="col-span-12 lg:col-span-5 reveal" style="--i:2" v-reveal="2">
            <div class="relative">
              <!-- Source node -->
              <div class="flex justify-center mb-2">
                <div class="px-4 py-2 rounded-md bg-[#16181d] border border-[#19a7a7]/40">
                  <span class="mono text-xs text-[#19a7a7]">src/</span>
                  <span class="mono text-xs text-[#71717a]"> · one_codebase</span>
                </div>
              </div>
              <!-- Connector lines -->
              <div class="h-6 flex justify-center">
                <svg width="240" height="24" viewBox="0 0 240 24" fill="none">
                  <path d="M120 0 L120 8 M120 8 L40 24 M120 8 L80 24 M120 8 L120 24 M120 8 L160 24 M120 8 L200 24" stroke="#262932" stroke-width="1"/>
                </svg>
              </div>
              <!-- Platform nodes -->
              <div class="grid grid-cols-3 gap-2">
                <div v-for="(p, i) in ['SPA', 'SSR', 'PWA', 'Mobile', 'Electron', 'BEX']" :key="p"
                  class="px-3 py-2.5 rounded-md bg-[#16181d] border border-[#262932] text-center hover:border-[#19a7a7]/50 transition-colors"
                >
                  <div class="mono text-[10px] text-[#71717a] mb-0.5">{{ String(i+1).padStart(2,'0') }}</div>
                  <div class="text-xs font-semibold text-[#d4d4d8]">{{ p }}</div>
                </div>
              </div>
              <!-- Terminal -->
              <div class="mt-6">
                <div class="terminal">
                  <div class="terminal-bar">
                    <span class="terminal-dot" style="background:#ff5f56"></span>
                    <span class="terminal-dot" style="background:#ffbd2e"></span>
                    <span class="terminal-dot" style="background:#27c93f"></span>
                    <span class="ml-2 mono text-[11px] text-[#71717a]">~ quasar dev</span>
                  </div>
                  <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> <span style="color:#e8b04e">npm i</span> @quasar/cli@latest
<span style="color:#71717a">$</span> quasar create my-app
<span style="color:#71717a">$</span> <span style="color:#19a7a7">cd</span> my-app
<span style="color:#71717a">$</span> quasar dev

<span style="color:#27c93f">✓</span> App ready in <span style="color:#e8b04e">1.2s</span>
<span style="color:#27c93f">✓</span> HMR active
<span style="color:#27c93f">✓</span> Local: <span style="color:#19a7a7">http://localhost:9000</span></code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats strip -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#262932] rounded-lg overflow-hidden reveal" style="--i:4" v-reveal="4">
          <div class="bg-[#0d0e11] p-6">
            <div class="text-3xl font-bold text-[#f4f4f5] font-display">80<span class="text-[#19a7a7]">+</span></div>
            <div class="mt-1 eyebrow">UI 组件</div>
          </div>
          <div class="bg-[#0d0e11] p-6">
            <div class="text-3xl font-bold text-[#f4f4f5] font-display">6<span class="text-[#19a7a7]">×</span></div>
            <div class="mt-1 eyebrow">目标平台</div>
          </div>
          <div class="bg-[#0d0e11] p-6">
            <div class="text-3xl font-bold text-[#f4f4f5] font-display">45K<span class="text-[#19a7a7]">★</span></div>
            <div class="mt-1 eyebrow">GitHub Star</div>
          </div>
          <div class="bg-[#0d0e11] p-6">
            <div class="text-3xl font-bold text-[#f4f4f5] font-display">2KB</div>
            <div class="mt-1 eyebrow">运行时 gz</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FEATURES BENTO ──────────────────────────────── -->
    <section class="border-t border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="eyebrow-accent mb-3">[ 01 / capabilities ]</p>
            <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-[#f4f4f5]">
              不只是 UI 库
            </h2>
          </div>
          <p class="hidden md:block text-sm text-[#71717a] max-w-[32ch]">
            从组件到构建工具，从主题到国际化——Quasar 覆盖前端工程的全链路。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#262932] rounded-lg overflow-hidden">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            class="spotlight bg-[#0d0e11] p-6 lg:p-7 hover:bg-[#16181d] transition-colors reveal"
            :style="`--i:${i % 3}`"
            v-reveal="i % 3"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="mono text-[10px] text-[#71717a]">{{ f.tag }}</span>
              <span class="mono text-[10px] text-[#262932]">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <h3 class="text-lg font-semibold text-[#f4f4f5] mb-2">{{ f.title }}</h3>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── QUICK START ─────────────────────────────────── -->
    <section class="border-t border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-4">
            <p class="eyebrow-accent mb-3">[ 02 / quick_start ]</p>
            <h2 class="text-3xl font-bold tracking-tight text-[#f4f4f5] mb-4">
              三步启动
            </h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">
              安装 CLI、创建项目、启动开发服务器。不到一分钟，
              你的第一个 Quasar 应用就会在浏览器中运行。
            </p>
            <RouterLink
              to="/quick-start"
              class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#19a7a7] hover:gap-3 transition-all"
            >
              完整安装指南 →
            </RouterLink>
          </div>

          <div class="col-span-12 lg:col-span-8">
            <div class="space-y-3">
              <div class="flex items-start gap-4 p-4 rounded-md bg-[#16181d] border border-[#262932]">
                <span class="mono text-xs text-[#19a7a7] mt-0.5 shrink-0">01</span>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-[#f4f4f5] mb-1">安装 Quasar CLI</div>
                  <pre v-pre class="mono text-[12px] text-[#a1a1aa]"><code>npm i -g @quasar/cli@latest</code></pre>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 rounded-md bg-[#16181d] border border-[#262932]">
                <span class="mono text-xs text-[#19a7a7] mt-0.5 shrink-0">02</span>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-[#f4f4f5] mb-1">创建项目</div>
                  <pre v-pre class="mono text-[12px] text-[#a1a1aa]"><code>quasar create my-app
cd my-app</code></pre>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 rounded-md bg-[#16181d] border border-[#262932]">
                <span class="mono text-xs text-[#19a7a7] mt-0.5 shrink-0">03</span>
                <div class="flex-1">
                  <div class="text-sm font-semibold text-[#f4f4f5] mb-1">启动开发</div>
                  <pre v-pre class="mono text-[12px] text-[#a1a1aa]"><code>quasar dev</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMPARISON TABLE ────────────────────────────── -->
    <section class="border-t border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 03 / comparison ]</p>
          <h2 class="text-3xl font-bold tracking-tight text-[#f4f4f5]">
            为什么选择 Quasar
          </h2>
        </div>

        <div class="overflow-x-auto rounded-lg border border-[#262932]">
          <table class="w-full">
            <thead>
              <tr class="bg-[#16181d] border-b border-[#262932]">
                <th class="text-left p-4 eyebrow">能力</th>
                <th class="text-left p-4">
                  <span class="text-sm font-bold text-[#19a7a7]">Quasar</span>
                </th>
                <th class="text-left p-4 eyebrow">Vue 原生</th>
                <th class="text-left p-4 eyebrow">Nuxt</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in comparison"
                :key="row.feature"
                :class="i % 2 === 0 ? 'bg-[#0d0e11]' : 'bg-[#0d0e11]/50'"
                class="border-b border-[#1e2028] last:border-0"
              >
                <td class="p-4 text-sm text-[#a1a1aa]">{{ row.feature }}</td>
                <td class="p-4 text-sm font-semibold text-[#19a7a7]">{{ row.quasar }}</td>
                <td class="p-4 text-sm text-[#71717a]">{{ row.vue }}</td>
                <td class="p-4 text-sm text-[#71717a]">{{ row.nuxt }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ─── ECOSYSTEM ───────────────────────────────────── -->
    <section class="border-t border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 04 / ecosystem ]</p>
          <h2 class="text-3xl font-bold tracking-tight text-[#f4f4f5]">
            站在巨人的肩膀上
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div
            v-for="(e, i) in ecosystem"
            :key="e.name"
            class="p-5 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors reveal"
            :style="`--i:${i % 6}`"
            v-reveal="i % 6"
          >
            <div class="text-sm font-bold text-[#f4f4f5] mb-1">{{ e.name }}</div>
            <div class="text-xs text-[#71717a]">{{ e.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─────────────────────────────────────────── -->
    <section class="border-t border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-24">
        <div class="text-center max-w-[60ch] mx-auto">
          <p class="eyebrow-accent mb-4">[ start_building ]</p>
          <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-[#f4f4f5] mb-4">
            准备好构建下一个<br/>跨平台应用了吗？
          </h2>
          <p class="text-[#a1a1aa] mb-8">
            从一行命令开始。不需要脚手架配置，不需要 webpack 调优。
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <RouterLink
              to="/quick-start"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#e8b04e] text-[#0d0e11] font-semibold text-sm hover:bg-[#f0c068] transition-colors"
            >
              立即开始
            </RouterLink>
            <RouterLink
              to="/components"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#262932] text-[#d4d4d8] font-medium text-sm hover:border-[#19a7a7] transition-colors"
            >
              浏览组件
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
