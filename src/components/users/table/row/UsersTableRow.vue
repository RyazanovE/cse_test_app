<template>
  <tr
  
    class="child:hover:bg-black/20 child:cursor-pointer child:transition-colors child:duration-100"
  >
    <td>{{ user?.login }}</td>
    <td><img :src="user?.avatar_url" alt="avatar" class="w-20 h-20" /></td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      login: String,
	  avatar_url: String
    },
  },
};
</script>

<style></style>
