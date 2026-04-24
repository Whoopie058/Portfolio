<script setup>
</script>

<template>
  <main class="h-130 w-full overflow-y-auto rounded-md border-t-2 border-black bg-[#E2C99E] p-6 pr-4">
    <h1 class="text-3xl font-bold mb-4 text-[#111827]">About Me</h1>
    <p class="text-lg mb-6 text-[#111827]">A quick overview of my design profile and background</p>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="flex flex-col gap-4">
        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#111827]">General Info</h2>
          <p class="text-sm leading-relaxed text-[#111827]">
            I am Laura, a Multimedia Design student with a strong focus on visual communication, storytelling, and digital production.
            I enjoy developing concepts from sketch to final output across 2D and 3D design, with special interest in animation and motion.
          </p>
        </section>

        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#111827]">Interests</h2>
          <ul class="list-disc space-y-1 pl-5 text-sm text-[#111827]">
            <li>2D visual design and illustration</li>
            <li>3D design and spatial visual concepts</li>
            <li>Animation, motion graphics, and visual storytelling</li>
            <li>Digital production workflows for multimedia projects</li>
          </ul>
        </section>
      </div>

      <div class="flex flex-col gap-4">
        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#111827]">Skills</h2>
          <div class="flex flex-wrap gap-2 text-sm text-[#111827]">
            <span class="rounded border border-black px-2 py-1">Adobe Illustrator</span>
            <span class="rounded border border-black px-2 py-1">Photoshop</span>
            <span class="rounded border border-black px-2 py-1">After Effects</span>
            <span class="rounded border border-black px-2 py-1">Premiere Pro</span>
            <span class="rounded border border-black px-2 py-1">2D Animation</span>
            <span class="rounded border border-black px-2 py-1">3D Design Basics</span>
            <span class="rounded border border-black px-2 py-1">Digital Production</span>
            <span class="rounded border border-black px-2 py-1">Basic Front-End</span>
          </div>
        </section>

        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#111827]">Education</h2>
          <div class="space-y-3 text-sm text-[#111827]">
            <div class="rounded border border-black bg-white/80 p-3">
              <p class="font-semibold">Multimedia Design</p>
              <p>School Name - City</p>
              <p>Start Year - Present</p>
            </div>
            <div class="rounded border border-black bg-white/80 p-3">
              <p class="font-semibold">Previous Education</p>
              <p>School Name - City</p>
              <p>Start Year - End Year</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
