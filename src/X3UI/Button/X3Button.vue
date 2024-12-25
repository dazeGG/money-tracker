<template>
	<button
		class="x3-button"
		:class="[
			`x3-button--${props.type}`,
			`x3-button--${props.size}`,
			props.secondary ? 'x3-button--secondary' : 'x3-button--basic'
		]"
	>
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
    /** Button secondary */
    secondary?: boolean
  }>(),
	{
		type: 'default',
		size: 'medium',
		secondary: false,
	},
);
</script>

<style scoped lang="scss">
@use "sass:color" as color;

@use "@/assets/style/variables" as variables;
@use "@/assets/style/mixins" as mixins;

$hover-white-mixin-part: 75%;
$secondary-alpha: -85%;
$secondary-alpha-hover: -75%;

@mixin button-type-colors ($color) {
  &.x3-button--basic {
    background-color: $color;

    @include mixins.hover {
      background-color: color.mix($color, white, $hover-white-mixin-part);
    }
  }

  &.x3-button--secondary {
    color: $color;
    background-color: color.scale($color, $alpha: $secondary-alpha);

    @include mixins.hover {
      background-color: color.scale($color, $alpha: $secondary-alpha-hover);
    }
  }
}

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
    &.x3-button--basic {
      outline: 0.0625rem solid variables.$color-border;
      transition-property: outline-color, color;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;

      @include mixins.hover {
        outline-color: variables.$color-primary;
        color: variables.$color-primary;
      }
    }

    &.x3-button--secondary {
      outline: none;
      background-color: variables.$color-secondary-background;

      @include mixins.hover {
        background-color: color.mix(variables.$color-secondary-background, white, 90%);
      }
    }
  }

  &--primary {
    @include button-type-colors(variables.$color-primary);
  }

  &--info {
    @include button-type-colors(variables.$color-info);
  }

  &--success {
    @include button-type-colors(variables.$color-success);
  }

  &--warning {
    @include button-type-colors(variables.$color-warning);
  }

  &--error {
    @include button-type-colors(variables.$color-error);
  }
}
</style>
