<template>
	<div class="x3-card" :class="[`x3-card--${props.size}`]">
		<div v-if="slots.header" class="x3-card__header">
			<slot name="header"></slot>
			<slot name="header-extra"></slot>
		</div>
		<div
			v-if="slots.default"
			class="x3-card__content"
			:style="{ 'padding-top': slots.header ? '0' : 'var(--x3-padding)' }"
		>
			<slot></slot>
		</div>
		<div
			v-if="slots.footer"
			class="x3-card__footer"
			:style="{ 'padding-top': slots.header || slots.content ? '0' : 'var(--x3-padding)' }"
		>
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Size } from '@/X3UI/types';

const slots = defineSlots();

const props = withDefaults(
	defineProps<{
    size?: Size
  }>(),
	{
		size: 'medium',
	},
);
</script>

<style scoped lang="scss">
.x3-card {
  width: 100%;
  background-color: var(--color-body-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-medium);

  &--small {
    --x3-padding: 0.75rem;
  }

  &--medium {
    --x3-padding: 1rem;
  }

  &--large {
    --x3-padding: 1.25rem;
  }

  &__header {
    padding: var(--x3-padding);
    display: flex;
    justify-content: space-between;
  }

  &__content {
    padding: var(--x3-padding);
  }

  &__footer {
    padding: var(--x3-padding);
  }
}
</style>
