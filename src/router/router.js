import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import WearsPage from '../pages/WearsPage.vue'
import WearDetails from '../pages/WearDetails.vue'

const routerOptions = {
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/wears',
			name: 'WearsPage',
			component: WearsPage,
		},
		{
			path: '/wears/:wearId',
			name: 'WearDetails',
			component: WearDetails,
		},
	],
}
const router = createRouter(routerOptions)
export default router
