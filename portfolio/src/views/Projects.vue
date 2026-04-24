<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchProjects } from '../modules/projects'

const projectList = ref([])
const rightColumnIds = [2, 4, 5]

const leftColumnProjects = computed(() =>
  projectList.value.filter((project) => !rightColumnIds.includes(project.id)),
)

const rightColumnProjects = computed(() =>
  rightColumnIds
    .map((id) => projectList.value.find((project) => project.id === id))
    .filter(Boolean),
)

onMounted(async () => {
  projectList.value = await fetchProjects()
})
</script>

<template>
  <main class="h-full w-full overflow-y-auto rounded-md border-t-2 border-black bg-[#E2C99E] p-4 md:p-6 md:pr-4">
    <h1 class="text-3xl font-bold mb-4 text-[#852736]">Projects</h1>
    <p class="text-lg mb-6 text-[#111827]">Here are some of the projects I've previously worked on</p>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="flex flex-col gap-4">
        <article
          v-for="project in leftColumnProjects"
          :key="project.id"
          class="rounded-md border-2 border-black bg-white/70 p-4 h-fit"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="`${project.title} preview`"
            class="mb-3 block h-auto w-full rounded border border-black bg-white"
          >

          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">{{ project.title }}</h2>
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

          <a
            v-if="project.link && project.link !== '#'"
            :href="project.link"
            class="inline-block rounded border border-black px-3 py-1 text-sm text-[#111827] transition-colors duration-150 hover:bg-black hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Open Project
          </a>
        </article>
      </div>

      <div class="flex flex-col gap-4">
        <article
          v-for="project in rightColumnProjects"
          :key="project.id"
          class="rounded-md border-2 border-black bg-white/70 p-4 h-fit"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="`${project.title} preview`"
            class="mb-3 block h-auto w-full rounded border border-black bg-white"
          >

          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">{{ project.title }}</h2>
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

          <a
            v-if="project.link && project.link !== '#'"
            :href="project.link"
            class="inline-block rounded border border-black px-3 py-1 text-sm text-[#111827] transition-colors duration-150 hover:bg-black hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Open Project
          </a>
        </article>
      </div>
    </div>
  </main>

</template>