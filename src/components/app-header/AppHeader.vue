<template>
  <header class="shadow-header">
    <form @submit.prevent class="flex items-center justify-center h-full">
      <input type="text" placeholder="Введите логин пользователя" class="border-2 border-r-0 border-orange outline-none w-1/2 h-12 px-3"/>
      <orange-button class="h-12" type="sumbit">Найти</orange-button>
    </form>
  </header>
</template>

<script>
import OrangeButton from "../../shared/ui/buttons/orange/OrangeButton.vue";
export default {
  components: { OrangeButton },
};
</script>

<style></style>
