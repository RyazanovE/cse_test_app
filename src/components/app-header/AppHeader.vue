<template>
  <header class="shadow-header p-base">
    <form @submit.prevent="searchSumbitHandler" class="flex items-center justify-center h-full">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Введите логин пользователя"
        class="border-2 border-r-0 border-orange outline-none w-1/2 h-12 px-3"
      />
      <orange-button class="h-12" type="submit">Найти</orange-button>
    </form>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import OrangeButton from "../../shared/ui/buttons/orange/OrangeButton.vue";
export default {
  components: { OrangeButton },

  setup() {
    const store = useStore();
    const searchQuery = ref("");

    const searchSumbitHandler = () => store.commit("SET_USERS_PAGINATION", { q: searchQuery.value });
    

    return {
      searchSumbitHandler,
      searchQuery,
    };
  },
};
</script>

<style></style>
