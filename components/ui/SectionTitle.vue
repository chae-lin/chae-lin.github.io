<script setup lang="ts">
defineProps({
  title: String,
});

const rootEl = ref<HTMLElement | null>(null);
defineExpose({ $el: rootEl });
</script>

<template>
  <h2 ref="rootEl" class="mb-3 text-[26px] font-bold md:mb-4 md:text-[38px]">
    {{ title }}
  </h2>
</template>
