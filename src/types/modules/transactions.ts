import type { Dayjs } from 'dayjs';

interface ITransaction {
	id: number
	created: Dayjs
	title: string
	sum: number
}

interface ICreateEditTransaction {
	title: string
	sum: string
}

export type {
	ITransaction,
	ICreateEditTransaction,
};
