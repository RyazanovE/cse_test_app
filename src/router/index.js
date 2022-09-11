import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import {
	USERS_ROUTE
} from '@/mocks/routes/routes'
import UsersPage from '@/pages/users/UsersPage.vue'
import UserPage from '../pages/users/id/UserPage.vue'

export const routes = [{
		path: USERS_ROUTE,
		component: UsersPage

	},
	{
		path: "/",
		redirect: USERS_ROUTE

	},
	{
		path: USERS_ROUTE.concat("/:id"),
		component: UserPage

	},
	{
		path: '/:catchAll(.*)',
		component: require('@/pages/404/404.vue').default
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router