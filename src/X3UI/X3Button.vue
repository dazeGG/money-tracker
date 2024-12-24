<template>
	<button class="x3-button" :class="[props.type, props.size]">
		<span v-if="slots.icon" class="x3-button__icon">
			<slot name="icon"></slot>
		</span>
		<span class="x3-button__content">
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
const slots = defineSlots();

const props = withDefaults(
	defineProps<{
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error',
    size?: 'small' | 'medium' | 'large'
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
  border-radius: 0.6rem;

  /* SIZING */
  &.small {
    height: 2.4rem;
    padding-inline: 0.6rem;
    font-size: 1.2rem;
  }

  &.medium {
    height: 3rem;
    padding-inline: 1rem;
    font-size: 1.6rem;
  }

  &.large {
    height: 3.6rem;
    padding-inline: 1.4rem;
    font-size: 2rem;
  }

  /* THEMING */
  &.default {
    background-color: #353535;
  }

  &.primary {
    background-color: var(--color-primary);
  }

  &.info {
    background-color: var(--color-info);
  }

  &.success {
    background-color: var(--color-success);
  }

  &.warning {
    background-color: var(--color-warning);
  }

  &.error {
    background-color: var(--color-error);
  }
}
</style>
