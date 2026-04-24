<script setup>
</script>

<template>
  <main class="h-full w-full overflow-y-auto rounded-md border-t-2 border-black bg-[#E2C99E] p-4 md:p-6 md:pr-4">
    <h1 class="text-3xl font-bold mb-4 text-[#852736]">About Me</h1>
    <p class="text-lg mb-6 text-[#111827]">A quick overview of my design profile and background</p>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="flex flex-col gap-4">
        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">General Info</h2>
          <p class="text-sm leading-relaxed text-[#111827]">
            I am Laura, a Multimedia Design student with a strong focus on visual communication, storytelling, and digital production.
            I enjoy developing concepts from sketch to final output across 2D and 3D design, with special interest in animation and motion.
          </p>
        </section>

        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">Interests</h2>
          <ul class="list-disc space-y-1 pl-5 text-sm text-[#111827]">
            <li>2D visual design and illustration</li>
            <li>3D design and spatial visual concepts</li>
            <li>Animation, motion graphics, and visual storytelling</li>
            <li>Digital production workflows for multimedia projects</li>
          </ul>
        </section>

        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">CV</h2>
          <p class="text-sm leading-relaxed text-[#111827]">
            My CV with updated project work, competencies, and experience.
          </p>
          <div class="mt-3 flex flex-wrap gap-2 text-sm">
            <a href="/Projects/CV.pdf" target="_blank" rel="noopener noreferrer" class="rounded border border-black px-3 py-1 text-[#111827] transition-colors duration-150 hover:bg-black hover:text-white">
              View CV
            </a>
            <a href="/Projects/CV.pdf" download class="rounded border border-black px-3 py-1 text-[#111827] transition-colors duration-150 hover:bg-black hover:text-white">
              Download PDF
            </a>
          </div>
        </section>
      </div>

      <div class="flex flex-col gap-4">
        <section class="rounded-md border-2 border-black bg-white/70 p-4 h-fit">
          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">Skills</h2>
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
          <h2 class="mb-2 text-xl font-semibold text-[#414b9e]">Education</h2>
          <div class="space-y-3 text-sm text-[#111827]">
            <div class="rounded border border-black bg-white/80 p-3">
              <p class="font-semibold">Multimedia Design</p>
              <p>SEA - Esbjerg</p>
              <p>Start Year - 2025</p>
            </div>
            <div class="rounded border border-black bg-white/80 p-3">
              <p class="font-semibold">Previous Education - STX</p>
              <p>STUK - Toftlund</p>
              <p>End Year - 2024</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  </main>
</template>
