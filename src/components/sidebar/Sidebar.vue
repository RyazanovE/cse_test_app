<template>
  <nav class="py-base bg-brown flex flex-col">
    <img src="@/assets/img/logo.jpg" alt="logo" class="w-[140px] mx-auto" />
    <links-list />
  </nav>
</template>

<script>
import LinksList from "./links-list/LinksList.vue";


export default {

  components: { LinksList },
};
</script>

<style scoped lang="scss"></style>
