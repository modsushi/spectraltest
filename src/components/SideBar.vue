<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAssetStore } from "@/stores/asset.js";
import TreeNav from "./TreeNav.vue";
const store = useAssetStore();
const { selected, nodes } = storeToRefs(store);
const { changeSelection, getAssets } = store;

onMounted(() => {
  getAssets();
});
</script>

<template>
  <div class="sidebar">
    <TreeNav
      :nodes="nodes"
      :selected="selected"
      :changeSelection="changeSelection"
    />
  </div>
</template>

<style scoped>
.sidebar {
  margin: 0;
  padding: 15px 5px 0 0;
  color: #fff;
}
</style>
