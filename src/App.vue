<template>
	<X3Button @click="() => show = true">Add new transaction</X3Button>
	<CreateTransactionModal v-model:show="show" />
	<X3UIPreview />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { kebabCase } from 'lodash';
import cssVariables from '@/assets/style/_variables.module.scss';

import X3Button from '@/X3UI/Button/X3Button.vue';
import X3UIPreview from '@/components/X3UIPreview.vue';
import CreateTransactionModal from '@/components/Modals/CreateTransactionModal.vue';

const show = ref<boolean>(false);

const setGlobalVars = () => {
	const html = document.children[0] as HTMLElement;
	const { style: htmlStyle } = html;
	for (const key in cssVariables) {
		htmlStyle.setProperty(`--${ kebabCase(key) }`, cssVariables[key]);
	}
};

onBeforeMount(setGlobalVars);
</script>
