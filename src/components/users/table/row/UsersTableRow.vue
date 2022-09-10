<template>
  <tr
    @click="rowClickHandler"
    class="child:hover:bg-black/20 child:cursor-pointer child:transition-colors child:duration-100"
  >
    <td>{{ user?.login }}</td>
    <td><img :src="user?.avatar_url" alt="avatar" class="w-20 h-20" /></td>
  </tr>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { USERS_ROUTE } from "../../../../mocks/routes/routes";
export default {
  props: {
    user: {
      id: Number,
      login: String,
      avatar_url: String,
    },
  },

  setup(props) {
    const router = useRouter();
    const { user } = toRefs(props);

    const rowClickHandler = () => user.value?.id && router.push(USERS_ROUTE.concat("/", user.value.id));

    return {
      rowClickHandler,
    };
  },
};
</script>

<style></style>
