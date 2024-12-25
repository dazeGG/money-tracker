<template>
	<table class="x3-table">
		<thead class="x3-table__head">
			<tr class="x3-table__tr">
				<th v-for="(column, index) in props.columns" :key="index" class="x3-table__th">
					<div class="x3-table__th-content">
						<div
							v-if="column.title"
							:class="column.sortable && column.key ? 'x3-table__th--clickable' : 'flex items-center'"
							@click="changeSort(column)"
						>
							<RenderFunction v-if="typeof column.title === 'function'" :renderer="column.title()" />
							<span v-else>{{ column.title }}</span>
							<Icon v-if="column.sortable && column.key && sortIcon[column.key]" :icon="sortIcon[column.key]" />
						</div>
					</div>
				</th>
			</tr>
		</thead>
		<tbody class="x3-table__body">
			<tr v-for="(item, index) in preparedData" :key="item.id ?? index" class="x3-table__tr">
				<td v-for="(column, index) in columns" :key="index" class="x3-table__td">
					<RenderFunction v-if="column.render && typeof column.render === 'function'" :renderer="column.render(item)" />
					<span v-else-if="column.render">{{ column.render }}</span>
					<span v-else-if="column.key">{{ item[column.key] }}</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { RenderFunction } from '@/utils';

import type { IColumn, Sort } from '@/X3UI/types';

type IData = Record<string, any>

const props = withDefaults(
	defineProps<{
		columns: IColumn[]
		data: IData[]
		multisort?: boolean
		sort?: Record<string, Sort>
	}>(),
	{
		multisort: false,
	},
);

const emit = defineEmits<{
	(e: 'update:sort', newSort: Record<string, Sort>): void
}>();

type SortingColumn = Omit<IColumn, 'sortable' | 'key'> & {
	sortable: true
	key: string
}

const defaultAscSorter = (a: IData, b: IData, sortingColumn: SortingColumn) => {
	if (a[sortingColumn.key] > b[sortingColumn.key]) {
		return 1;
	} else if (a[sortingColumn.key] < b[sortingColumn.key]) {
		return -1;
	} else {
		return 0;
	}
};

const ascSorter = (a: IData, b: IData, sortingColumn: SortingColumn) => {
	if (sortingColumn.ascSorter) {
		return sortingColumn.ascSorter(a, b);
	} else {
		return defaultAscSorter(a, b, sortingColumn);
	}
};

const preparedData = computed<IData[]>(() => {
	const sortingColumn: SortingColumn | undefined = props.columns.find(
		(column: IColumn) => column.sortable && column.key && !!sortValue.value[column.key],
	) as SortingColumn | undefined;

	return sortingColumn
		? props.data.toSorted((a: IData, b: IData) =>
			sortValue.value[sortingColumn.key] === 'asc'
				? ascSorter(a, b, sortingColumn)
				: (ascSorter(a, b, sortingColumn) * -1))
		: props.data;
});

const sortValue = ref<Record<string, Sort>>({});

const changeSort = (column: IColumn) => {
	if (column.sortable && column.key) {
		if (!props.multisort) {
			for (const sortKey of Object.keys(sortValue.value)) {
				if (column.key !== sortKey) {
					sortValue.value[sortKey] = null;
				}
			}
		}

		switch (sortValue.value[column.key]) {
		case null:
			sortValue.value[column.key] = 'asc';
			break;
		case 'asc':
			sortValue.value[column.key] = 'desc';
			break;
		case 'desc':
			sortValue.value[column.key] = null;
			break;
		}
		emit('update:sort', sortValue.value);
	}
};

const sortIcon = computed<Record<string, string>>(() => {
	const sortIconsMap: Record<string, string> = {};

	for (const column of props.columns) {
		if (column.sortable && column.key) {
			switch (sortValue.value[column.key]) {
			case null:
				sortIconsMap[column.key] = 'mi:sort';
				break;
			case 'asc':
				sortIconsMap[column.key] = 'mi:arrow-up';
				break;
			case 'desc':
				sortIconsMap[column.key] = 'mi:arrow-down';
				break;
			}
		}
	}

	return sortIconsMap;
});

const initSort = () => {
	props.columns.forEach((column: IColumn) => {
		if (column.sortable && column.key) {
			sortValue.value[column.key] = column.defaultSort ?? null;
		}
	});
};

const created = () => {
	initSort();
};

created();
</script>

<style scoped lang="scss">
@use "sass:color" as color;

@use "@/assets/style/mixins" as mixins;
@use "@/assets/style/variables" as variables;

.x3-table {
	width: 100%;

	&__head {
		background-color: color.scale(variables.$color-text, $alpha: -90%);
	}

	&__tr {
		text-align: left;
		border-bottom: 1px solid variables.$color-border;
	}

	&__body {
		.x3-table__tr {
			transition: background-color 0.1s ease-in-out;

			@include mixins.hover {
				background-color: color.scale(variables.$color-text, $alpha: -95%);
			}
		}
	}

	&__th,
	&__td {
		padding: 0.5rem;
	}

	&__th {
		&-content {
			display: flex;
		}

		&--clickable {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 0.5rem;

			span,
			svg {
				transition: color 0.2s ease-in-out;
			}

			@include mixins.hover {
				color: variables.$color-primary;
			}
		}
	}

	&__td {
		font-size: 0.875rem;
	}
}
</style>
