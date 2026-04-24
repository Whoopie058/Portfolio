<script setup>
import { onMounted, ref } from 'vue'
import { fetchProjects } from '../modules/projects'

const projectList = ref([])

onMounted(async () => {
  projectList.value = await fetchProjects()
})
</script>

<template>
  <main class="min-h-105 w-full rounded-md bg-[#E2C99E] p-6 border-t-2 border-black ">
    <h1 class="text-3xl font-bold mb-4 text-[#111827]">Projects</h1>
    <p class="text-lg mb-6 text-[#111827]">Here are some of the projects I've previously worked on</p>

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="project in projectList"
        :key="project.id"
        class="rounded-md border-2 border-black bg-white/70 p-4"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} preview`"
          class="mb-3 block h-auto w-full rounded border border-black bg-white"
        >

        <h2 class="mb-2 text-xl font-semibold text-[#111827]">{{ project.title }}</h2>
        <p class="mb-3 text-sm text-[#111827]">{{ project.description }}</p>

        <div class="mb-3 flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="`${project.id}-${tech}`"
            class="rounded border border-black px-2 py-1 text-xs text-[#111827]"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </main>

</template>