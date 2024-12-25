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
					<template v-if="slots.default" #default>
						<slot></slot>
					</template>
					<template v-if="props.showFooter" #footer>
						<slot name="footer"></slot>
						<div v-if="!slots.footer">
							<div class="flex gap-2 justify-end">
								<X3Button secondary @click="cancel">{{ cancelButtonText ?? 'Cancel' }}</X3Button>
								<X3Button :type="props.submitButtonType" @click="submit">{{ submitButtonText ?? 'Submit' }}</X3Button>
							</div>
						</div>
					</template>
				</X3Card>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import X3Card from '@/X3UI/Card/X3Card.vue';
import X3Button from '@/X3UI/Button/X3Button.vue';

import type { Type, Size } from '@/X3UI/types';

const slots = defineSlots();

const show = defineModel<boolean>('show', { default: false });

const props = withDefaults(
	defineProps<{
		title?: string
		size?: Size
		showFooter?: boolean
		cancelButtonText?: string
		submitButtonText?: string
		submitButtonType?: Type
	}>(),
	{
		size: 'medium',
		showFooter: true,
		submitButtonType: 'primary',
	},
);

const emit = defineEmits<{
	(e: 'open'): void
	(e: 'close'): void
	(e: 'cancel'): void
	(e: 'submit'): void
}>();

const close = () => {
	show.value = false;
	emit('close');
};

const cancel = () => emit('cancel');
const submit = () => emit('submit');
</script>

<style scoped lang="scss">
@use "@/assets/style/mixins" as mixins;

.x3-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	margin-inline: auto;

	&--small {
		max-width: 30rem;
	}

	&--medium {
		max-width: 45rem;
	}

	&--large {
		max-width: 60rem;
	}

	&__overflow {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background-color: rgba(0, 0, 0, 0.5);

		/* EXPERIMENTAL */
		backdrop-filter: blur(4px);
	}

	&__content {
		width: 100%;
		max-width: var(--x3-max-width);
	}

	&__close {
		transition: rotate 0.2s ease-in-out;

		@include mixins.hover {
			rotate: 90deg;
		}
	}
}
</style>
