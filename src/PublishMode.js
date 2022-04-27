import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const PublishMode = () => {
	return (
		<p {...useBlockProps.save()}>
			{__(
				'Jotform Store Plugin – Save',
				'jotform-store-plugin'
			)}
		</p>
	);
};

export default PublishMode;
