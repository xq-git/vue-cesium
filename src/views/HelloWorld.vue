<template>
  <div id="cesium-container" ref="cesiumRef"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Map from "@/utils/mapMethod.js";
// import JsonData from "/json/xizang.json";
const cesiumRef = ref(null);
const _jsonData = ref(null);
onMounted(() => {
  fetch("./json/xizang.json")
    .then((res) => res.json())
    .then((response) => {
      _jsonData.value = response;

      const map = new Map(cesiumRef.value, {});
      console.log(map);
      map.init();
      // map.loadGeoJson()
      // map.flyTo(104, 30, 10000);
      map.flyTo(113.77106800000001, 31.060733000000024, 100000);
      // map.addLightSpotMaterial(104, 30, 1000);
      map.add3dTiles(
        "http://117.139.13.157:37880/demo/model/2UUKj3Ro/tileset.json"
      );
      console.log(map.viewer);
    
    });
});
</script>
<style>
#cesium-container {
  width: 100vw;
  height: 100vh;
}
</style>
