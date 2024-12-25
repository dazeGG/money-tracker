<template>
	<X3Card>
		<X3Table :columns="columns" :data="transactionsStore.transactions" />
	</X3Card>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/store';

import X3Card from '@/X3UI/Card/X3Card.vue';
import X3Table from '@/X3UI/Table/X3Table.vue';

import type { ITransaction } from '@/types/modules/transactions.ts';

const transactionsStore = useTransactionsStore();

const columns = [
	{
		key: 'id',
		title: 'ID',
	},
	{
		title: 'Date',
		render: (transaction: ITransaction) => transaction.created.format('DD.MM.YYYY HH:mm'),
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
