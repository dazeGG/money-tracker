<template>
	<X3Card>
		<X3Table :columns="columns" :data="transactionsStore.transactions" />
	</X3Card>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/store';

import X3Card from '@/X3UI/Card/X3Card.vue';
import X3Table from '@/X3UI/Table/X3Table.vue';

import type { IColumn } from '@/X3UI/types';
import type { ITransaction } from '@/types/modules/transactions.ts';

const transactionsStore = useTransactionsStore();

const columns: IColumn<ITransaction>[] = [
	{
		key: 'id',
		title: 'ID',
		sortable: true,
		defaultSort: 'asc',
	},
	{
		key: 'created',
		title: 'Date',
		render: (transaction: ITransaction) => transaction.created.format('DD.MM.YYYY HH:mm'),
		sortable: true,
	},
	{
		key: 'title',
		title: 'Title',
		sortable: true,
	},
	{
		key: 'sum',
		title: 'Sum',
		sortable: true,
	},
];

const created = () => {
	transactionsStore.loadTransactions();
};

created();
</script>
