<template>
  <section class="p-base flex flex-col gap-6 items-center">
    <users-sort/>
    <users-pagination />
    <users-table />
  </section>
</template>

<script>
import UsersTable from "@/components/users/table/UsersTable.vue";
import UsersPagination from "@/components/users/pagination/UsersPagination.vue";
import UsersSort from "../../components/users/sort/UsersSort.vue";

export default {
  components: { UsersTable, UsersPagination, UsersSort },
  setup(props, {}) {
    return {};
  },
};
</script>

<style></style>
