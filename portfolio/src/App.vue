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
  <header class="w-full bg-transparent py-15">
    <nav class="mx-auto flex items-center justify-start space-x-4">
    </nav>
  </header>

  <main class="px-4 pb-10 sm:px-6 lg:px-35">
    <!-- Windows container: border radius grey -->
    <div class="relative border-gray-500 border-20 rounded-lg p-20 bg-brand-100">

      <!-- top-windows-container: switched after clicking routes -->
      <div class="top-windows-container">
        <RouterView />
      </div>

      <!-- bottom-menu-bar-windows: menu look-a-like from windows -->
      <div class="bottom-menu-bar-windows">
      </div>

<!-- Bottom Bar Windows (Open Apps) -->
       <!-- Home -->
      <RouterLink to="/" class="absolute bottom-0 left-0 flex h-10 w-12 items-center justify-start pl-1 border-2 border-black bg-[#E2C99E] text-black transition-colors duration-200 hover:bg-black hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="#414b9e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"/><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21"/></g></svg>
      </RouterLink>

      <!-- About Me -->
      <RouterLink to="/about" class="absolute bottom-0 left-10 flex h-10 w-40 items-center justify-start gap-2 pl-2 border-2 border-black bg-[#E2C99E] text-black transition-colors duration-200 hover:bg-black hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="#414b9e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 12a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"/><path d="M5 20.5a7 7 0 0 1 14 0"/><circle cx="12" cy="12" r="10"/></g></svg>
        About Me
      </RouterLink>

      <!-- Projects -->
      <RouterLink to="/projects" class="absolute bottom-0 left-50 flex h-10 w-40 items-center justify-start gap-2 pl-2 border-2 border-black bg-[#E2C99E] text-black transition-colors duration-200 hover:bg-black hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#414b9e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m13.05 19.14l-3.72.53l.53-3.67l9.55-9.54a2.25 2.25 0 0 1 3.18 3.18zM5.5.75h7s.75 0 .75.75V4s0 .75-.75.75h-7s-.75 0-.75-.75V1.5s0-.75.75-.75m7.75 2h2.5a1.5 1.5 0 0 1 1.5 1.5"/><path d="M17.25 18.75v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5V4.25a1.5 1.5 0 0 1 1.5-1.5h2.5m.5 6h7m-7 4.5h2.5"/></g></svg>
        Projects
      </RouterLink>

      <!-- Contact -->
      <RouterLink to="/contact" class="absolute bottom-0 left-90 flex h-10 w-40 items-center justify-start gap-2 pl-2 border-2 border-black bg-[#E2C99E] text-black transition-colors duration-200 hover:bg-black hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#414b9e" d="M18.4 20.75h-.23a16.7 16.7 0 0 1-7.27-2.58a16.6 16.6 0 0 1-5.06-5.05a16.7 16.7 0 0 1-2.58-7.29A2.3 2.3 0 0 1 3.8 4.1a2.32 2.32 0 0 1 1.6-.84H8a2.36 2.36 0 0 1 2.33 2a9.3 9.3 0 0 0 .53 2.09a2.37 2.37 0 0 1-.54 2.49l-.61.61a12 12 0 0 0 3.77 3.75l.61-.6a2.37 2.37 0 0 1 2.49-.54a9.6 9.6 0 0 0 2.09.53a2.35 2.35 0 0 1 2 2.38v2.4a2.36 2.36 0 0 1-2.35 2.36ZM8 4.75H5.61a.87.87 0 0 0-.61.31a.83.83 0 0 0-.2.62a15.2 15.2 0 0 0 2.31 6.62a15 15 0 0 0 4.59 4.59a15.34 15.34 0 0 0 6.63 2.36A.9.9 0 0 0 19 19a.88.88 0 0 0 .25-.61V16a.86.86 0 0 0-.74-.87a11.4 11.4 0 0 1-2.42-.6a.87.87 0 0 0-.91.19l-1 1a.76.76 0 0 1-.9.12a13.53 13.53 0 0 1-5.11-5.1a.74.74 0 0 1 .12-.9l1-1a.85.85 0 0 0 .19-.9a11.3 11.3 0 0 1-.6-2.42a.87.87 0 0 0-.88-.77"/></svg>
        Contact
      </RouterLink>

      <div class="absolute bottom-0 left-130 right-0 flex h-10 items-center justify-end border-y-2 border-r-2 border-black bg-gray-700 pr-3 text-sm text-white">
        <span class="font-mono">{{ currentTime }}</span>
      </div>


    </div>
  </main>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

body {
  background-color: #000;
  background-image: url('/Portfolio-Background2.png'), url('/Portfolio-Background2.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
}

#app {
  background: transparent;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}
</style>