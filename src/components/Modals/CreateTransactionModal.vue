<template>
	<X3Modal v-model:show="show" title="Add a transaction">
		<template #default>
			<CreateTransactionForm v-model:model="model" />
		</template>
		<template #footer>
			<div class="flex justify-end">
				<X3Button type="primary">Add</X3Button>
			</div>
		</template>
	</X3Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import X3Modal from '@/X3UI/Modal/X3Modal.vue';
import X3Button from '@/X3UI/Button/X3Button.vue';
import CreateTransactionForm from '@/components/Forms/CreateTransactionForm.vue';

const show = defineModel<boolean>('show', { default: false });
const model = ref<{title: string; sum: string}>({ title: '', sum: '' });
</script>
