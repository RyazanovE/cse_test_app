import {
  createStore
} from 'vuex'

import * as actions from "./users/actions/users-actions"
import * as mutations from "./users/mutations/users-mutations"

const store = createStore({
  state: {
    users: {
      data: [],
      isLoading: false,
      isError: false,
      error: "",
    },
    pagination: {
      order: "asc",
      sort: "",
      per_page: 10,
      page: 1,
      q: "",
      pages: 0,
    },

  },
  getters: {},
  mutations,
  actions
})

export default store

export {
  mutations,
  actions
}