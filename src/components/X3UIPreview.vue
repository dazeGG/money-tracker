<template>
	<div class="mt-8">
		<div class="flex flex-col gap-6">
			<span class="h1">Button</span>
			<div v-for="(buttonType, index) in ButtonTypes" :key="index" class="flex flex-col gap-4">
				<span class="h4">{{ startCase(buttonType) }}</span>
				<div class="flex gap-2 items-center">
					<X3Button v-for="(buttonSize, index) in sizes" :key="index" :type="buttonType" :size="buttonSize">
						Button
					</X3Button>
				</div>
			</div>
			<span class="h1">Input</span>
			<div v-for="(inputStatus, index) in InputStatuses" :key="index" class="flex flex-col gap-4">
				<span class="h4">{{ startCase(inputStatus) }}</span>
				<div class="flex gap-2 items-center">
					<X3Input
						v-for="(buttonSize, index) in sizes"
						:key="index"
						v-model:value="inputRef"
						:size="buttonSize"
						:status="inputStatus !== 'default' ? inputStatus : undefined"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { startCase } from 'lodash';

import X3Button from '@/X3UI/Button/X3Button.vue';
import X3Input from '@/X3UI/Input/X3Input.vue';

const inputRef = ref<string>('');

const ButtonTypes = ['default', 'primary', 'info', 'success', 'warning', 'error'] as const;
const InputStatuses = ['default', 'warning', 'error'] as const;

const sizes = ['small', 'medium', 'large'] as const;
</script>
