<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="terminal">
    <div class="terminal-bar">
      <span class="terminal-dot" style="background: #ff5f56"></span>
      <span class="terminal-dot" style="background: #ffbd2e"></span>
      <span class="terminal-dot" style="background: #27c93f"></span>
      <span v-if="title" class="ml-2 text-[11px] text-[#71717a] mono">{{ title }}</span>
    </div>
    <div class="p-4 overflow-x-auto">
      <slot />
    </div>
  </div>
</template>
