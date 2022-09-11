<template>
  <div class="flex items-center gap-3 mr-auto" v-if="pages">
    <select
      @change="sortChangeHandler"
      v-model="sort"
      class="cursor-pointer outline-none border-orange border-2 px-2 rounded-md"
    >
      <option value="">Сортировка</option>
      <option value="repositories">По репозиториям</option>
    </select>
    <swap-svg
      @click="orderSwapClickHandler"
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
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import SwapSvg from "../../../shared/ui/svg/swap/SwapSvg..vue";
export default {
  components: { SwapSvg },
  setup() {
    const store = useStore();

    const sort = computed(() => store.state.pagination.sort);
    const order = computed(() => store.state.pagination.order);
    const pages = computed(() => store.state.pagination.pages);

    const sortChangeHandler = (e) => store.commit("SET_USERS_PAGINATION", { sort: e.target.value })

    const orderSwapClickHandler = () => {
      const newOrder = order.value === "asc" ? "desc" : "asc"
      store.commit("SET_USERS_PAGINATION", {  order: newOrder })
    }


    return {
      sortChangeHandler,
      orderSwapClickHandler,
      sort,
      pages,
    };
  },
};
</script>

<style></style>
