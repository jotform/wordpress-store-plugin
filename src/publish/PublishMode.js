import { RawHTML } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export const generateEmbedCode = (appId) => {
	return `[embed]https://www.jotform.com/app/store/${appId}[/embed]`;
};

const PublishMode = ({ attributes }) => {
	if (!attributes || !attributes.storeId) return null;
	const { className: pluginClass } = useBlockProps.save();
	return (
		<div className={`${pluginClass} forPublish`}>
			<RawHTML>{generateEmbedCode(attributes.storeId)}</RawHTML>
		</div>
	);
};

export default PublishMode;
