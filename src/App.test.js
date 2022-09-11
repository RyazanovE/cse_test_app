import {
	render,
	fireEvent,
	waitFor,
} from '@testing-library/vue'
import '@testing-library/jest-dom'
import {
	createStore
} from 'vuex'
import {
	luckyFirstPage,
	luckySecondPage,
} from "@/tests/unit/users/mocks/usersData.js"
import {
	setupServer
} from 'msw/node'
import {
	rest
} from 'msw'
import App from "./App.vue"
import router from "@/router"
import store from "@/store"
import {
	mutations,
	actions
} from './store'


const url = "https://api.github.com/search/users"
const searchText = "lucky7777"


const createVuexStore = (newState = null) => createStore({
		mutations,
		actions,
		state: newState ?? store.state
	},
)


describe('test app search/navigation', () => {

	const server = setupServer(
		rest.get(url, (req, res, ctx) => {
			const q = req.url.searchParams.get("q")
			const per_page = req.url.searchParams.get("per_page")
			const page = req.url.searchParams.get("page")
			ctx.delay(1500)
	
			if (q === searchText && page == 1 && per_page == 10) return res(ctx.json(luckyFirstPage))
			
			if (q === searchText && page == 2 && per_page == 10) return res(ctx.json(luckySecondPage))
			
			return res(ctx.status(500))
		}),
	)

	beforeEach(async () => {
		router.push("/users")
		await router.isReady()
	})
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it("has to show 2 pages searching lucky7777", async () => {
		const {
			getByPlaceholderText,
			getByText,
			getAllByTestId,
			container
		} = render(App, {
			global: {
				plugins: [store, router]
			}
		})


		await fireEvent.update(getByPlaceholderText("Введите логин пользователя"), searchText)
		await fireEvent.click(getByText("Найти"))

		await waitFor(() => {
			expect(container.querySelectorAll(".Page")).toHaveLength(2)
			expect(getAllByTestId("table-row")).toHaveLength(10)
		})
	})

	it("navigates from 1st to 2nd page showing correct items", async () => {
		const state = {
			users: {
				isLoading: false,
				isError: false,
				data: luckyFirstPage.items
			},
			pagination: {
				order: "asc",
				sort: "",
				per_page: 10,
				page: 1,
				q: searchText,
				pages: 2,
			}
		}

		const {
			getAllByTestId,
			container
		} = render(App, {
			global: {
				plugins: [createVuexStore(state), router]
			}
		})

		await fireEvent.click(container.querySelectorAll(".Page")[1])

		await router.isReady()


		await waitFor(() => {
			expect(getAllByTestId("table-row")).toHaveLength(2)
		})
	})

	it("recieves error showing no items text", async () => {

			const {
				getByTestId,
				getByPlaceholderText,
				getByText,
		
			} = render(App, {
				global: {
					plugins: [createVuexStore(), router]
				}
			})

			await fireEvent.update(getByPlaceholderText("Введите логин пользователя"), "wrong_text")
			await fireEvent.click(getByText("Найти"))	

		await waitFor(() => {
			expect(getByTestId("error-row")).toBeInTheDocument()
		})
})
})