import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/transactions',
		name: 'TransactionsPage',
		component: () => import('@/pages/TransactionsPage.vue'),
	},
	{
		path: '/x3ui-preview',
		name: 'X3UIPreviewPage',
		component: () => import('@/pages/X3UIPreviewPage.vue'),
	},
	{ path: '/:catchAll(.*)', redirect: '/transactions' },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
