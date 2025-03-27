import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './edit';
import save from './save';
import './style.scss';
registerBlockType(metadata.name, {
	// icon: (
	// 	<svg
	// 		version="1.1"
	// 		viewBox="0 0 500 500"
	// 		preserveAspectRatio="xMidYMid meet"
	// 	>
	// 		<circle cx="250" cy="250" r="200" />
	// 	</svg>
	// ),

	icon: {
		src: 'text-page',
		background: '#f03',
		foreground: '#fff',
	},

	edit: Edit,
	save,
});
