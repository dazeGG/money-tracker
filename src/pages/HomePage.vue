<template>
	<div class="flex justify-between">
		<CreateTransactionModal v-model:show="show.addTransaction" />
		<h1 class="h1">Home Page</h1>
		<X3Button @click="openModal('addTransaction')">Add transaction</X3Button>
	</div>
</template>

<script setup lang="ts">
import { useModals } from '@/composables';

import X3Button from '@/X3UI/Button/X3Button.vue';
import CreateTransactionModal from '@/components/Modals/CreateTransactionModal.vue';

const { showModal: show, openModal } = useModals('addTransaction');
</script>
