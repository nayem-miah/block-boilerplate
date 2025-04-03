import { RichText, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames'; // this is a healper package to add and remove classes
export default function save({ attributes }) {
	const { text, alignment } = attributes;

	const classes = classnames(`text-box-align-${alignment}`);

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
