<template>
	<div class="flex justify-between">
		<CreateTransactionModal v-model:show="showCreateTransactionModal" />
		<h1 class="h1">Home Page</h1>
		<X3Button @click="() => showCreateTransactionModal = true">Add transaction</X3Button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import X3Button from '@/X3UI/Button/X3Button.vue';
import CreateTransactionModal from '@/components/Modals/CreateTransactionModal.vue';

const showCreateTransactionModal = ref<boolean>(false);
</script>
