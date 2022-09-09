<template>
  <button class="button_orange"><slot /></button>
</template>

<script>
export default {};
</script>

<style scoped>
.button_orange {
  @apply bg-orange text-white text-base inline-flex items-center justify-center px-base hover:opacity-70 transition-opacity duration-150;
}
</style>
