import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
<<<<<<< HEAD
		<p {...useBlockProps.save()}>
			{'Boilerplate – hello from the saved content!'}
=======
		<p { ...useBlockProps.save() }>
			{ 'Boilerplate – hello from the saved content!' }
>>>>>>> cd95148352d50bb2895407faffe944f31557aebe
		</p>
	);
}
