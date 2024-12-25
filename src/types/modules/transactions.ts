import type { Dayjs } from 'dayjs';

interface ITransaction {
	id: number
	created: Dayjs
	title: string
	sum: number
}

export type {
	ITransaction,
};
