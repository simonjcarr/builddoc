<template>
  <div>
    Hello World
  </div>
</template>

<script setup>

function onClick() {
  console.log('Button clicked');
  Notify.create('Button clicked');
}
</script>

<style lang="scss" scoped>

</style>