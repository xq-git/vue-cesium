<script setup lang='ts'>
import { useInitMap } from '@/hooks/useInitMap'
const { viewer } = useInitMap('bimmap')
console.log(viewer, 'window.viewer.value')
window.viewer = viewer
console.log(window.viewer, 'window.viewer.value')

   //重点，必须设置该配置
   window.viewer.value.scene.globe.depthTestAgainstTerrain = true;
        window.viewer.value.clock.multiplier = 20000;
        window.viewer.value.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        window.viewer.value.scene.postUpdate.addEventListener(start);
//         //转一圈半自动停止
//         var t = setTimeout(stop, 5500000);

//       function start() {
//         if (window.viewer.value.scene.mode !== Cesium.SceneMode.SCENE3D) {
//           return ture;
//         }
//         let icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(window.viewer.value.clock.currentTime);
//         if (icrfToFixed) {
//           let camera = window.viewer.value.camera;
//           let offset = Cesium.Cartesian3.clone(camera.position);
//           let transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed);
//           //偏移相机
//           camera.lookAtTransform(transform, offset);
//         }
//       }

//       function stop() {
//         window.viewer.value.clock.multiplier = 1;
//         window.viewer.value.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
//         window.viewer.value.scene.postUpdate.removeEventListener(start);
//         var obj = {
//           lng: 118.1050887298584,
//           lat: 24.449001083374023,
//           eyeHeight: 20000,
//           pitch: -90,
//           heading: 0.0,
//           time: 8,
//         };
//       }
</script>
<template>
<div id="bimmap" ref="bimmap" style="width: 100%; height: 100%">
</div>
</template>
<style lang='less' scoped>
</style>