<template>
	<table class="x3-table">
		<thead class="x3-table__head">
			<tr class="x3-table__tr">
				<th v-for="(column, index) in props.columns" :key="index" class="x3-table__th">
					{{ column.title }}
				</th>
			</tr>
		</thead>
		<tbody class="x3-table__body">
			<tr v-for="(item, index) in props.data" :key="item.id ?? index" class="x3-table__tr">
				<td v-for="(column, index) in columns" :key="index" class="x3-table__td">
					<span v-if="column.key">{{ item[column.key] }}</span>
					<RenderFunction v-else :renderer="column.render(item)" />
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { RenderFunction } from '@/utils';

const props = defineProps<{
	columns: Record<string, any>
	data: Record<string, any>[]
}>();
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

	&__td {
		font-size: 0.875rem;
	}
}
</style>
