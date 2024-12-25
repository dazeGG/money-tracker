import type { VNode } from 'vue';

type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
type Size = 'small' | 'medium' | 'large'
type Sort = null | 'asc' | 'desc'

type Render = () => (VNode | string)
type RenderData<D = any> = (dataItem: D) => (VNode | string)

interface IColumn<D = any> {
	key?: string
	title?: string | Render
	render?: string | RenderData<D>
	sortable?: boolean
	defaultSort?: Sort
	ascSorter?: (dataItemA: D, dataItemB: D) => 1 | -1 | 0
}

export type {
	Type,
	Size,
	Sort,
	IColumn,
};
