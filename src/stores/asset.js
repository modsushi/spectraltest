import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Measurements from "@/assets/measurements.json";
import Assets from "@/assets/assets.json";
import { formatAsTree, searchInTree, getChildIds } from "../utils/helper.js";

export const useAssetStore = defineStore('asset', () => {
  const selected = ref(null);
  const nodes = ref([])

  function getAssets() {
    nodes.value = formatAsTree(Assets);
  }

  function changeSelection(assetId) {   
      selected.value = assetId;
  }

  function getData() {
    const assetId = selected.value;
    if (assetId === null) {
      return [];
    }
    const measurement = Measurements.find((val) => val.assetId === assetId) || null;
    if (!measurement) {
      // get sum of all children's data
      const el = searchInTree({
        id: 'root',
        children: nodes.value
      }, assetId);
      const data = getChildIds(el).map((child) => {
        // for each child try to get measurement
        return Measurements.find((val) => val.assetId === child) || null;
      }).filter((child) => {
        return child != null;
      });
      const timestamps = Object.keys(data[0].measurements);
      return data.reduce((prev, curr) => {
        // sum
        return prev.map((p) => {
          return [p[0], p[1] + curr.measurements[p[0]]];
        })
      }, timestamps.map((time) => {
        return [time, 0]
      })).map((out) => {
        // format date
        return [new Date(out[0]).getTime(), out[1]]
      })
    }
    else {
      let result =
        Object.keys(measurement.measurements).map((value) => {
          return [
            new Date(value).getTime(),
            measurement.measurements[value],
          ];
        })
      return result;
    }
  }

  return { selected, getAssets, changeSelection, getData, nodes }
})
