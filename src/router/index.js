import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const routes = [{
		path: '/',
		component: require('@/pages/main/MainPage.vue').default
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