<template>
  <section>
    <div>{{ user?.id }}</div>
  </section>
</template>

<script>
import { getUserUrl } from "@/mocks/urls/urls.js";
import { useRoute } from "vue-router";
import { useQuery } from "@/shared/hooks/query/useQuery.js";

export default {
  setup() {
    const route = useRoute();
	
	const url = getUserUrl(route.params?.id)
	const config = { method: "get" }

    const { data: user, isLoading } = useQuery(url, config);

    return {
      user,
    };
  },
};
</script>

<style></style>
