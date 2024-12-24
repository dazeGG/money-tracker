<template>
	<div class="mt-8">
		<div class="flex flex-col gap-6">
			<span class="h1">Button</span>
			<div v-for="(buttonType, index) in ButtonTypes" :key="index" class="flex flex-col gap-4">
				<span class="h2">{{ startCase(buttonType) }}</span>
				<div class="flex gap-2 items-center">
					<X3Button v-for="(buttonSize, index) in ButtonSizes" :key="index" :type="buttonType" :size="buttonSize">
						Button
					</X3Button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { startCase } from 'lodash';

import X3Button from '@/X3UI/X3Button.vue';

const ButtonTypes = ['default', 'primary', 'info', 'success', 'warning', 'error'] as const;
const ButtonSizes = ['small', 'medium', 'large'] as const;
</script>
