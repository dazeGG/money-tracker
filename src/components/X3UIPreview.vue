<template>
	<div class="mt-4">
		<div class="flex flex-col gap-4">
			<span class="h1">Card</span>
			<div class="flex gap-2 items-start">
				<X3Card v-for="(size, index) in sizes" :key="index" :size="size">
					<template #header>
						<span class="h2">Header</span>
					</template>
					<template #header-extra>Header extra</template>
					<template #default>Content</template>
					<template #footer>Footer</template>
				</X3Card>
			</div>
			<span class="h1">Modal</span>
			<div class="flex gap-2">
				<X3Button @click="showModals.small = true">Show small modal</X3Button>
				<X3Button @click="showModals.medium = true">Show medium modal</X3Button>
				<X3Button @click="showModals.large = true">Show large modal</X3Button>
			</div>
			<X3Modal v-for="(size, index) in sizes" :key="index" v-model:show="showModals[size]" :size="size" title="Modal" />
			<span class="h1">Button</span>
			<div class="grid grid-cols-2 gap-2">
				<X3Card>
					<template #header>
						<span class="h4">Basic</span>
					</template>
					<template #default>
						<div class="flex gap-2 flex-wrap">
							<X3Button v-for="(buttonType, index) in ButtonTypes" :key="index" :type="buttonType">Button</X3Button>
						</div>
					</template>
				</X3Card>
				<X3Card>
					<template #header>
						<span class="h4">Secondary</span>
					</template>
					<template #default>
						<div class="flex gap-2 flex-wrap">
							<X3Button v-for="(buttonType, index) in ButtonTypes" :key="index" :type="buttonType" secondary>
								Button
							</X3Button>
						</div>
					</template>
				</X3Card>
				<X3Card>
					<template #header>
						<span class="h4">Sized</span>
					</template>
					<template #default>
						<div class="flex gap-2 flex-wrap">
							<X3Button v-for="(size, index) in sizes" :key="index" :size="size">
								Button
							</X3Button>
						</div>
					</template>
				</X3Card>
			</div>
			<span class="h1">Input</span>
			<div class="grid grid-cols-2 gap-2">
				<X3Card>
					<template #header>
						<span class="h4">Basic</span>
					</template>
					<template #default>
						<X3Input v-model:value="inputRef" />
					</template>
				</X3Card>
				<X3Card>
					<template #header>
						<span class="h4">Statuses</span>
					</template>
					<template #default>
						<div class="flex gap-2">
							<X3Input
								v-for="(inputStatus, index) in InputStatuses"
								:key="index"
								v-model:value="inputRef"
								:status="inputStatus !== 'default' ? inputStatus : undefined"
							/>
						</div>
					</template>
				</X3Card>
				<X3Card>
					<template #header>
						<span class="h4">Sized</span>
					</template>
					<template #default>
						<div class="flex gap-2">
							<X3Input v-for="(size, index) in sizes" :key="index" v-model:value="inputRef" :size="size" />
						</div>
					</template>
				</X3Card>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

import X3Button from '@/X3UI/Button/X3Button.vue';
import X3Input from '@/X3UI/Input/X3Input.vue';
import X3Card from '@/X3UI/Card/X3Card.vue';
import X3Modal from '@/X3UI/Modal/X3Modal.vue';

const inputRef = ref<string>('');

const showModals = reactive({ small: false, medium: false, large: false });

const ButtonTypes = ['default', 'primary', 'info', 'success', 'warning', 'error'] as const;
const InputStatuses = ['default', 'warning', 'error'] as const;

const sizes = ['large', 'medium', 'small'] as const;
</script>
