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
import { computed, ref } from "@vue/reactivity";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: { VPagination },
  setup(props, {}) {
    const store = useStore();
    const page = ref(1);

    const paginationHandler = (e) => store.commit("SET_USERS_PAGINATION", { page: e });

    return {
      paginationHandler,
      page,
      pages: computed(() => store.state.pagination.pages),
    };
  },
};
</script>

<style></style>
