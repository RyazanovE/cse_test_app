<template>
  <table class="table-fixed w-full">
    <thead>
      <tr
        class="child:text-start child:py-3 bg-orange last:child:rounded-r-md first:child:rounded-l-md text-white"
      >
        <th>Логин</th>
        <th>score</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!users.isLoading">
        <users-table-row v-for="user in users.data" :key="user?.id" :user="user" />
      </template>
      <tr v-else-if="users.isError">
        <td colspan="2">Ошибка загрузки пользователей</td>
      </tr>
      <div v-else>Loading</div>
      <tr v-if="!users.isLoading && users.data.length === 0">
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
  setup(props) {
    const store = useStore();
    return {
      users: computed(() => store.state.users),
    };
  },
  components: { UsersTableRow },
};
</script>

<style></style>
