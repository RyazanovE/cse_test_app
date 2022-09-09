<template>
  <div class="grid grid-cols-6 min-h-screen">
    <sidebar class="col-span-1" />
    <div class="col-span-5  flex flex-col ">
		<app-header class=" "/>
		<router-view class=""/>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/sidebar/Sidebar.vue";
import AppHeader from "@/components/app-header/AppHeader.vue"
export default {
  components: { Sidebar, AppHeader },
};
</script>

<style lang="scss">
@import "@/index.scss";
</style>
