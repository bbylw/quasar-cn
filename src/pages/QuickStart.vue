<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeTab = ref('npm')
const tabs = [
  { id: 'npm', label: 'npm', cmd: 'npm i -g @quasar/cli@latest' },
  { id: 'yarn', label: 'yarn', cmd: 'yarn global add @quasar/cli@latest' },
  { id: 'pnpm', label: 'pnpm', cmd: 'pnpm add -g @quasar/cli@latest' },
  { id: 'bun', label: 'bun', cmd: 'bun add -g @quasar/cli@latest' },
]

const options = [
  { flag: '--name', type: 'string', desc: '项目名称（创建目录名）', default: 'my-app' },
  { flag: '--packager', type: 'npm|yarn|pnpm', desc: '包管理器选择', default: 'npm' },
  { flag: '--prefetch', type: 'boolean', desc: '预取动态导入的模块', default: 'true' },
  { flag: '--typescript', type: 'boolean', desc: '使用 TypeScript', default: 'false' },
  { flag: '--css', type: 'sass|stylus|less', desc: 'CSS 预处理器', default: 'sass' },
  { flag: '--bundler', type: 'vite|webpack', desc: '构建工具选择', default: 'vite' },
  { flag: '--mode', type: 'spa|ssr|pwa|... ', desc: '初始构建模式', default: 'spa' },
  { flag: '--iconSet', type: 'material|mdi|...', desc: '默认图标集', default: 'material-icons' },
  { flag: '--axios', type: 'boolean', desc: '是否安装 axios', default: 'true' },
  { flag: '--i18n', type: 'boolean', desc: '是否安装 vue-i18n', default: 'true' },
  { flag: '--eslint', type: 'boolean', desc: '是否安装 ESLint', default: 'true' },
]

