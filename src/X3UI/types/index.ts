import type { VNode } from 'vue';

type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
type Size = 'small' | 'medium' | 'large'
type Sort = null | 'asc' | 'desc'

type Render = () => (VNode | string)

interface IColumn {
	key?: string
	title?: string | Render
	render?: string | Render
	sortable?: boolean
	defaultSort?: Sort
}

export type {
	Type,
	Size,
	Sort,
	IColumn,
};
