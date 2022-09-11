<template>
  <table class="table-fixed w-full">
    <thead>
      <tr
        class="child:text-start child:py-3 bg-orange last:child:rounded-r-md first:child:rounded-l-md text-white child:pl-3"
      >
        <th>Логин</th>
        <th>Аватар</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!users.isLoading">
        <users-table-row
          data-testid="table-row"
          data-test="table-row"
          v-for="user in users.data"
          :key="user?.id"
          :user="user"
        />
      </template>
      <tr data-test="error-row" data-testid="error-row" v-else-if="users.isError">
        <td colspan="2">Ошибка загрузки пользователей</td>
      </tr>
      <div data-test="loading-row" v-else>Loading</div>
      <tr data-test="no-users-row" v-if="!users.isLoading && users.data.length === 0">
        <td colspan="2">Нет пользователей</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import UsersTableRow from "./row/UsersTableRow.vue";

export default {
  setup() {
    const store = useStore();

    const users = computed(() => store.state.users);

    return {
      users,
    };
  },
  components: { UsersTableRow },
};
</script>

<style></style>
