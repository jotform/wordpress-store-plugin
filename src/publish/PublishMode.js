import { RawHTML } from '@wordpress/element';

export const generateEmbedCode = (appId) => {
	return `[embed]https://www.jotform.com/app/${appId}[/embed]`;
};

const PublishMode = ({ attributes }) => {
	return (
		<RawHTML>
			{generateEmbedCode(attributes.storeId)}
		</RawHTML>
	);
};

export default PublishMode;
