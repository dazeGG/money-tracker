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
@use "sass:color" as color;

@use "@/assets/style/variables" as variables;
@use "@/assets/style/mixins" as mixin;

$hover-white-mixin-part: 75%;

.x3-button {
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

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
    background-color: variables.$color-secondary-background;

    @include mixin.hover {
      background-color: color.mix(variables.$color-secondary-background, white, 90%);
    }
  }

  &--primary {
    background-color: variables.$color-primary;

    @include mixin.hover {
      background-color: color.mix(variables.$color-primary, white, $hover-white-mixin-part);
    }
  }

  &--info {
    background-color: variables.$color-info;

    @include mixin.hover {
      background-color: color.mix(variables.$color-info, white, $hover-white-mixin-part);
    }
  }

  &--success {
    background-color: variables.$color-success;

    @include mixin.hover {
      background-color: color.mix(variables.$color-success, white, $hover-white-mixin-part);
    }
  }

  &--warning {
    background-color: variables.$color-warning;

    @include mixin.hover {
      background-color: color.mix(variables.$color-warning, white, $hover-white-mixin-part);
    }
  }

  &--error {
    background-color: variables.$color-error;

    @include mixin.hover {
      background-color: color.mix(variables.$color-error, white, $hover-white-mixin-part);
    }
  }
}
</style>
