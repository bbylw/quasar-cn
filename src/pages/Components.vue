<script setup lang="ts">
import { ref, computed } from 'vue'
import { componentCategories } from '../data'

const search = ref('')
const activeCategory = ref('全部')

const categories = ['全部', ...componentCategories.map(c => c.category)]

const filteredComponents = computed(() => {
  let items = componentCategories.flatMap(c => c.items)
  if (activeCategory.value !== '全部') {
    const cat = componentCategories.find(c => c.category === activeCategory.value)
    if (cat) items = cat.items
  }
  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    items = items.filter(item =>
      item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    )
  }
  return items
})

const totalCount = componentCategories.reduce((sum, c) => sum + c.items.length, 0)
</script>

<template>
  <div class="pt-20">
    <!-- ─── HERO ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <p class="eyebrow-accent mb-4 reveal" v-reveal>[ components · {{ totalCount }}+ ]</p>
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter text-[#f4f4f5] reveal" style="--i:1" v-reveal="1">
          Vue 组件
        </h1>
        <p class="mt-4 text-lg text-[#a1a1aa] max-w-[60ch] reveal" style="--i:2" v-reveal="2">
          {{ totalCount }}+ 高质量组件覆盖表单、导航、布局、数据展示等全部场景。
          支持 Material Design 和 iOS 风格，暗色模式和 RTL 布局。
        </p>
      </div>
    </section>

    <!-- ─── CODE EXAMPLE ─── -->
    <section class="border-b border-[#262932]">
      <div class="max-w-[1400px] mx-auto px-6 py-16">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-5">
            <p class="eyebrow-accent mb-3">[ example ]</p>
            <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-4">SFC 用法</h2>
            <p class="text-sm text-[#a1a1aa] leading-relaxed mb-4">
              Quasar 组件以 <code class="mono text-xs text-[#19a7a7]">q-</code> 前缀注册，
             在 Vue SFC 中直接使用。支持 scoped 样式和 Composition API。
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-[#19a7a7]"></span>
                <span class="text-sm text-[#a1a1aa]">全局自动注册</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-[#19a7a7]"></span>
                <span class="text-sm text-[#a1a1aa]">Tree-shaking 按需加载</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-[#19a7a7]"></span>
                <span class="text-sm text-[#a1a1aa]">完整 TypeScript 类型</span>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-7">
            <div class="terminal">
              <div class="terminal-bar">
                <span class="terminal-dot" style="background:#ff5f56"></span>
                <span class="terminal-dot" style="background:#ffbd2e"></span>
                <span class="terminal-dot" style="background:#27c93f"></span>
                <span class="ml-2 mono text-[11px] text-[#71717a]">src/pages/Index.vue</span>
              </div>
              <pre v-pre class="p-4 text-[12px] leading-relaxed overflow-x-auto"><code><span style="color:#71717a">&lt;template&gt;</span>
  <span style="color:#ff7b72">&lt;q-page</span> <span style="color:#79c0ff">class</span>=<span style="color:#a5d6ff">"flex flex-center"</span><span style="color:#ff7b72">&gt;</span>
    <span style="color:#ff7b72">&lt;q-btn</span>
      <span style="color:#79c0ff">label</span>=<span style="color:#a5d6ff">"点击我"</span>
      <span style="color:#79c0ff">color</span>=<span style="color:#a5d6ff">"primary"</span>
      <span style="color:#79c0ff">@click</span>=<span style="color:#a5d6ff">"onClick"</span>
    <span style="color:#ff7b72">/&gt;</span>
    <span style="color:#ff7b72">&lt;q-input</span>
      <span style="color:#79c0ff">v-model</span>=<span style="color:#a5d6ff">"text"</span>
      <span style="color:#79c0ff">label</span>=<span style="color:#a5d6ff">"输入文字"</span>
    <span style="color:#ff7b72">/&gt;</span>
  <span style="color:#ff7b72">&lt;/q-page&gt;</span>
<span style="color:#71717a">&lt;/template&gt;</span>

<span style="color:#71717a">&lt;script setup&gt;</span>
<span style="color:#ff7b72">import</span> { ref } <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">'vue'</span>
<span style="color:#ff7b72">import</span> { useQuasar } <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">'quasar'</span>

<span style="color:#ff7b72">const</span> $q = <span style="color:#d2a8ff">useQuasar</span>()
<span style="color:#ff7b72">const</span> text = <span style="color:#d2a8ff">ref</span>(<span style="color:#a5d6ff">''</span>)

<span style="color:#ff7b72">function</span> <span style="color:#d2a8ff">onClick</span>() {
  $q.<span style="color:#d2a8ff">notify</span>(<span style="color:#a5d6ff">'你输入了: '</span> + text.value)
}
<span style="color:#71717a">&lt;/script&gt;</span></code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SEARCH + FILTER GRID ─── -->
    <section>
      <div class="max-w-[1400px] mx-auto px-6 py-20">
        <div class="mb-8">
          <p class="eyebrow-accent mb-3">[ browse · {{ filteredComponents.length }}/{{ totalCount }} ]</p>
          <h2 class="text-2xl font-bold tracking-tight text-[#f4f4f5] mb-6">组件浏览</h2>

          <!-- Search bar -->
          <div class="relative mb-4">
            <input
              v-model="search"
              type="text"
              placeholder="搜索组件名称或描述..."
              class="w-full px-4 py-3 pl-10 rounded-md bg-[#16181d] border border-[#262932] text-sm text-[#d4d4d8] placeholder:text-[#71717a] focus:outline-none focus:border-[#19a7a7] transition-colors"
            />
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Category pills -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              class="px-3 py-1.5 text-xs font-medium rounded-md transition-colors"
              :class="activeCategory === cat
                ? 'bg-[#19a7a7] text-[#0d0e11]'
                : 'bg-[#16181d] border border-[#262932] text-[#a1a1aa] hover:border-[#19a7a7]/40'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Component grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div
            v-for="(comp, i) in filteredComponents"
            :key="comp.name"
            class="spotlight group p-4 rounded-md bg-[#16181d] border border-[#262932] hover:border-[#19a7a7]/40 transition-colors"
          >
            <div class="flex items-center justify-between mb-2">
              <code class="mono text-xs font-semibold text-[#19a7a7]">{{ comp.name }}</code>
              <span class="mono text-[10px] text-[#262932] group-hover:text-[#71717a] transition-colors">{{ String(i+1).padStart(3,'0') }}</span>
            </div>
            <p class="text-xs text-[#a1a1aa]">{{ comp.desc }}</p>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredComponents.length === 0" class="text-center py-20">
          <p class="text-[#71717a] text-sm">没有找到匹配的组件。试试其他关键词？</p>
        </div>
      </div>
    </section>
  </div>
</template>
