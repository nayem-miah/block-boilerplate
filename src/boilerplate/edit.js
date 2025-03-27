import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={[
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						onClick: () => console.log('button 1 clicked...'),
					},
				]}
			>
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
				</ToolbarGroup>
			</BlockControls>

			<RichText
				{...useBlockProps()}
				placeholder={__('Your Text..', 'Text-Box')}
				tagName="h1"
				onChange={(texts) => setAttributes({ text: texts })}
				value={text}
			/>
		</>
	);
}
