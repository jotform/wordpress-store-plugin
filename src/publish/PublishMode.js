import { RawHTML } from '@wordpress/element';

export const generateEmbedCode = (appId) => {
	return `[embed]https://www.jotform.com/app/store/${appId}[/embed]`;
};

const PublishMode = ({ attributes }) => {
	if (!attributes || !attributes.storeId) return null;
	return (
		<figure className="wp-block-embed aligncenter">
			<div className="wp-block-embed__wrapper">
				<RawHTML>
					{generateEmbedCode(attributes.storeId)}
				</RawHTML>
			</div>
		</figure>
	);
};

export default PublishMode;
