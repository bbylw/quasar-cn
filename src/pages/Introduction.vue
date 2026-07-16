<script setup lang="ts">
const advantages = [
  { num: '01', title: '一套代码，多端部署', desc: '为 SPA、SSR、PWA、移动应用、桌面应用和浏览器扩展同时构建。Quasar 处理各平台的差异，你只需专注于业务逻辑。' },
  { num: '02', title: 'Material Design 组件', desc: '80+ 高质量组件遵循 Material Design 3 规范，同时支持 iOS 风格。所有组件支持暗色模式、RTL 和键盘导航。' },
  { num: '03', title: 'Vite 极速构建', desc: '基于 Vite 的开发服务器提供毫秒级 HMR，生产构建自动代码分割、树摇和压缩。' },
  { num: '04', title: '全类型 TypeScript', desc: '从组件 props 到 CLI 配置，全链路 TypeScript 类型定义，IDE 智能提示完整覆盖。' },
  { num: '05', title: '主题深度定制', desc: 'Sass 变量系统 + CSS 变量运行时切换。品牌色、间距、圆角、字号——一切可控。' },
  { num: '06', title: '内置 i18n', desc: '40+ 语言包开箱即用，日期、数字、货币自动本地化。RTL 布局无需额外开发。' },
  { num: '07', title: '响应式优先', desc: 'Flex Grid 系统和响应式断点从小屏到大屏一致适配。QResponsive 和 QResizeObserver 精确控制。' },
  { num: '08', title: '活跃的社区', desc: '45K+ GitHub Star，Discord 数万开发者，丰富的社区组件和 App Extensions 生态。' },
  { num: '09', title: '企业级就绪', desc: '长期支持版本、严格的安全策略、详尽的迁移指南。被全球数千家企业用于生产环境。' },
]

const philosophy = [
  { title: '约定优于配置', desc: 'Quasar 选择合理的默认值。安装即用，开箱即走。需要定制时，配置入口清晰明确。' },
  { title: '渐进式增强', desc: '从简单页面到复杂企业应用，Quasar 随需求增长。不需要一开始就理解所有概念。' },
  { title: '性能即文化', desc: '代码分割、懒加载、SSR 缓存、PWA 离线策略——性能优化不是附加项，而是设计起点。' },
]
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-8">
            <p class="eyebrow-accent mb-6 reveal" v-reveal>[ introduction ]</p>
            <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter text-[#f4f4f5] leading-[1.1] reveal" style="--i:1" v-reveal="1">
              什么是 <span class="text-[#19a7a7]">Quasar</span>
            </h1>
            <p class="mt-6 text-lg text-[#a1a1aa] leading-relaxed max-w-[65ch] reveal" style="--i:2" v-reveal="2">
              Quasar 是一套基于 Vue.js 的开源框架，专注于以单一代码库
              构建跨平台应用。它不是单纯的 UI 组件库——而是整合了
              构建工具、组件系统、主题引擎、国际化、PWA 能力和部署流程
              的完整工程方案。
            </p>
          </div>
          <div class="col-span-12 lg:col-span-4 lg:border-l lg:border-[#262932] lg:pl-8">
            <div class="space-y-4 mt-2">
              <div>
                <div class="eyebrow mb-1">创建时间</div>
                <div class="text-sm text-[#d4d4d8]">2016 年</div>
              </div>
              <div>
                <div class="eyebrow mb-1">当前版本</div>
                <div class="text-sm text-[#d4d4d8]">v2 (Vue 3)</div>
              </div>
              <div>
                <div class="eyebrow mb-1">许可证</div>
                <div class="text-sm text-[#d4d4d8]">MIT</div>
              </div>
              <div>
                <div class="eyebrow mb-1">作者</div>
                <div class="text-sm text-[#d4d4d8]">Razvan Stoenescu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── MOTTO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <blockquote class="max-w-[80ch] mx-auto text-center reveal" v-reveal>
          <p class="text-2xl lg:text-3xl font-display font-medium text-[#f4f4f5] leading-[1.4] tracking-tight">
            "Write once, deploy everywhere.
            <br/>
            <span class="text-[#19a7a7]">一次编写，处处部署。</span>"
          </p>
          <p class="mt-4 eyebrow">— Quasar Framework 座右铭</p>
        </blockquote>
      </div>
    </section>

    <!-- ─── ADVANTAGES ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 01 / core_advantages ]</p>
          <h2 class="text-3xl font-bold tracking-tight text-[#f4f4f5]">九大核心优势</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#262932] rounded-lg overflow-hidden">
          <div
            v-for="(adv, i) in advantages"
            :key="adv.num"
            class="spotlight bg-[#0d0e11] p-6 lg:p-7 hover:bg-[#16181d] transition-colors reveal"
            :style="`--i:${i % 3}`"
            v-reveal="i % 3"
          >
            <span class="mono text-xs text-[#19a7a7]">{{ adv.num }}</span>
            <h3 class="mt-3 text-lg font-semibold text-[#f4f4f5] mb-2">{{ adv.title }}</h3>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">{{ adv.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PHILOSOPHY ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 02 / design_philosophy ]</p>
          <h2 class="text-3xl font-bold tracking-tight text-[#f4f4f5]">设计哲学</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(p, i) in philosophy"
            :key="p.title"
            class="p-6 rounded-lg bg-[#16181d] border border-[#262932] reveal"
            :style="`--i:${i}`"
            v-reveal="i"
          >
            <div class="w-10 h-10 rounded-md bg-[#19a7a7]/10 flex items-center justify-center mb-4">
              <span class="text-[#19a7a7] mono text-sm font-bold">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <h3 class="text-base font-semibold text-[#f4f4f5] mb-2">{{ p.title }}</h3>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section>
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg bg-[#16181d] border border-[#262932]">
          <div>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-2">准备好动手了吗？</h2>
            <p class="text-sm text-[#a1a1aa]">只需一行命令，一分钟即可启动你的第一个 Quasar 项目。</p>
          </div>
          <RouterLink
            to="/quick-start"
            class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#e8b04e] text-[#0d0e11] font-semibold text-sm hover:bg-[#f0c068] transition-colors"
          >
            快速开始 →
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
