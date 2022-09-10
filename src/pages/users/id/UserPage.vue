<template>
  <section class="p-6">
    <div class="flex items-center justify-between border-orange border-2 p-6 rounded-md">
      <template v-if="!isLoading">
        <ul class="flex flex-col gap-6">
          <li class="font-semibold flex gap-3 items-center">
            Логин: <span>{{ user?.login }}</span>
          </li>
          <li class="font-semibold flex gap-3 items-center">
            Публичных репозиториев: <span>{{ user?.public_repos }}</span>
          </li>
          <li class="font-semibold flex gap-3 items-center">
            Подписчики: <span>{{ user?.followers }}</span>
          </li>
        </ul>
        <img :src="user?.avatar_url" alt="user" class="h-32 w-32" />
      </template>
	  <div v-else>...Loding</div>
    </div>
    <orange-button @click="prevPageClickHandler" class="mt-5 mx-auto">Назад</orange-button>
  </section>
</template>

<script>
import { getUserUrl } from "@/mocks/urls/urls.js";
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@/shared/hooks/query/useQuery.js";
import OrangeButton from "../../../shared/ui/buttons/orange/OrangeButton.vue";
export default {
  components: { OrangeButton },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const url = getUserUrl(route.params?.id);
    const config = { method: "get" };

    const { data: user, isLoading } = useQuery(url, config);

    const prevPageClickHandler = () => router.go(-1);

    return {
      prevPageClickHandler,
      user,
      isLoading,
    };
  },
};
</script>

<style></style>
