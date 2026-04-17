<script setup lang="ts">
import type { CareerItem } from "~/assets/data/career";

const props = defineProps<{
  activeIndex: number;
  careers: CareerItem[];
}>();

const formatYearMonth = (dateStr: string): string => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return `${year}.${month}`;
};

const formatRange = (start: CareerItem["start"], end: CareerItem["end"]) => {
  const startDate = formatYearMonth(start);
  const endDate = end ? formatYearMonth(end) : "Now";
  return `${startDate} ~ ${endDate}`;
};

const getDiffPeriod = (start: CareerItem["start"], end: CareerItem["end"]) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  // 1. 전체 개월 수 차이 계산
  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths += endDate.getMonth() - startDate.getMonth();

  // 2. 일(day) 단위를 체크해서 아직 한 달이 안 채워졌다면 1개월 뺌
  if (endDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  // 3. 년과 월로 분리
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // 4. 결과 리턴
  return `${years > 0 ? years + "y " : ""}${months}mo`;
};
</script>

<template>
  <div
    class="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
  >
    <div class="grid grid-cols-1">
      <div
        v-for="(career, index) in careers"
        :key="career.company"
        :class="[
          'flex flex-col col-start-1 row-start-1 transition-opacity',
          props.activeIndex === index ? 'opacity-100' : 'opacity-0',
        ]"
        :aria-hidden="props.activeIndex !== index ? 'true' : undefined"
      >
        <h4 class="text-lg font-semibold">
          {{ career.company }}
          <span class="ml-2 align-middle text-xs font-medium text-gray-500">
            {{ formatRange(career.start, career.end) }}
          </span>
        </h4>

        <p v-if="career.role" class="mt-1 text-sm text-gray-700">
          {{ career.role }}
        </p>

        <ul
          v-if="career.summary?.length"
          class="mt-3 mb-4 space-y-1 text-sm text-gray-700"
        >
          <li
            v-for="(summary, summaryIndex) in career.summary"
            :key="summaryIndex"
            class="flex gap-2"
          >
            <span
              class="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"
            />
            <span>{{ summary }}</span>
          </li>
        </ul>

        <div v-if="career.tech?.length" class="flex flex-wrap gap-2 mt-auto">
          <span
            v-for="tech in career.tech"
            :key="tech"
            class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {{ tech }}
          </span>
        </div>

        <div class="absolute right-5 text-right">
          <div class="text-sm text-gray-500">Duration</div>
          <div class="text-basic font-medium">
            {{ getDiffPeriod(career.start, career.end) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
