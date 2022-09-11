<template>
  <div class="grid grid-cols-6 min-h-screen">
    <sidebar class="col-span-1 hidden md:flex" />
    <div class="col-span-6 md:col-span-5 flex flex-col">
      <app-header class="basis-[15vh]" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import AppHeader from "@/components/app-header/AppHeader.vue";
export default {
  components: { Sidebar, AppHeader },
  setup() {
  },
};
</script>

<style lang="scss">
@import "@/index.scss";
</style>
