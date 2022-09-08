import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import { USERS_ROUTE } from '@/mocks/routes/routes'
import UsersPage from '@/pages/users/UsersPage.vue'

const routes = [{
		path: USERS_ROUTE,
		component: UsersPage
		
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