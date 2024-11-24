<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.debug('Loaded Home')
})
</script>
<template>
  <div>
    <h1>My Library</h1>
    <p>Here's some primary text</p>
    <h3>To Do:</h3>
    <ul>
      <li>Build Book Entry</li>
      <li>Build Bookcase Entry</li>
      <li>Build Menu</li>
      <li>Build Account</li>
      <li>Build Book Lookup</li>
      <li>Build social hub</li>
      <li>Build Bookbag</li>
      <li>Build TBR</li>
    </ul>
    <h3>Focus Points</h3>
    <ul>
      <li>Mobile First Development</li>
      <li>Basic Color Scheme</li>
      <li>SCSS Variables</li>
      <li>Vuelidate</li>
      <li>Google Fonts</li>
      <li>Google Icons</li>
      <li>Unit Testing (Husky Hooks)</li>
    </ul>
    <h3>Color Scheme Hex Codes</h3>
    <ul>
      <li>#383931</li>
      <li>#a0552b</li>
      <li>#646756</li>
      <li>#907e68</li>
      <li>#ccbcad</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quibusdam consequatur amet
      voluptates sunt? Totam possimus enim amet, eaque laborum reprehenderit earum quod ex
      dignissimos, libero nulla quasi autem. Facere.
    </p>
  </div>
</template>
<style lang="scss" module>
ul {
  background-color: $taupe;
  font-weight: $font-weight-bold;
}
</style>
