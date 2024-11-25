<script setup lang="ts">
import BaseBook from './BaseBook.vue'
</script>
<template>
  <div :class="$style['main-content']">
    <div :class="$style['shelf-title']">Shelf Title</div>
    <BaseBook />
  </div>
</template>
<style lang="scss" module>
.main-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: $copper-brown;
  padding: 10px;
  border-radius: $border-radius-default;
  width: 100vw - 30;
}
.shelf-title {
  background-color: $copper-brown;
  border: 2px solid $light-beige;
  border-radius: $border-radius-default;
  // width: 150px;
  padding: 5px 15px;
  align-self: center;
  text-align: center;
  position: relative;
  margin-top: -20px;
  font-weight: $font-weight-bold;
  margin-bottom: 10px;
  z-index: 1;
}
</style>
