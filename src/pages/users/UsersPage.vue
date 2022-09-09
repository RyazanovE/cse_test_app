<template>
  <section class="p-base flex flex-col gap-6 items-center">
    <users-pagination />
    <users-table />
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { onUnmounted, watch } from "@vue/runtime-core";
import UsersTable from "@/components/users/table/UsersTable.vue";
import UsersPagination from "@/components/users/pagination/UsersPagination.vue";

export default {
  components: { VPagination, UsersTable, UsersPagination },
  setup(props, {}) {
    return {};
  },
};
</script>

<style></style>
