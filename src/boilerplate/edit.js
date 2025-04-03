import {
	AlignmentToolbar,
	BlockControls, // BlockControls is used to display block function above the block
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const { text, alignment } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				placeholder={__('Your Text..', 'Text-Box')}
				tagName="h1"
				onChange={(texts) => setAttributes({ text: texts })}
				value={text}
			/>
		</>
	);
}
