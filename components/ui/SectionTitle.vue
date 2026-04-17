<script setup lang="ts">
defineProps({
  title: String,
});

const rootEl = ref(null);
defineExpose({ $el: rootEl });
</script>

<template>
  <h3 ref="rootEl" class="mb-3 text-[26px] font-bold md:mb-4 md:text-[38px]">
    {{ title }}
  </h3>
</template>