const commands = [
  { cmd: 'quasar dev', desc: '启动开发服务器（HMR）' },
  { cmd: 'quasar build', desc: '构建生产版本' },
  { cmd: 'quasar build -m ssr', desc: '构建 SSR 应用' },
  { cmd: 'quasar build -m pwa', desc: '构建 PWA 应用' },
  { cmd: 'quasar build -m capacitor -T android', desc: '构建 Android 应用' },
  { cmd: 'quasar build -m capacitor -T ios', desc: '构建 iOS 应用' },
  { cmd: 'quasar build -m electron', desc: '构建 Electron 桌面应用' },
  { cmd: 'quasar build -m bex', desc: '构建浏览器扩展' },
  { cmd: 'quasar new layout <name>', desc: '创建新布局组件' },
  { cmd: 'quasar new page <name>', desc: '创建新页面组件' },
  { cmd: 'quasar new component <name>', desc: '创建新 Vue 组件' },
  { cmd: 'quasar new store <name>', desc: '创建新 Pinia/Vuex store' },
]
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <p class="eyebrow-accent mb-4 reveal" v-reveal>[ quick_start ]</p>
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter text-[#f4f4f5] reveal" style="--i:1" v-reveal="1">
          快速开始
        </h1>
        <p class="mt-4 text-lg text-[#a1a1aa] max-w-[60ch] reveal" style="--i:2" v-reveal="2">
          从零到运行，不到一分钟。选择你的包管理器，安装 CLI，创建项目。
        </p>
      </div>
    </section>

    <!-- ─── 4 STEPS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 01 / setup_flow ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">四步流程</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Step 1: Install CLI -->
          <div class="p-6 rounded-lg bg-[#16181d] border border-[#262932]">
            <div class="flex items-center gap-3 mb-4">
              <span class="mono text-sm text-[#19a7a7] font-bold">01</span>
              <h3 class="text-base font-semibold text-[#f4f4f5]">安装 Quasar CLI</h3>
            </div>
            <p class="text-sm text-[#a1a1aa] mb-4 leading-relaxed">
              Quasar CLI 是全局安装的命令行工具，负责项目脚手架、开发服务器和构建。
            </p>
            <!-- Tab switcher -->
            <div class="flex gap-1 mb-3 p-1 bg-[#0d0e11] rounded-md">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                class="px-3 py-1.5 text-xs font-medium rounded transition-colors"
                :class="activeTab === tab.id
                  ? 'bg-[#19a7a7] text-[#0d0e11]'
                  : 'text-[#71717a] hover:text-[#d4d4d8]'"
              >
                {{ tab.label }}
              </button>
            </div>
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ install</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> <span style="color:#e8b04e">{{ tabs.find(t => t.id === activeTab)?.cmd }}</span>

<span style="color:#27c93f">added</span> 287 packages in 8s</code></pre>
            </div>
          </div>

          <!-- Step 2: Create project -->
          <div class="p-6 rounded-lg bg-[#16181d] border border-[#262932]">
            <div class="flex items-center gap-3 mb-4">
              <span class="mono text-sm text-[#19a7a7] font-bold">02</span>
              <h3 class="text-base font-semibold text-[#f4f4f5]">创建项目</h3>
            </div>
            <p class="text-sm text-[#a1a1aa] mb-4 leading-relaxed">
              交互式脚手架会询问包管理器、CSS 预处理器、TypeScript 等选项。
            </p>
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ create</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> quasar create my-app

<span style="color:#e8b04e">?</span> Package manager: <span style="color:#19a7a7">npm</span>
<span style="color:#e8b04e">?</span> TypeScript: <span style="color:#19a7a7">Yes</span>
<span style="color:#e8b04e">?</span> CSS preprocessor: <span style="color:#19a7a7">Sass</span>
<span style="color:#e8b04e">?</span> Bundler: <span style="color:#19a7a7">Vite</span>

<span style="color:#27c93f">✓</span> Project created!</code></pre>
            </div>
          </div>

          <!-- Step 3: Dev server -->
          <div class="p-6 rounded-lg bg-[#16181d] border border-[#262932]">
            <div class="flex items-center gap-3 mb-4">
              <span class="mono text-sm text-[#19a7a7] font-bold">03</span>
              <h3 class="text-base font-semibold text-[#f4f4f5]">启动开发</h3>
            </div>
            <p class="text-sm text-[#a1a1aa] mb-4 leading-relaxed">
              Vite HMR 毫秒级热更新，保存即见。
            </p>
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ dev</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> <span style="color:#19a7a7">cd</span> my-app
<span style="color:#71717a">$</span> quasar dev

<span style="color:#27c93f">✓</span> App ready in <span style="color:#e8b04e">1.2s</span>
<span style="color:#27c93f">✓</span> HMR active
<span style="color:#27c93f">✓</span> Local: <span style="color:#19a7a7">http://localhost:9000</span></code></pre>
            </div>
          </div>

          <!-- Step 4: Build -->
          <div class="p-6 rounded-lg bg-[#16181d] border border-[#262932]">
            <div class="flex items-center gap-3 mb-4">
              <span class="mono text-sm text-[#19a7a7] font-bold">04</span>
              <h3 class="text-base font-semibold text-[#f4f4f5]">构建部署</h3>
            </div>
            <p class="text-sm text-[#a1a1aa] mb-4 leading-relaxed">
              一行命令构建任意目标平台的生产版本。
            </p>
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ build</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> quasar build

<span style="color:#27c93f">✓</span> Build completed
<span style="color:#27c93f">✓</span> Output: <span style="color:#19a7a7">dist/spa</span>
<span style="color:#27c93f">✓</span> Size: <span style="color:#e8b04e">142 KB</span> (gzipped)</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CREATE OPTIONS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 02 / create_options ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">脚手架选项</h2>
        </div>

        <div class="overflow-x-auto rounded-lg border border-[#262932]">
          <table class="w-full">
            <thead>
              <tr class="bg-[#16181d] border-b border-[#262932]">
                <th class="text-left p-3.5 eyebrow">参数</th>
                <th class="text-left p-3.5 eyebrow">类型</th>
                <th class="text-left p-3.5 eyebrow">说明</th>
                <th class="text-left p-3.5 eyebrow">默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(opt, i) in options"
                :key="opt.flag"
                :class="i % 2 === 0 ? 'bg-[#0d0e11]' : 'bg-[#0d0e11]/50'"
                class="border-b border-[#1e2028] last:border-0"
              >
                <td class="p-3.5"><code class="mono text-xs text-[#19a7a7]">{{ opt.flag }}</code></td>
                <td class="p-3.5"><code class="mono text-xs text-[#a1a1aa]">{{ opt.type }}</code></td>
                <td class="p-3.5 text-sm text-[#d4d4d8]">{{ opt.desc }}</td>
                <td class="p-3.5"><code class="mono text-xs text-[#71717a]">{{ opt.default }}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ─── DIRECTORY STRUCTURE ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-4">
            <p class="eyebrow-accent mb-3">[ 03 / project_structure ]</p>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-4">目录结构</h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed">
              Quasar 项目结构遵循约定优于配置原则。每个目录有明确职责，
              CLI 自动识别并处理。
            </p>
          </div>
          <div class="col-span-12 lg:col-span-8">
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~/my-app</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#e8b04e">my-app/</span>
├── <span style="color:#19a7a7">public/</span>            <span style="color:#71717a"># 静态资源 (favicon, robots.txt)</span>
├── <span style="color:#19a7a7">src/</span>
│   ├── <span style="color:#19a7a7">assets/</span>        <span style="color:#71717a"># 编译型资源 (images, fonts)</span>
│   ├── <span style="color:#19a7a7">boot/</span>          <span style="color:#71717a"># 启动文件 (axios, i18n)</span>
│   ├── <span style="color:#19a7a7">components/</span>    <span style="color:#71717a"># Vue 组件</span>
│   ├── <span style="color:#19a7a7">css/</span>           <span style="color:#71717a"># 全局样式</span>
│   ├── <span style="color:#19a7a7">layouts/</span>       <span style="color:#71717a"># 布局组件</span>
│   ├── <span style="color:#19a7a7">pages/</span>         <span style="color:#71717a"># 页面组件 (自动路由)</span>
│   ├── <span style="color:#19a7a7">router/</span>        <span style="color:#71717a"># 路由配置</span>
│   ├── <span style="color:#19a7a7">stores/</span>        <span style="color:#71717a"># Pinia stores</span>
│   └── <span style="color:#19a7a7">App.vue</span>        <span style="color:#71717a"># 根组件</span>
├── <span style="color:#e8b04e">quasar.config.ts</span>    <span style="color:#71717a"># Quasar 配置文件</span>
├── <span style="color:#e8b04e">package.json</span>
└── <span style="color:#e8b04e">tsconfig.json</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMMANDS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-12">
          <p class="eyebrow-accent mb-3">[ 04 / cli_commands ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">常用命令</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="(c, i) in commands"
            :key="c.cmd"
            class="flex items-center gap-4 p-3.5 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/30 transition-colors"
          >
            <code class="mono text-xs text-[#19a7a7] shrink-0 min-w-[220px]">{{ c.cmd }}</code>
            <span class="text-xs text-[#a1a1aa]">{{ c.desc }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
