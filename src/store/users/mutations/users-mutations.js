//Users
export const USERS_SUCCESS = (state, users) => {
	state.users.data = users
	state.users.isLoading = false
	state.users.isError = false
	state.users.error = ""
}
export const USERS_PENDING = (state) => {
	state.users.isLoading = true
	state.users.isError = false
	state.users.error = ""
}
export const USERS_ERROR = (state, error) => {
	state.users.isLoading = true
	state.users.isError = true
	state.users.error = error
}


//Pagination
export const SET_USERS_PAGINATION = (state, pagination) => {
	state.pagination = {
		...state.pagination,
		...pagination && pagination
	}
}
export const RESET_USERS_PAGINATION = (state) => {
	state.pagination = {
		order: "",
		sort: "",
		per_page: 10,
		page: 1,
		q: "",
		pages: 0,
	}
}