<template>
	<X3Modal v-model:show="show" title="Add a transaction">
		<template #default>
			<CreateTransactionForm v-model:model="model" />
		</template>
		<template #footer>
			<div class="flex justify-end">
				<X3Button type="primary" @click="addTransaction">Add</X3Button>
			</div>
		</template>
	</X3Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionsStore } from '@/store';

import X3Modal from '@/X3UI/Modal/X3Modal.vue';
import X3Button from '@/X3UI/Button/X3Button.vue';
import CreateTransactionForm from '@/components/Forms/CreateTransactionForm.vue';

const transactionsStore = useTransactionsStore();

const show = defineModel<boolean>('show', { default: false });
const model = ref<{title: string; sum: string}>({ title: '', sum: '' });

const resetModel = () => {
	model.value.title = '';
	model.value.sum = '';
};

const addTransaction = () => {
	transactionsStore.addTransaction(model.value);
	resetModel();
	show.value = false;
};
</script>
