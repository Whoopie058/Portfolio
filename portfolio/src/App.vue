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

  <main class="px-4 pb-10 sm:px-6 lg:px-10">
    <!-- Windows container: border radius grey -->
    <div class="relative border-gray-500 border-20 rounded-lg p-20 bg-accent-500">

      <!-- top-windows-container: switched after clicking routes -->
      <div class="top-windows-container">
        <RouterView />
      </div>

      <!-- bottom-menu-bar-windows: menu look-a-like from windows -->
      <div class="bottom-menu-bar-windows">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        <div class="menu-item">Search field</div>
        <div class="menu-item">Opened programs</div>
      </div>

      <!-- Bottom Bar Windows (Open Apps) -->
      <div class="absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        
      </div>

      <div class="absolute bottom-0 left-10 flex h-10 w-40 items-center justify-center border-2 border-black bg-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        About Me
      </div>

      <div class="absolute bottom-0 left-50 flex h-10 w-40 items-center justify-center border-2 border-black bg-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        Skills
      </div>

      <div class="absolute bottom-0 left-90 flex h-10 w-40 items-center justify-center border-2 border-black bg-white text-black rounded-r-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
        Contact
      </div>
    </div>
  </main>

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