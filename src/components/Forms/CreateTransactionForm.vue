<template>
	<div class="flex flex-col gap-2">
		<span>Title</span>
		<X3Input v-model:value="model.title" placeholder="Transaction title" />
		<span>Sum</span>
		<X3Input v-model:value="model.sum" placeholder="Transaction sum" />
	</div>
</template>

<script setup lang="ts">
import X3Input from '@/X3UI/Input/X3Input.vue';

const model = defineModel<{title: string; sum: string}>('model', { required: true });
</script>
