<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

const currentTime = ref('')
let timerId = null

const updateClock = () => {
  currentTime.value = new Date().toLocaleTimeString()
}

onMounted(() => {
  updateClock()
  timerId = setInterval(updateClock, 1000)
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>

<template>
  <header class="w-full border-b border-slate-200 bg-white px-4 py-3">
    <div class="mx-auto flex max-w-6xl items-center justify-between">
      <h1 class="text-lg font-semibold text-slate-800">My Portfolio</h1>
      <div class="rounded-md bg-slate-900 px-3 py-1 font-mono text-sm text-white">
        {{ currentTime }}
      </div>
    </div>
  </header>

  <RouterView />
</template>
