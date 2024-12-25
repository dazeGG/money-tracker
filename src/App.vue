<template>
	<header class="my-4 flex gap-2">
		<X3Button @click="goto('transactions')">Transactions page</X3Button>
		<X3Button @click="goto('X3UI preview')">X3UI preview page</X3Button>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

// import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
// import { kebabCase } from 'lodash';
// import cssVariables from '@/assets/style/_variables.module.scss';

import X3Button from '@/X3UI/Button/X3Button.vue';

const router = useRouter();

const goto = (page: 'transactions' | 'X3UI preview') => {
	if (page === 'transactions') {
		router.push('/transactions');
	} else if (page === 'X3UI preview') {
		router.push('/x3ui-preview');
	}
};

// const setGlobalVars = () => {
// 	const html = document.children[0] as HTMLElement;
// 	const { style: htmlStyle } = html;
// 	for (const key in cssVariables) {
// 		htmlStyle.setProperty(`--${ kebabCase(key) }`, cssVariables[key]);
// 	}
// };
//
// onBeforeMount(setGlobalVars);
</script>
