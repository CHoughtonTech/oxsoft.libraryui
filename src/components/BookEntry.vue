<script setup lang="ts">
// import { useVuelidate } from '@vuelidate/core'
// import { required } from '@vuelidate/validators'
const book: Book = {
  id: '1',
  authorId: '2',
  yearPublished: 2004,
  genre: "test",
  isRead: false,
  title: 'A Book',
}
console.debug({ book });
</script>
<template>
  <div
    :class="$style['main-content']"
  >
    <form action="na" method="post">
      <input id="title" type="text">
      <label for="title">Book Title</label>
    </form>
  </div>
</template>
<style lang="scss" module>
.main-content{
  display: flex;
  flex-direction: row;
}
</style>
