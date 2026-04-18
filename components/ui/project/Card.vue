<script setup lang="ts">
import type { ProjectItem } from "~/assets/data/projects";

defineProps<{
  project: ProjectItem;
}>();
</script>

<template>
  <div class="project-card">
    <div class="project-card__inner">
      <div class="project-card__face front" aria-hidden="true">
        <div v-if="project.thumbnail" class="project-card__thumbnail">
          <span class="thumbnail-img">
            <img :src="project.thumbnail" :alt="project.title" loading="lazy" />
          </span>
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">{{ project.description }}</p>
          <ul class="project-card__stack">
            <li v-for="tech in project.stack" :key="tech" class="project-card__tag">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>

      <div class="project-card__face back">
        <div v-if="project.thumbnail" class="project-card__thumbnail" aria-hidden="true">
          <span class="thumbnail-img">
            <img :src="project.thumbnail" alt="" />
          </span>
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">{{ project.description }}</p>

          <dl class="project-card__detail">
            <dt>Role</dt>
            <dd>{{ project.detail.role }}</dd>
            <dt>What I Did</dt>
            <dd>
              <ul>
                <li v-for="(item, index) in project.detail.highlights" :key="index">
                  {{ item }}
                </li>
              </ul>
            </dd>
            <template v-if="project.detail?.duration">
              <dt>Duration</dt>
              <dd>{{ project.detail.duration }}</dd>
            </template>
          </dl>

          <UiProjectLink :url="project.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  perspective: 1000px;
  min-height: 58vh;
}

.project-card:hover .project-card__inner,
.project-card:focus-within .project-card__inner {
  transform: rotateY(180deg);
}

.project-card__inner {
  display: grid;
  height: 100%;
  transition: transform 0.3s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.project-card__face {
  overflow: hidden;
  grid-area: 1 / 1 / 1 / 1;
  backface-visibility: hidden;
  border-radius: 20px;
  border: 2px solid #91b0a6;
  background-color: var(--color-surface-default);
}

.project-card__face.back {
  transform: rotateY(180deg);
}

.project-card__face.back .project-card__thumbnail {
  @apply absolute left-[50%] translate-x-[-50%] h-full blur
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full;
  /* thumbnail overlay uses surface color with opacity */
  --tw-bg-opacity: 0.7;
  background-color: transparent;
}
.project-card__face.back .project-card__thumbnail::after {
  background-color: color-mix(in srgb, var(--color-surface-default) 70%, transparent);
}

.project-card__thumbnail {
  @apply aspect-video overflow-hidden;
}

.project-card__thumbnail img {
  @apply h-full w-full object-cover object-center;
}

.project-card__content {
  @apply relative p-5;
}

.project-card__title {
  @apply mb-1 text-xl font-semibold text-fg-default;
}

.project-card__description {
  @apply text-sm leading-relaxed text-fg-subtle;
}

.project-card__stack {
  @apply my-4 flex flex-wrap gap-2;
}

.project-card__tag {
  @apply rounded-full bg-[#91b0a6] px-3 py-1 text-xs text-white;
}

.project-card__detail {
  @apply mt-1.5;
}

.project-card__detail dd {
  @apply text-fg-subtle text-sm;
}

.project-card__detail li {
  @apply relative pl-2
  before:content-[''] before:absolute before:top-[7px] before:left-0 before:w-1 before:h-1 before:rounded-full before:bg-fg-subtle;
}
</style>
