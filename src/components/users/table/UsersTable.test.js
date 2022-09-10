import {
	mount,
	shallowMount
} from '@vue/test-utils'
import UsersTable from "./UsersTable.vue"
import {
	createStore
} from 'vuex'

const store = createStore({
	state: {
		users: {
			data: [],
			isLoading: false,
			isError: false,
			error: "",
		  },
	},
})


describe('Actions.vue', () => {
	it("render users-table", async () => {
		const wrapper = mount(UsersTable, {
			global: {
				plugins: [store]
			}
		})
		expect(wrapper.html()).toContain('Нет пользователей')
	})


})
