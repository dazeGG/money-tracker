<template>
	<X3UIPreview />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { kebabCase } from 'lodash';

import cssVariables from '@/assets/style/_variables.module.scss';

import X3UIPreview from '@/components/X3UIPreview.vue';

const setGlobalVars = () => {
	const html = document.children[0] as HTMLElement;
	const { style: htmlStyle } = html;
	for (const key in cssVariables) {
		htmlStyle.setProperty(`--${ kebabCase(key) }`, cssVariables[key]);
	}
};

onBeforeMount(setGlobalVars);
</script>
