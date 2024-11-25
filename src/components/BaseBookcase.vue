<script setup lang="ts">
import BaseBookshelf from './BaseBookshelf.vue'
</script>
<template>
  <div :class="$style['main-content']">
    <h1>Name</h1>
    <BaseBookshelf />
  </div>
</template>
<style lang="scss" module>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $secondary-bg-color;
  padding: 10px;
  border-radius: $border-radius-default;
  width: 100vw - 30;
}
</style>
