<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-03-28 16:31:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-06 16:51:03
 * @FilePath: \vue-cesium\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="cesium-container" ref="cesiumRef"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Map from "../utils/mapMethod.js";
// import JsonData from "/json/1.json";
const cesiumRef = ref(null);
const _jsonData = ref(null);
onMounted(() => {
  fetch("./json/1.json")
    .then((res) => res.json())
    .then((response) => {
      _jsonData.value = response;

      const map = new Map(cesiumRef.value, {});
      s;
      map.init();
      // map.flyTo(104, 30, 10000);
      map.flyTo(104, 20.5, 100000);
      // map.addLightSpotMaterial(104, 30, 1000);
      map.add3dTiles(
        "http://117.139.13.157:37880/demo/model/2UUKj3Ro/tileset.json"
      );
    });
});
</script>
<style>
#cesium-container {
  width: 100vw;
  height: 100vh;
}
</style>
