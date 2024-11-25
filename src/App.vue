<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div :class="$style['wrapper']">
    <header :class="$style['header']">
      <div :class="$style['menu']">
        <span class="material-symbols-outlined">menu_book</span>
      </div>
      <p :class="$style['library-title']">My Little Library</p>
    </header>

    <RouterView :class="$style['main-content']" />
    <footer>&copy; {{ new Date().getFullYear() }}</footer>
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
.main-content {
  margin-top: 75px;
}
.header {
  display: flex;
  position: fixed;
  flex-direction: row;
  background: $primary-bg-color;
  top: 0px;
  height: 70px;
  justify-content: flex-start;
  border-bottom: 3px solid $light-beige;
  width: 100vw;
  z-index: 2;
}
.menu {
  display: flex;
  flex: 0;
  padding: 10px;
  align-items: center;
}
.library-title {
  display: flex;
  justify-content: right;
  padding-right: 10px;
  align-items: center;
  font-size: 20px;
  font-weight: $font-weight-bold;
  flex: 1;
}
</style>
