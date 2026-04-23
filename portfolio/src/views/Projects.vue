<template>
  <!-- Main content: alt indhold: lav i de forskellige /views/filer.vue -->

  <main class="px-4 pb-10 sm:px-6 lg:px-10">
    <!-- Windows container: border radius grey -->
    <div class="relative border-gray-500 border-20 rounded-lg p-20 bg-accent-500">

      <!-- top-windows-container: switched after clicking routes -->
      <div class="top-windows-container">
        <RouterView />
      </div>
    </div>
  </main>

</template>