<script setup lang="ts">
import BookEntry from '@/components/BookEntry.vue';
</script>
<template>
  <div :class="$style['main-content']">
    <span class="material-symbols-outlined">arrow_left</span>
    <span class="material-symbols-outlined"> book </span>
    <span class="material-symbols-outlined">arrow_right</span>
    <BookEntry />
  </div>
</template>
<style lang="scss" module>
.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $taupe;
  width: 100%;
  font-size: 48px;
  border-radius: $border-radius-default;
}
</style>
