<script setup lang="ts">
import BaseBookshelf from '@/components/BaseBookshelf.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.debug('Loaded Home')
})
</script>
<template>
  <div :class="$style['main-content']">
    <BaseBookshelf />
    <BaseBookshelf />
    <BaseBookshelf />
    <BaseBookshelf />
    <BaseBookshelf />
    <BaseBookshelf />
  </div>
</template>
<style lang="scss" module>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $secondary-bg-color;
  padding: 20px;
  border-radius: $border-radius-default;
  width: 100vw - 30;
  gap: 15px;
}
</style>
