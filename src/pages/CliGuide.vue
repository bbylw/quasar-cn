<script setup lang="ts">
import { cliModes } from '../data'

const configGroups = [
  {
    title: '构建配置',
    items: [
      { key: 'build.target', desc: '构建目标浏览器', value: 'es2019' },
      { key: 'build.vite.vueOptions', desc: 'Vite Vue 插件选项', value: '{}' },
      { key: 'build.analyze', desc: '包体积分析', value: 'false' },
    ],
  },
  {
    title: '开发服务器',
    items: [
      { key: 'devServer.port', desc: '开发服务器端口', value: '9000' },
      { key: 'devServer.open', desc: '自动打开浏览器', value: 'true' },
      { key: 'devServer.https', desc: 'HTTPS 支持', value: 'false' },
    ],
  },
  {
    title: '框架配置',
    items: [
      { key: 'framework.plugins', desc: '启用的 Quasar 插件', value: '[Notify, Dialog]' },
      { key: 'framework.config.dark', desc: '暗色模式', value: 'auto' },
      { key: 'framework.iconSet', desc: '图标集', value: 'material-icons' },
    ],
  },
]
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <p class="eyebrow-accent mb-4 reveal" v-reveal>[ cli_guide ]</p>
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter text-[#f4f4f5] reveal" style="--i:1" v-reveal="1">
          CLI 指南
        </h1>
        <p class="mt-4 text-lg text-[#a1a1aa] max-w-[60ch] reveal" style="--i:2" v-reveal="2">
          Quasar CLI 是项目的核心工具。从脚手架到构建，从开发到部署——
          一条命令搞定一切。
        </p>
      </div>
    </section>

    <!-- ─── DEPLOYMENT MODES ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 01 / deployment_modes ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">六种部署模式</h2>
          <p class="mt-2 text-sm text-[#a1a1aa]">同一代码库，六个目标平台。</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(mode, i) in cliModes"
            :key="mode.mode"
            class="spotlight p-5 rounded-lg bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors reveal"
            :style="`--i:${i % 3}`"
            v-reveal="i % 3"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="mono text-xs font-bold text-[#e8b04e]">{{ mode.mode }}</span>
              <span class="mono text-[10px] text-[#71717a]">{{ String(i+1).padStart(2,'0') }}/06</span>
            </div>
            <h3 class="text-base font-semibold text-[#f4f4f5] mb-2">{{ mode.name }}</h3>
            <p class="text-sm text-[#a1a1aa] leading-relaxed mb-3">{{ mode.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="feat in mode.features"
                :key="feat"
                class="px-2 py-0.5 text-[10px] mono rounded bg-[#19a7a7]/10 text-[#19a7a7]"
              >
                {{ feat }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DEV COMMAND ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-4">
            <p class="eyebrow-accent mb-3">[ 02 / dev_workflow ]</p>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-4">开发工作流</h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">
              <code class="mono text-xs text-[#19a7a7]">quasar dev</code> 启动 Vite 开发服务器。
              HMR 毫秒级热更新，错误覆盖层，自动打开浏览器。
            </p>
            <div class="mt-6 space-y-2">
              <div class="flex items-center gap-2 text-xs">
                <span class="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                <span class="text-[#a1a1aa]">毫秒级 HMR</span>
              </div>
              <div class="flex items-center gap-2 text-xs">
                <span class="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                <span class="text-[#a1a1aa]">错误覆盖层</span>
              </div>
              <div class="flex items-center gap-2 text-xs">
                <span class="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                <span class="text-[#a1a1aa]">代理配置</span>
              </div>
              <div class="flex items-center gap-2 text-xs">
                <span class="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                <span class="text-[#a1a1aa]">HTTPS 支持</span>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8">
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ quasar dev -m spa</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> quasar dev -m spa

<span style="color:#27c93f">  Quasar v2.x</span>
<span style="color:#27c93f">  Mode.....SPA</span>
<span style="color:#27c93f">  Bundler..Vite</span>

  <span style="color:#e8b04e">VITE</span> v8.x  ready in <span style="color:#19a7a7">1.2s</span>

  <span style="color:#27c93f">➜</span>  Local:   <span style="color:#19a7a7">http://localhost:9000/</span>
  <span style="color:#27c93f">➜</span>  Network: <span style="color:#19a7a7">http://192.168.1.5:9000/</span>
  <span style="color:#71717a">  ready in 1203 ms.</span>

<span style="color:#71717a">  [HMR] connected.</span>
<span style="color:#71717a">  ✓ page reload</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CONFIG ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 03 / configuration ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">quasar.config.ts</h2>
          <p class="mt-2 text-sm text-[#a1a1aa]">所有配置集中在一个 TypeScript 文件中。类型安全，自动补全。</p>
        </div>

        <div class="grid grid-cols-12 gap-6">
          <!-- Config code -->
          <div class="col-span-12 lg:col-span-8">
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">quasar.config.ts</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed overflow-x-auto"><code><span style="color:#ff7b72">import</span> { defineConfig } <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">'#q-app/integration'</span>

<span style="color:#ff7b72">export default</span> <span style="color:#d2a8ff">defineConfig</span>((ctx) <span style="color:#ff7b72">=&gt;</span> ({
  <span style="color:#79c0ff">boot</span>: [<span style="color:#a5d6ff">'axios'</span>, <span style="color:#a5d6ff">'i18n'</span>],
  <span style="color:#79c0ff">css</span>: [<span style="color:#a5d6ff">'app.scss'</span>],

  <span style="color:#79c0ff">framework</span>: {
    <span style="color:#79c0ff">plugins</span>: [<span style="color:#a5d6ff">'Notify'</span>, <span style="color:#a5d6ff">'Dialog'</span>, <span style="color:#a5d6ff">'Loading'</span>],
    <span style="color:#79c0ff">config</span>: {
      <span style="color:#79c0ff">dark</span>: <span style="color:#a5d6ff">'auto'</span>,
      <span style="color:#79c0ff">brand</span>: {
        <span style="color:#79c0ff">primary</span>: <span style="color:#a5d6ff">'#19a7a7'</span>,
        <span style="color:#79c0ff">secondary</span>: <span style="color:#a5d6ff">'#e8b04e'</span>,
      },
    },
  },

  <span style="color:#79c0ff">build</span>: {
    <span style="color:#79c0ff">target</span>: { <span style="color:#79c0ff">browser</span>: [<span style="color:#a5d6ff">'es2019'</span>] },
    <span style="color:#79c0ff">vite</span>: { <span style="color:#79c0ff">vueOptions</span>: {} },
  },

  <span style="color:#79c0ff">devServer</span>: {
    <span style="color:#79c0ff">port</span>: <span style="color:#e8b04e">9000</span>,
    <span style="color:#79c0ff">open</span>: <span style="color:#ff7b72">true</span>,
  },
}))</code></pre>
            </div>
          </div>

          <!-- Config reference -->
          <div class="col-span-12 lg:col-span-4 space-y-6">
            <div
              v-for="group in configGroups"
              :key="group.title"
            >
              <h4 class="eyebrow-accent mb-3">{{ group.title }}</h4>
              <div class="space-y-2.5">
                <div
                  v-for="item in group.items"
                  :key="item.key"
                  class="p-3 rounded-md bg-[#16181d] border border-[#262932]"
                >
                  <code class="mono text-xs text-[#19a7a7] block mb-1">{{ item.key }}</code>
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs text-[#71717a]">{{ item.desc }}</span>
                    <code class="mono text-[10px] text-[#e8b04e] shrink-0">{{ item.value }}</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── BOOT FILES ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-4">
            <p class="eyebrow-accent mb-3">[ 04 / boot_files ]</p>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-4">Boot 文件</h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">
              Boot 文件在 Vue 应用挂载前执行。用于初始化插件、
              配置 axios 实例、设置 i18n 等全局逻辑。
            </p>
            <div class="mt-4 p-3 rounded-md bg-[#0d0e11] border border-[#262932]">
              <p class="text-xs text-[#71717a]">注册位置：</p>
              <code class="mono text-xs text-[#19a7a7]">quasar.config.ts → boot: [...]</code>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8">
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">src/boot/axios.ts</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed overflow-x-auto"><code><span style="color:#ff7b72">import</span> { boot } <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">'quasar/wrappers'</span>
<span style="color:#ff7b72">import</span> axios <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">'axios'</span>

<span style="color:#ff7b72">const</span> api = axios.<span style="color:#d2a8ff">create</span>({
  <span style="color:#79c0ff">baseURL</span>: <span style="color:#a5d6ff">'https://api.example.com'</span>,
})

<span style="color:#ff7b72">export default</span> <span style="color:#d2a8ff">boot</span>(({ app }) <span style="color:#ff7b72">=&gt;</span> {
  app.<span style="color:#d2a8ff">config</span>.globalProperties.$api = api
})

<span style="color:#ff7b72">export</span> { api }</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
