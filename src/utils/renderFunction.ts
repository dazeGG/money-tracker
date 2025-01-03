import type { FunctionalComponent, VNodeChild } from 'vue';

interface Props {
	renderer: VNodeChild
}

const RenderFunction: FunctionalComponent<Props> = (props: Props) => props.renderer;
RenderFunction.props = {
	renderer: {
		type: [Object, String, Number],
		required: true,
	},
};

export default RenderFunction;
