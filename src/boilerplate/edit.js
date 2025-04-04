import {
	AlignmentToolbar,
	BlockControls, // BlockControls is used to display block function above the block
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody, RangeControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import './editor.scss';
import classnames from 'classnames';
export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const { text, alignment, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const toggleShadow = () => {
		setAttributes({
			shadow: !shadow,
		});
	};

	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	};
	const classes = classnames(`text-box-align-${alignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});
git branch -m 34-change-color-block-support 34/35-change-color-block-support-and-shadowOpacity
	return (
		<>
			{shadow && (
				<InspectorControls>
					<PanelBody title={__('Shadow Settings', 'Text-Box')}>
						<RangeControl
							label={__('Shadow Opacity', 'Text-Box')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				</InspectorControls>
			)}

			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Shadow', 'text-box'),
						isActive: shadow,
						onClick: toggleShadow,
					},
				]}
			>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: classes,
				})}
				placeholder={__('Your Text..', 'Text-Box')}
				tagName="h1"
				onChange={(texts) => setAttributes({ text: texts })}
				value={text}
			/>
		</>
	);
}
