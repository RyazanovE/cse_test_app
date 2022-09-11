<template>
  <header class="shadow-header flex flex-col items-center justify-center">
    <links-list class="md:hidden self-start" />
    <form
      v-if="path === USERS_ROUTE"
      @submit.prevent="searchSumbitHandler"
      class="flex items-center justify-center my-base h-full w-full px-base"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Введите логин пользователя"
        class="border-2 border-r-0 border-orange outline-none md:w-1/2 h-12 px-3 w-full"
      />
      <orange-button class="h-12" type="submit">Найти</orange-button>
    </form>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import OrangeButton from "../../shared/ui/buttons/orange/OrangeButton.vue";
import LinksList from "../sidebar/links-list/LinksList.vue";
import { useRoute } from "vue-router";
import { USERS_ROUTE } from "../../mocks/routes/routes";
import { computed } from "@vue/reactivity";
export default {
  components: { OrangeButton, LinksList },

  setup() {
    const store = useStore();
    const route = useRoute();
    const searchQuery = ref("");

    const searchSumbitHandler = () =>
      store.commit("SET_USERS_PAGINATION", { q: searchQuery.value });

    return {
      searchSumbitHandler,
      searchQuery,
      path: computed(() => route.path),
      USERS_ROUTE,
    };
  },
};
</script>

<style></style>
