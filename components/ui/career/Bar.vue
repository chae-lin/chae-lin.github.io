<script setup lang="ts">
import type { CareerItem } from "~/assets/data/career";

const props = defineProps<{
  activeIndex: number;
  careers: CareerItem[];
}>();

const emit = defineEmits<{
  (e: "update:activeIndex", value: number): void;
}>();

const BASE_COLOR = "145, 176, 166";

const getTotalMonths = (start: string, end?: string | null): number => {
  const startDate = new Date(start);
  // end가 없으면 오늘 날짜 기준
  const endDate = end ? new Date(end) : new Date();

  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();

  // 시작월과 종료월을 모두 포함하기 위해 +1
  return Math.max(0, yearsDiff * 12 + monthsDiff + 1);
};

const getCareerPercentage = (index: number): number => {
  if (index < 0 || index >= props.careers.length) return 0;

  // 1. 모든 경력의 개월 수 합계 (공백 제외)
  const allDurations = props.careers.map((item) =>
    getTotalMonths(item.start, item.end),
  );
  const totalSum = allDurations.reduce((acc, cur) => acc + cur, 0);

  if (totalSum === 0) return 0;

  // 2. 해당 인덱스의 비중 계산
  const targetDuration = allDurations[index] ?? 0;
  return Math.round((targetDuration / totalSum) * 1000) / 10;
};

// 소수점 첫째 자리까지 반환
const getSegmentStyle = (index: number) => {
  const opacity = Math.min(0.3 + index * 0.15, 1);
  return {
    width: `${getCareerPercentage(index)}%`,
    backgroundColor: `rgba(${BASE_COLOR}, ${opacity})`,
  };
};

const setActive = (index: number) => emit("update:activeIndex", index);
</script>

<template>
  <div class="overflow-hidden flex mb-4 rounded-2xl">
    <button
      v-for="(item, index) in careers"
      :key="item.company + index"
      type="button"
      :aria-pressed="index === activeIndex"
      class="group relative flex flex-col justify-center items-center py-3 px-2 grayscale transition hover:grayscale-0"
      :class="{ 'grayscale-0': index === activeIndex }"
      :style="getSegmentStyle(index)"
      @click="setActive(index)"
    >
      <span
        class="text-base font-medium text-gray-700 opacity-60 transition group-hover:opacity-100"
        :class="{ 'opacity-100': index === activeIndex }"
      >
        {{ item.company }}
      </span>
    </button>
  </div>
</template>
