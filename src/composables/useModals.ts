import { reactive } from 'vue';

export function useModals (...modals: string[]) {
	const showModal = reactive<Record<string, boolean>>({});
	const modalContext = reactive<Record<string, any>>({});

	const openModal = (modal: string, context?: any) => {
		showModal[modal] = true;
		modalContext[modal] = context;
	};

	const closeModal = (modal: string, clearContext: boolean = true) => {
		showModal[modal] = false;

		if (clearContext) {
			modalContext[modal] = null;
		}
	};

	const clearContext = (modal: string) => {
		modalContext[modal] = null;
	};

	modals.forEach(modal => {
		showModal[modal] = false;
		modalContext[modal] = null;
	});

	return {
		showModal,
		modalContext,
		openModal,
		closeModal,
		clearContext,
	};
}
