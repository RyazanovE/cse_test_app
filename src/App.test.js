import {
	render,
	fireEvent,
	waitFor,
	screen
} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {
	createStore
} from 'vuex'
import {
	fiveUsersData,
	luckySearch,
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
import axios from "axios"






describe('app test', () => {

	const testCall = jest.fn();

	const server = setupServer(

		rest.get('https://api.github.com/search/users', (req, res, ctx) => {
			console.log("here this line run")
			testCall();
			const {
				q,
				per_page,
				order,
				page
			} = req.params
			ctx.delay(1500)
			if (q === "lucky7777") {
				return res(ctx.json(luckySearch))
			}
			return res(ctx.status(500))
		}),
	)

	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())


	it("has to show 2 pages searching lucky7777", async () => {
		const {
			getByPlaceholderText,
			getByText,
			getAllByTestId,
			getByTestId,
			findAllByTestId
		} = render(App, {
			global: {
				plugins: [store, router]
			}
		})
		router.push("/users")
		await router.isReady()

		await fireEvent.change(getByPlaceholderText("Введите логин пользователя"), {
			target: {
				value: "lucky7777"
			}
		})


	


		await fireEvent.click(getByText("Найти"))

		await waitFor(() => {
			expect(testCall).toHaveBeenCalled();

		})

		// expect(await findAllByTestId("table-row")).toHaveLength(10)


	})
})