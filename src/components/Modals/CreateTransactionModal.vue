<template>
	<X3Modal v-model:show="show" title="Add a transaction">
		<CreateTransactionForm />
	</X3Modal>
</template>

<script setup lang="ts">
import X3Modal from '@/X3UI/Modal/X3Modal.vue';
import CreateTransactionForm from '@/components/Forms/CreateTransactionForm.vue';

const show = defineModel<boolean>('show', { default: false });
</script>
