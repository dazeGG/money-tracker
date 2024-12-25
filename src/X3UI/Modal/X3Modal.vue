<template>
	<teleport v-if="show" to="#app">
		<div class="x3-modal" :class="[`x3-modal--${props.size}`]">
			<div class="x3-modal__overflow" @click="close()"></div>
			<div class="x3-modal__content">
				<X3Card :size="props.size">
					<template v-if="props.title" #header>
						<span class="h3">{{ props.title }}</span>
					</template>
					<template #header-extra>
						<button class="x3-modal__close" @click="close()">
							<Icon icon="ic:round-close" width="1.25rem" />
						</button>
					</template>
				</X3Card>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import X3Card from '@/X3UI/Card/X3Card.vue';

import type { Size } from '@/X3UI/types';

const show = defineModel<boolean>('show', { default: false });

const props = withDefaults(
	defineProps<{
    title?: string
    size?: Size
  }>(),
	{
		size: 'medium',
	},
);

const emit = defineEmits<{
  (e: 'open'): void;
  (e: 'close'): void;
}>();

const close = () => {
	show.value = false;
	emit('close');
};
</script>

<style scoped lang="scss">
@use '@/assets/style/mixins' as mixin;

.x3-modal {
  &--small {
    --max-width: 30rem;
  }

  &--medium {
    --max-width: 45rem;
  }

  &--large {
    --max-width: 60rem;
  }

  &__overflow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    width: 100%;
    max-width: var(--max-width);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  &__close {
    transition: rotate 0.2s ease-in-out;

    @include mixin.hover {
      rotate: 90deg;
    }
  }
}
</style>
