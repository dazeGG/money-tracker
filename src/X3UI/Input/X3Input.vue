<template>
	<input
		v-model="value"
		:placeholder="props.placeholder"
		class="x3-input"
		:class="[`x3-input--${props.size}`, { [`x3-input--${props.status}`]: props.status }]"
	/>
</template>

<script setup lang="ts">
import type { Size } from '@/X3UI/types';

const value = defineModel<string>('value', { default: '' });

const props = withDefaults(
	defineProps<{
    size?: Size
    placeholder?: string
    status?: 'warning' | 'error'
  }>(),
	{
		size: 'medium',
		placeholder: 'Input value',
	},
);
</script>

<style scoped lang="scss">
.x3-input {
  background-color: var(--color-secondary-background);
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease-in-out;

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

  &::placeholder {
    color: var(--color-placeholder);
  }

  &:focus {
    border-color: var(--color-primary);
  }

  &--warning {
    border-color: var(--color-warning) !important;
  }

  &--error {
    border-color: var(--color-error) !important;
  }
}
</style>
