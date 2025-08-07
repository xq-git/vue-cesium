<script setup lang="ts">
import Map from '@/utils/mapMethod'
import { ref, onMounted } from 'vue'
const cesiumDom = ref(null)

onMounted(() => {
  const map = new Map(cesiumDom.value, {})
  map.init()
  map.rotate()
})
</script>

<template>
  <div class="w-[full] h-[full]" ref="cesiumDom"></div>
</template>

