import {
	AlignmentToolbar,
	BlockControls, // BlockControls is used to display block function above the block
	InspectorControls, // InspectotControls is used to display rightsidebar function
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	AnglePickerControl,
	ColorPalette,
	ColorPicker,
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen={true}
				>
					<TextControl
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
					/>
					<ColorPalette
						colors={[
							{
								name: 'red',
								color: '#F00',
							},{
								name: 'green',
								color: '#0F0',
							},
							{
								name: 'blue',
								color: '#00F',
							}
						]}
						onChange={(v)=>console.log(v)}
					/>
				</PanelBody>
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
				})}
				placeholder={__('Your Text..', 'Text-Box')}
				tagName="h1"
				onChange={(texts) => setAttributes({ text: texts })}
				value={text}
			/>
		</>
	);
}
