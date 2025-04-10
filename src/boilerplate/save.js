

import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
				style: {
					backgroundColor,
					color: textColor,
				},
			})}
			tagName="h1"
			value={text} 
		/>
	);
}
