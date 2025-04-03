import {
	getColorClassName,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import classnames from 'classnames';    // this is a healper package to add and remove classes
export default function save({ attributes }) {
	const {
		text,
		alignment,
		backgroundColor,
		textColor,
		customTextColor,
		customBackgroundColor,
	} = attributes;
	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textClass = getColorClassName(
		'color',
		textColor
	);
	
     const classes = classnames(`text-box-align-${alignment}`,{
		[textClass]: textClass,
		[backgroundClass]: backgroundClass,
	 })
     

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
				style: {
					backgroundColor: backgroundColor ? undefined : customBackgroundColor,
					color: textColor? undefined : customTextColor,
				},
			})}
			tagName="h1"
			value={text}
		/>
	);
}
