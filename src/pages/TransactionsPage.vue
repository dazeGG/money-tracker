<template>
	<div class="flex justify-between">
		<CreateTransactionModal v-model:show="show.addTransaction" />
		<h1 class="h1">Transactions</h1>
		<X3Button @click="openModal('addTransaction')">Add transaction</X3Button>
	</div>
	<div>
		<X3Table :columns="columns" :data="transactionsStore.transactions" />
	</div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/store';
import { useModals } from '@/composables';

import X3Button from '@/X3UI/Button/X3Button.vue';
import X3Table from '@/X3UI/Table/X3Table.vue';
import CreateTransactionModal from '@/components/Modals/CreateTransactionModal.vue';

import type { ITransaction } from '@/types/modules/transactions.ts';

const transactionsStore = useTransactionsStore();
const { showModal: show, openModal } = useModals('addTransaction');

const columns = [
	{
		title: 'Date',
		render: (row: ITransaction) => row.created.format('DD.MM.YYYY HH:mm'),
	},
	{
		key: 'title',
		title: 'Title',
	},
	{
		key: 'sum',
		title: 'Sum',
	},
];

const created = () => {
	transactionsStore.loadTransactions();
};

created();
</script>
