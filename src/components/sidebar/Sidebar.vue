<template>
  <nav class="py-base bg-brown flex flex-col">
    <img src="@/assets/img/logo.jpg" alt="logo" class="w-[140px] mx-auto" />
    <ul>
      <router-link v-for="({ path, label }, i) in navLinks" :key="i" :to="path" class="link">
        {{ label }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { USERS_ROUTE } from "../../mocks/routes/routes";

export default {
  setup(props, ctx) {
    const navLinks = [{ label: "Пользователи", path: USERS_ROUTE }];

    return {
      navLinks,
    };
  },
};
</script>

<style scoped lang="scss">
.link {
  @apply text-white text-xl  p-3 my-6  block relative before:transition-all before:left-0 z-0 before:duration-300 hover:before:w-full;

  &::before {
    content: "";
    @apply left-0 top-0 right-0 bottom-0 my-auto -z-10 absolute bg-orange  w-0;
  }
}
.router-link-active {
  @apply bg-white/10;
}
</style>
