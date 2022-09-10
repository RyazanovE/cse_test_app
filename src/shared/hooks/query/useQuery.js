import { ref } from "vue";
import Api from "@/api"

export const useQuery = (url, config={}) => {
	const data = ref(null)
	const response = ref(null)
	const isError = ref(false)
	const error = ref("")
	const isLoading = ref(false)

	const fetch = async () => {
		isLoading.value = true

		try {
			const r = await Api.request({
				url,
				...config
			})
			response.value = r
			data.value = r?.data
		} catch (e) {
			error.value = e
			isError.value = true
		} finally {
			isLoading.value = false
		}
	}

	
			fetch()


	return {response, error, data, isLoading, fetch, isError}

}