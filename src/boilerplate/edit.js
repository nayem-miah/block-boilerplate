import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit() {
	return (
<<<<<<< HEAD
		<p {...useBlockProps()}>
			{__('Boilerplate – hello from the editor!', 'boilerplate')}
=======
		<p { ...useBlockProps() }>
			{ __( 'Boilerplate – hello from the editor!', 'boilerplate' ) }
>>>>>>> cd95148352d50bb2895407faffe944f31557aebe
		</p>
	);
}
