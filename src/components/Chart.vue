<script setup>
import { reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { useAssetStore } from "@/stores/asset.js";
const store = useAssetStore();
const { selected } = storeToRefs(store);
const { getData } = store;
const series = computed(() => {
  if (selected === null) return [];
  const data = getData(selected);
  return [
    {
      name: `Asset ${selected.value}`,
      data: data,
    },
  ];
});

const options = computed(() => {
  return {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: `Asset ${selected.value}`,
      align: "left",
      colors: ["#ffffff"],
    },
    grid: {
      row: {
        colors: ["#222222"],
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "datetime",
    },
  };
});
</script>

<template>
  <div class="chart">
    <h1 v-if="selected === null">Please select an asset from the menu</h1>
    <apexchart
      v-if="selected != null"
      type="line"
      height="500"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #fff;
}
</style>
