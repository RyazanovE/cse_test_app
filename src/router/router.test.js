import {
	waitFor
} from '@testing-library/dom'
import '@testing-library/jest-dom'
import {
	screen,
	render,
	fireEvent
} from '@testing-library/vue'
import store from "@/store"
import App from "@/App.vue"
import {
	fiveUsersData,
} from "@/tests/unit/users/mocks/usersData.js"
import {
	createStore
} from 'vuex'
import router from '@/router'



const createVuexStore = (users) => createStore({
	state: {
		users,
		pagination: {
			order: "asc",
			sort: "",
			per_page: 10,
			page: 1,
			q: "",
			pages: 0,
		},
	},
	actions: store.actions,
	mutations: store.mutations


})


describe("router tests", () => {


	it('navigates to users list page', async () => {
			const options = {
				data: fiveUsersData,
				isLoading: false,
				isError: false,
			}
			const {
				getAllByText,

			} = render(App, {
				global: {
					plugins: [router, createVuexStore(options)],
				},
			})


			await fireEvent.click(getAllByText("Пользователи")[0])

			await waitFor(() => {
				expect(screen.getByTestId('users-section')).toBeInTheDocument()
			})
		}),


		it('navigates to selected user page', async () => {
			const options = {
				data: fiveUsersData,
				isLoading: false,
				isError: false,
			}
			const {
				getAllByTestId
			} = render(App, {
				global: {
					plugins: [router, createVuexStore(options)],
				},
			})
			router.push("/users")
			await router.isReady()

			await fireEvent.click(getAllByTestId("table-row")[0])

			await waitFor(() => {
				expect(screen.getByText('Публичных репозиториев:')).toBeInTheDocument()
			})
		})

	it('navigates from user page back to list', async () => {
		const options = {
			data: fiveUsersData,
			isLoading: false,
			isError: false,
		}
		const {

			getByText
		} = render(App, {
			global: {
				plugins: [router, createVuexStore(options)],
			},
		})
		router.push("/users/" + fiveUsersData[0].id)
		await router.isReady()

		await waitFor(() => {
			expect(screen.getByText('Публичных репозиториев:')).toBeInTheDocument()
		})

		await fireEvent.click(getByText("Назад"))

		await waitFor(() => {
			expect(screen.getByTestId('users-section')).toBeInTheDocument()
		})
	})

})