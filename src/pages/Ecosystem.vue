<script setup lang="ts">
import { directives, plugins, composables, utils } from '../data'

const appExtensions = [
  { name: '@quasar/qapp-based-backend', desc: '为移动端提供本地 Node.js 后端' },
  { name: '@quasar/qsocketio', desc: 'Socket.IO 集成' },
  { name: '@quasar/qmarkdown', desc: 'Markdown 渲染组件' },
  { name: '@quasar/qiconpicker', desc: '图标选择器' },
  { name: '@quasar/qpdfviewer', desc: 'PDF 查看器' },
  { name: '@quasar/qzoom', desc: '图片缩放组件' },
]

const iconGenieFeatures = [
  { title: '自动生成', desc: '从一张源图生成所有平台所需图标和启动屏。' },
  { title: '多平台支持', desc: 'SPA PWA、Capacitor、Cordova、Electron 全覆盖。' },
  { title: '质量优化', desc: '自动压缩、去元数据、生成最优格式。' },
  { title: 'CLI 集成', desc: '一条命令完成所有图标生成工作。' },
]
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <p class="eyebrow-accent mb-4 reveal" v-reveal>[ ecosystem ]</p>
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter text-[#f4f4f5] reveal" style="--i:1" v-reveal="1">
          生态系统
        </h1>
        <p class="mt-4 text-lg text-[#a1a1aa] max-w-[60ch] reveal" style="--i:2" v-reveal="2">
          Vue 指令、Quasar 插件、Composables、工具函数、App Extensions——
          Quasar 提供完整的工具链来加速你的开发。
        </p>
      </div>
    </section>

    <!-- ─── DIRECTIVES ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ 01 / directives · {{ directives.length }} ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">Vue 指令</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(d, i) in directives"
            :key="d.name"
            class="spotlight p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <code class="mono text-xs font-semibold text-[#19a7a7]">{{ d.name }}</code>
              <span class="mono text-[10px] text-[#71717a]">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <p class="text-xs text-[#a1a1aa]">{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PLUGINS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ 02 / plugins · {{ plugins.length }} ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">Quasar 插件</h2>
          <p class="mt-2 text-sm text-[#a1a1aa]">在 quasar.config.ts 中声明即可使用，通过 <code class="mono text-xs text-[#19a7a7]">useQuasar()</code> 访问。</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(p, i) in plugins"
            :key="p.name"
            class="spotlight p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-semibold text-[#f4f4f5]">{{ p.name }}</span>
              <span class="mono text-[10px] text-[#e8b04e]">plugin</span>
            </div>
            <p class="text-xs text-[#a1a1aa]">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMPOSABLES ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ 03 / composables · {{ composables.length }} ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">Composables</h2>
          <p class="mt-2 text-sm text-[#a1a1aa]">Vue 3 Composition API 函数，用于组件逻辑复用。</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(c, i) in composables"
            :key="c.name"
            class="spotlight p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <code class="mono text-xs font-semibold text-[#19a7a7]">{{ c.name }}</code>
              <span class="mono text-[10px] text-[#71717a]">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <p class="text-xs text-[#a1a1aa]">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── UTILS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ 04 / utils · {{ utils.length }} ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">工具函数</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(u, i) in utils"
            :key="u.name"
            class="spotlight p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-sm font-semibold text-[#f4f4f5]">{{ u.name }}</span>
              <span class="mono text-[10px] text-[#71717a]">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <p class="text-xs text-[#a1a1aa]">{{ u.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── APP EXTENSIONS ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ 05 / app_extensions ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5]">App Extensions</h2>
          <p class="mt-2 text-sm text-[#a1a1aa]">社区构建的扩展包，通过 CLI 安装。</p>
        </div>
        <div class="terminal mb-6 max-w-[600px]">
          <div class="terminal-bar">
            <span class="terminal-dot" style="background:#ff5f56"></span>
            <span class="terminal-dot" style="background:#ffbd2e"></span>
            <span class="terminal-dot" style="background:#27c93f"></span>
            <span class="ml-2 mono text-[11px] text-[#71717a]">~ install extension</span>
          </div>
          <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> quasar ext add @quasar/qmarkdown

<span style="color:#27c93f">✓</span> Installed @quasar/qmarkdown
<span style="color:#27c93f">✓</span> Boot file registered
<span style="color:#27c93f">✓</span> Dependencies added</code></pre>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(ext, i) in appExtensions"
            :key="ext.name"
            class="spotlight p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <code class="mono text-xs text-[#e8b04e]">{{ ext.name }}</code>
              <span class="mono text-[10px] text-[#71717a]">{{ String(i+1).padStart(2,'0') }}</span>
            </div>
            <p class="text-xs text-[#a1a1aa] mt-1">{{ ext.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ICON GENIE ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-5">
            <p class="eyebrow-accent mb-3">[ 06 / icon_genie ]</p>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-4">Icon Genie CLI</h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed mb-6">
              专为 Quasar 设计的图标生成工具。一张源图，
              自动生成所有平台（PWA、Capacitor、Cordova、Electron）
              所需的全部图标和启动屏。
            </p>
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">~ icon-genie</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed"><code><span style="color:#71717a">$</span> <span style="color:#e8b04e">npm i</span> -g @quasar/icon-genie
<span style="color:#71717a">$</span> icon-genie generate \
    --icon <span style="color:#a5d6ff">./icon-1024.png</span> \
    --quality <span style="color:#e8b04e">5</span>

<span style="color:#27c93f">✓</span> Generated <span style="color:#e8b04e">48</span> icons
<span style="color:#27c93f">✓</span> Generated <span style="color:#e8b04e">12</span> splash screens</code></pre>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(f, i) in iconGenieFeatures"
                :key="f.title"
                class="p-5 rounded-lg bg-[#16181d] border border-[#262932] reveal"
                :style="`--i:${i}`"
                v-reveal="i"
              >
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-6 h-6 rounded-md bg-[#19a7a7]/10 flex items-center justify-center">
                    <span class="mono text-[10px] text-[#19a7a7] font-bold">{{ String(i+1).padStart(2,'0') }}</span>
                  </span>
                  <h3 class="text-sm font-semibold text-[#f4f4f5]">{{ f.title }}</h3>
                </div>
                <p class="text-xs text-[#a1a1aa] leading-relaxed">{{ f.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMMUNITY CTA ─── -->
    <section>
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-lg bg-[#16181d] border border-[#262932]">
          <div>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-2">加入社区</h2>
            <p class="text-sm text-[#a1a1aa]">Discord 数万开发者，GitHub 45K+ Star，论坛活跃讨论。</p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a
              href="https://github.com/quasarframework/quasar"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#262932] text-[#d4d4d8] font-medium text-sm hover:border-[#19a7a7] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://chat.quasar.dev"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#19a7a7] text-[#0d0e11] font-semibold text-sm hover:bg-[#2bc4c4] transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
