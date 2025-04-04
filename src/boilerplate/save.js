import { RichText, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames'; // this is a healper package to add and remove classes
export default function save({ attributes }) {
	const { text, alignment, shadow, shadowOpacity } = attributes;

	const classes = classnames(`text-box-align-${alignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
			})}
			tagName="h1"
			value={text}
		/>
	);
}
