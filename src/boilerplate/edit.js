import {
	AlignmentToolbar,
	BlockControls, // BlockControls is used to display block function above the block
	InspectorControls, // InspectotControls is used to display rightsidebar function
	RichText,
	useBlockProps,
	PanelColorSettings
} from '@wordpress/block-editor';
// import {
// 	AnglePickerControl,
// 	ColorPalette,
// 	ColorPicker,
// 	PanelBody,
// 	TextControl,
// 	TextareaControl,
// 	ToggleControl,
// } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const handleBackgroundColorChange = (newColor) => {
		setAttributes({ backgroundColor: newColor });
	}
	const handleTextColorChange = (newColor) => {
		setAttributes({ textColor: newColor });
	}

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
							value: backgroundColor,
							onChange: handleBackgroundColorChange,
						},
						{
							label: __('Text Color', 'text-box'),
							value: textColor,
							onChange: handleTextColorChange,
						},
					]}
				/>
					

					{/* <TextControl
						label="Input Label"
						value={text}
						onChange={(value) => console.log(value)}
						help="This is a help text"
					/>

					<TextareaControl
						label="Text Area Label"
						value={text}
						onChange={(value) => console.log(value)}
						help="This is a help text"
					/>

					<ToggleControl
						label="Toggle Label"
						checked={true}
						onChange={(value) => console.log(value)}
					/>
					<AnglePickerControl />
					<ColorPicker
						color={'F03'}
						onChange={(v) => console.log(v)}
					/> */}
			
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			{/* <BlockControls>
				{text && (
					<ToolbarGroup>
						<ToolbarButton
							title="Align Left"
							icon="editor-alignleft"
							onClick={() => console.log('Align Left...')}
						/>

						<ToolbarButton
							title="Align Right"
							icon="editor-alignright"
							onClick={() => console.log('Align right...')}
						/>

						<ToolbarButton
							title="Align Center"
							icon="editor-aligncenter"
							onClick={() => console.log('Align Center...')}
						/>
						<DropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignments', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
									isActive: true,
									onClick: () => console.log('Align Left...'),
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-width',
									onClick: () =>
										console.log('Align right...'),
								},
							]}
						/>
					</ToolbarGroup>
				)}
			</BlockControls> */}

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor,
						color: textColor,
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
