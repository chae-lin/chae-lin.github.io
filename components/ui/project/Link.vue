<script setup lang="ts">
defineProps<{
  url: string;
}>();

const isHttpUrl = (value: unknown): value is string => {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!/^https?:\/\//i.test(trimmed)) return false;

  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};
</script>

<template>
  <NuxtLink
    v-if="isHttpUrl(url)"
    :to="url"
    class="group mt-1 text-base font-medium text-[#f08b89] transition hover:opacity-70"
  >
    View Project<i class="transition group-hover:translate-x-[4px] inline-block">→</i>
  </NuxtLink>
  <span v-else class="mt-1 text-base font-medium text-[#f08b89] opacity-40">
    {{ url }}
  </span>
</template>
