import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';

import type { ITransaction, ICreateEditTransaction } from '@/types/modules/transactions.ts';

export const useTransactionsStore = defineStore('transactions', () => {
	const transactions = ref<ITransaction[]>([]);

	const getTransactions = computed<ITransaction[]>(() => transactions.value);

	const loadTransactions = (): void => {
		const loadedTransactions: ITransaction[] = JSON.parse(localStorage.getItem('transactions') ?? '[]');
		transactions.value = loadedTransactions.map(transaction => ({ ...transaction, created: dayjs(transaction.created) }));
	};

	const saveTransactions = (): void => {
		localStorage.setItem('transactions', JSON.stringify(transactions.value));
	};

	const addTransaction = (transactionData: ICreateEditTransaction): void => {
		const newTransactionId: number =
			transactions.value[transactions.value.length - 1]
				? transactions.value[transactions.value.length - 1].id + 1
				: 0;

		transactions.value.push({
			id: newTransactionId,
			created: dayjs(),
			title: transactionData.title,
			sum: parseInt(transactionData.sum),
		});
		saveTransactions();
	};

	const updateTransaction = (transactionId: number, newTransactionData: ICreateEditTransaction): void => {
		for (let i: number = 0; i < transactions.value.length; i++) {
			if (transactions.value[i].id === transactionId) {
				transactions.value[i] = {
					...transactions.value[i],
					title: newTransactionData.title,
					sum: parseInt(newTransactionData.sum),
				};
				break;
			}
		}
		saveTransactions();
	};

	const deleteTransaction = (transactionId: number): void => {
		for (let i: number = 0; i < transactions.value.length; i++) {
			if (transactions.value[i].id === transactionId) {
				transactions.value.splice(i, 1);
				break;
			}
		}
		saveTransactions();
	};

	return {
		transactions: getTransactions,
		loadTransactions,
		saveTransactions,
		addTransaction,
		updateTransaction,
		deleteTransaction,
	};
});
