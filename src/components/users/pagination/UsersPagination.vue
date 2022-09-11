<template>
  <v-pagination
    v-if="pages"
    v-model="page"
    :pages="pages < 100 ? pages : 100"
    :range-size="1"
    @update:modelValue="paginationHandler"
    active-color="#DCEDFF"
  />
  <div v-else class="h-[22px]"></div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: { VPagination },
  setup() {
    const store = useStore();
    
    const pages = computed(() => store.state.pagination.pages)
    const page = computed(() => store.state.pagination.page);

    const paginationHandler = (page) => store.commit("SET_USERS_PAGINATION", { page });

    return {
      paginationHandler,
      page,
      pages
    };
  },
};
</script>

<style></style>
