import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export const generateEmbedCode = (appId) => {
	return `[embed]https://www.jotform.com/app/store/${appId}[/embed]`;
};

const PublishMode = ({ attributes }) => {
	if (!attributes || !attributes.storeId) return null;
	return (
		<div {...useBlockProps.save()}>
			<div className='publish-frame-wrapper'>
				<RawHTML>
					{generateEmbedCode(attributes.storeId)}
				</RawHTML>
			</div>
		</div>
	);
};

export default PublishMode;
