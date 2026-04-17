<script setup lang="ts">
const error = useError();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
    <p class="text-7xl font-bold text-[#f08b89]">
      {{ error?.statusCode ?? 404 }}
    </p>
    <p class="text-xl font-semibold text-gray-700">페이지를 찾을 수 없어요.</p>
    <p class="text-sm text-gray-400">
      주소가 잘못되었거나 삭제된 페이지예요.
    </p>
    <button
      type="button"
      class="mt-2 rounded-full bg-[#f08b89] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-80"
      @click="handleError"
    >
      홈으로 돌아가기
    </button>
  </div>
</template>
