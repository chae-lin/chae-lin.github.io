<script setup lang="ts">
defineProps<{
  url: string;
}>();

const isHttpUrl = (value: unknown): value is string => {
  if (typeof value !== "string") return false;
  const s = value.trim();
  if (!/^https?:\/\//i.test(s)) return false;

  try {
    const url = new URL(s);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
</script>

<template>
  <NuxtLink v-if="isHttpUrl(url)" :to="url" class="project-card__link">
    View Project<i>→</i>
  </NuxtLink>
  <span v-else class="project-card__link">{{ url }}</span>
</template>

<style scoped>
.project-card__link {
  @apply mt-1 text-base font-medium text-[#f08b89];
}

a.project-card__link {
  @apply transition hover:opacity-70;
}

span.project-card__link {
  @apply opacity-[0.4];
}

.project-card__link i {
  @apply transition;
}

.project-card__link:hover i {
  @apply inline-block translate-x-[4px];
}
</style>
