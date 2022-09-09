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
        <users-table-row
          v-for="user in users.data"
          :key="user?.id"
		  :user="user"
        />
      </template>
      <div v-else>Loading</div>
    </tbody>
  </table>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
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
