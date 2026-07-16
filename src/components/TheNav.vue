<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { to: '/', label: '首页' },
  { to: '/introduction', label: '介绍' },
  { to: '/quick-start', label: '快速开始' },
  { to: '/components', label: '组件' },
  { to: '/cli', label: 'CLI' },
  { to: '/ecosystem', label: '生态' },
]

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0d0e11]/85 backdrop-blur-xl border-b border-[#262932] py-3' : 'py-5'"
  >
    <div class="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2.5 group" @click="closeMobile">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" class="transition-transform group-hover:scale-110">
          <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="#19a7a7" stroke-width="1.5"/>
          <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" fill="#19a7a7" opacity="0.7"/>
        </svg>
        <span class="font-display text-base font-bold tracking-tight text-[#f4f4f5]">
          Quasar
        </span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-0.5">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-3.5 py-2 text-sm font-medium rounded-md transition-colors"
          :class="$route.path === link.to
            ? 'text-[#19a7a7]'
            : 'text-[#a1a1aa] hover:text-[#f4f4f5]'"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="hidden md:flex items-center gap-2">
        <a
          href="https://github.com/quasarframework/quasar"
          target="_blank"
          rel="noopener"
          class="px-3.5 py-2 text-sm font-medium rounded-md text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://quasar.dev"
          target="_blank"
          rel="noopener"
          class="px-3.5 py-2 text-sm font-semibold rounded-md bg-[#e8b04e] text-[#0d0e11] hover:bg-[#f0c068] transition-colors"
        >
          官网
        </a>
      </div>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="菜单"
      >
        <span class="block w-5 h-0.5 bg-[#f4f4f5] transition-transform" :class="{ 'rotate-45 translate-y-2': mobileOpen }"></span>
        <span class="block w-5 h-0.5 bg-[#f4f4f5] transition-opacity" :class="{ 'opacity-0': mobileOpen }"></span>
        <span class="block w-5 h-0.5 bg-[#f4f4f5] transition-transform" :class="{ '-rotate-45 -translate-y-2': mobileOpen }"></span>
      </button>
    </div>

    <Transition name="mobile">
      <div v-if="mobileOpen" class="md:hidden px-6 py-4 bg-[#0d0e11]/95 backdrop-blur-xl border-t border-[#262932]">
        <nav class="flex flex-col gap-0.5">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="px-3.5 py-2.5 text-sm font-medium rounded-md transition-colors"
            :class="$route.path === link.to
              ? 'text-[#19a7a7]'
              : 'text-[#a1a1aa] hover:text-[#f4f4f5]'"
            @click="closeMobile"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-enter-active,
.mobile-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
