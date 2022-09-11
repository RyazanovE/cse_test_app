import {
	mount,
	shallowMount,
	flushPromises
} from '@vue/test-utils'
import UsersTable from "./UsersTable.vue"
import {
	createStore
} from 'vuex'
import {
	fiveUsersData,
} from "@/tests/unit/users/mocks/usersData.js"


const createVuexStore = (users) =>
	createStore({
		state: {
			users
		}
	})


describe('users table test', () => {
	it("has 5 users to be shown", async () => {
		const options = {
			data: fiveUsersData,
			isLoading: false,
			isError: false,
		}
		const wrapper = shallowMount(UsersTable, {
			global: {
				plugins: [createVuexStore(options)]
			}
		})


		expect(wrapper.findAll('[data-test="table-row"]')).toHaveLength(fiveUsersData.length)
		expect(wrapper.find('[data-test="loading-row"]').exists()).toBe(false)
		expect(wrapper.find('[data-test="no-users-row"]').exists()).toBe(false)

	})

	it("has no users shown", async () => {
		const options = {
			data: [],
			isLoading: false,
			isError: false,
		}
		const wrapper = mount(UsersTable, {
			global: {
				plugins: [createVuexStore(options)]
			}
		})

		expect(wrapper.find('[data-test="table-row"]').exists()).toBe(false)
		expect(wrapper.find('[data-test="loading-row"]').exists()).toBe(false)
		expect(wrapper.find('[data-test="no-users-row"]').exists()).toBe(true)
	})

	it("has loader shown", async () => {
			const options = {
				data: fiveUsersData,
				isLoading: true,
				isError: false,
			}
			const wrapper = mount(UsersTable, {
				global: {
					plugins: [createVuexStore(options)]
				}
			})

			expect(wrapper.find('[data-test="table-row"]').exists()).toBe(false)
			expect(wrapper.find('[data-test="loading-row"]').exists()).toBe(true)
			expect(wrapper.find('[data-test="no-users-row"]').exists()).toBe(false)
		})

})