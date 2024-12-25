<template>
	<button class="x3-button" :class="[`x3-button--${props.type}`, `x3-button--${props.size}`]">
		<span v-if="slots.icon" class="x3-button__icon">
			<slot name="icon"></slot>
		</span>
		<span class="x3-button__content">
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
import type { Type, Size } from '@/X3UI/types';

const slots = defineSlots();

const props = withDefaults(
	defineProps<{
    /** Button type */
    type?: Type
    /** Button size */
    size?: Size
  }>(),
	{
		type: 'default',
		size: 'medium',
	},
);
</script>

<style scoped lang="scss">
.x3-button {
  display: flex;
  align-items: center;

  /* SIZING */
  &--small {
    padding-inline: 0.5rem;
    height: var(--height-small);
    font-size: var(--font-small);
    border-radius: var(--border-radius-small);
  }

  &--medium {
    padding-inline: 0.75rem;
    height: var(--height-medium);
    font-size: var(--font-medium);
    border-radius: var(--border-radius-medium);
  }

  &--large {
    padding-inline: 1rem;
    height: var(--height-large);
    font-size: var(--font-large);
    border-radius: var(--border-radius-large);
  }

  /* THEMING */
  &--default {
    background-color: var(--color-secondary-background);
  }

  &--primary {
    background-color: var(--color-primary);
  }

  &--info {
    background-color: var(--color-info);
  }

  &--success {
    background-color: var(--color-success);
  }

  &--warning {
    background-color: var(--color-warning);
  }

  &--error {
    background-color: var(--color-error);
  }
}
</style>
