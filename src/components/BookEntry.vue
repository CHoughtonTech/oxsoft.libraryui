<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

</script>
<template>
  <div
    :class="$style['main-content']"
  >
    <form action="na" method="post">
      <input type="text">
    </form>
  </div>
</template>
<style lang="scss" module>
.main-content{
  display: flex;
  flex-direction: row;
}
</style>
