<script setup lang="ts">
import { useRouter } from 'vue-router'
import { menu } from '@/constant/menu'

const router = useRouter()

console.log(router, 'router')

function handleCustomShader(item: typeof menu[0]) {
  router.push({
    name: item.routeName,
  })
}

function getBackgroundStyle(item: typeof menu[0]) {
  return new URL(`${item.img}`, import.meta.url).href
}
</script>
<template>
  <div v-for="item in menu" :key="item.name" class="mr-[20px]">
    <div class="wrapper bg-[#0b1218]">
      <div
        class="relative w-[200px] h-[160px] text-[#fff] rounded-[10px] overflow-x-hidden bordered-[10px] hover:scale-[1.05] transition-all duration-500 group glow-effect"
        @click="handleCustomShader(item)"
      >
        <h5
          class="
            absolute text h-[40px] w-[inherit] leading-[40px] bg-[rgba(37,37,42,0.6)] text-center text-[13px] bottom-[0] tracking-[2px]
            font-[cursive]
            group-hover:bg-[rgba(54,99,236,0.8)] group-hover:font-bold"
        >
          {{ item.name }}
        </h5>
        <img :src="getBackgroundStyle(item)" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-effect {
  position: relative;
  z-index: 1;
}

.glow-effect:hover {
  box-shadow: 0 0 15px rgba(54, 99, 236, 0.5),
              0 0 25px rgba(54, 99, 236, 0.3),
              0 0 35px rgba(54, 99, 236, 0.1);
}
</style>
