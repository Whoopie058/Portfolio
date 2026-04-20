<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

/* Clock */
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
  <!-- Kun header: nav + ur -->
  <header class="w-full bg-transparent py-3">
    <nav class="mx-auto flex items-center justify-start space-x-4">
      <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
      <RouterLink to="/about" class="text-white hover:text-gray-300">About</RouterLink
    >
    </nav>

    <div class="mx-auto flex items-center justify-end">
      
      <div class="rounded-md bg-transparent px-3 py-1 font-mono text-sm text-white">
        {{ currentTime }}
      </div>
    </div>
  </header>

  <!-- Main content: alt indhold: lav i de forskellige /views/filer.vue -->

  <!-- Windows container: border radius grey -->
  <div class="border-grey-500 border-20 rounded-lg p-20 m-10">

      <!-- top-windows-container: switched after clicking routes -->
    <div class="top-windows-container">
      <RouterView />
    </div>

    <!-- bottom-menu-bar-windows: menu look-a-like from windows -->
     <div class="bottom-menu-bar-windows">
      <div class="menu-item">Windows ICON</div>
      <div class="menu-item">Search field</div>
      <div class="menu-item">Opened programs</div>
     </div>
  </div>

</template>

<style>
#app {
   background: url("https://picsum.photos/1200/1300") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
</style>