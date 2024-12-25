import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';

import type { ITransaction } from '@/types/modules/transactions.ts';

export const useTransactionsStore = defineStore('transactions', () => {
	const transactions = ref<ITransaction[]>([]);

	const getTransactions = computed<ITransaction[]>(() => transactions.value);

	const loadTransactions = (): void => {
		const loadedTransactions: ITransaction[] = JSON.parse(localStorage.getItem('transactions') ?? '[]');
		transactions.value = loadedTransactions.map(transaction => ({ ...transaction, created: dayjs(transaction.created) }));
	};

	const saveTransactions = (): void => {
		localStorage.setItem('transactions', JSON.stringify(transactions));
	};

	const addTransaction = (transactionData: Omit<ITransaction, 'id' | 'created'>): void => {
		transactions.value.push({
			id: transactions.value[transactions.value.length - 1].id + 1,
			created: dayjs(),
			...transactionData,
		});
	};

	const updateTransaction = (transactionId: number, newTransactionData: Omit<ITransaction, 'id' | 'created'>): void => {
		for (let i: number = 0; i < transactions.value.length; i++) {
			if (transactions.value[i].id === transactionId) {
				transactions.value[i] = {
					...transactions.value[i],
					...newTransactionData,
				};
				break;
			}
		}
	};

	const deleteTransaction = (transactionId: number): void => {
		for (let i: number = 0; i < transactions.value.length; i++) {
			if (transactions.value[i].id === transactionId) {
				transactions.value.splice(i, 1);
				break;
			}
		}
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
