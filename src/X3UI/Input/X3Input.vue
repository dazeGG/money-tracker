<template>
	<input
		v-model="value"
		:placeholder="props.placeholder"
		class="x3-input"
		:class="[`x3-input--${props.size}`, { [`x3-input--${props.status}`]: props.status }]"
	/>
</template>

<script setup lang="ts">
const value = defineModel<string>('value', { default: '' });

const props = withDefaults(
	defineProps<{
    size: 'small' | 'medium' | 'large'
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
  background-color: #353535;
  border-radius: 0.6rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease-in-out;

  &--small {
    height: var(--height-small);
    padding-inline: 0.6rem;
    font-size: 1.2rem;
  }

  &--medium {
    height: var(--height-medium);
    padding-inline: 1rem;
    font-size: 1.6rem;
  }

  &--large {
    height: var(--height-large);
    padding-inline: 1.4rem;
    font-size: 2rem;
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
