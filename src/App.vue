<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div :class="$style['wrapper']">
    <header :class="$style['header']">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.header {
  align-self: flex-start;
  position: fixed;
  top: 10px;
}
</style>
