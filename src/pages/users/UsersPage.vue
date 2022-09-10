<template>
  <section data-testid="users-section" class="p-base flex flex-col gap-6 items-center">
    <users-sort />
    <users-pagination />
    <users-table />
  </section>
</template>

<script>
import UsersTable from "@/components/users/table/UsersTable.vue";
import UsersPagination from "@/components/users/pagination/UsersPagination.vue";
import UsersSort from "../../components/users/sort/UsersSort.vue";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";
import { computed } from "@vue/reactivity";

export default {
  components: { UsersTable, UsersPagination, UsersSort },
  setup(props, {}) {
    const store = useStore();
    const q = computed(() => store.state.pagination.q);
    const page = computed(() => store.state.pagination.page);
    const sort = computed(() => store.state.pagination.sort);
    const order = computed(() => store.state.pagination.order);

    watch([q, page, sort, order], () => store.dispatch("getUsers"));

    return {};
  },
};
</script>

<style></style>
