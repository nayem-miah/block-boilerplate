import {
	AlignmentToolbar,
	BlockControls, // BlockControls is used to display block function above the block
	InspectorControls,
	PanelColorSettings, // InspectotControls is used to display rightsidebar function
	RichText,
	useBlockProps,
	withColors,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import './editor.scss';

function Edit(props) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
	} = props;

	console.log(attributes);
	const { text, alignment } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen={true}
					colorSettings={[
						{
							label: __('Background Color', 'text-box'),
							value: backgroundColor?.color,
							onChange: setBackgroundColor,
						},
						{
							label: __('Text Color', 'text-box'),
							value: textColor?.color,
							onChange: setTextColor,
						},
					]}
				/>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor: backgroundColor?.color,
						color: textColor?.color,
					},
				})}
				placeholder={__('Your Text..', 'Text-Box')}
				tagName="h1"
				onChange={(texts) => setAttributes({ text: texts })}
				value={text}
			/>
		</>
	);
}

export default withColors({
	backgroundColor: 'backgroundColor',
	textColor: 'color',
})(Edit);
