import api from "@/api"
import { USERS_URL } from "@/mocks/urls/urls"

export const getUsers = ({commit, state}) => {
	const  { pages, ...params } = state.pagination
	
	commit("USERS_PENDING")
	api.get(USERS_URL, {params})
	.then(r => {
		commit("USERS_SUCCESS", r?.data?.items ?? [])
		commit("SET_USERS_PAGINATION", {pages: Math.ceil(r?.data?.total_count/params?.per_page) ?? 0})
	})
	.catch(e => commit("USERS_ERROR", e?.message ?? "Ошибка загрузки пользователей"))
}

