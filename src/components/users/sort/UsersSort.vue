<template>
  <div class="flex items-center gap-3 mr-auto" v-if="pages">
    <select
      v-model="sort"
      class="cursor-pointer outline-none border-orange border-2 px-2 rounded-md"
    >
      <option value="">Сортировка</option>
      <option value="repositories">По репозиториям</option>
    </select>
    <swap-svg
      @click="sortSwapClickHandler"
      v-if="sort"
      fill="orange"
      width="20"
      height="20"
      class="rotate-90 hover:opacity-50 duration-150 transition-opacity cursor-pointer"
    />
  </div>
  <div v-else class="h-[23px]"></div>
</template>

<script>
import { computed, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import SwapSvg from "../../../shared/ui/svg/swap/SwapSvg..vue";
export default {
  components: { SwapSvg },
  setup() {
    const store = useStore();
    const sort = ref("");
    const order = ref("asc");

    watch(([sort, order]), () => {
      store.commit("SET_USERS_PAGINATION", { sort, order });
      store.dispatch("getUsers");
    });

    const sortSwapClickHandler = () => order.value = (order.value === "asc") ? "desc" : "asc"
      

    return {
      sortSwapClickHandler,
      sort,
      pages: computed(() => store.state.pagination.pages),
    };
  },
};
</script>

<style></style>
