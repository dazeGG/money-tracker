import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('@/pages/HomePage.vue'),
	},
	{
		path: '/x3ui-preview',
		name: 'X3UIPreviewPage',
		component: () => import('@/pages/X3UIPreviewPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
