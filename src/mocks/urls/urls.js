export const SEARCH_URL = "search"
export const USERS_URL = SEARCH_URL.concat("/", "users")

export const USER_URL = "user"
export const getUserUrl = (id) => USER_URL.concat("/", id)