import { useBlockProps } from '@wordpress/block-editor';
import StoreEmbed from '../embed';

const Save = ({ attributes }) => {
	if (!attributes || !attributes.storeId) return null;
	const { className: pluginClass } = useBlockProps.save();
	return (
		<div className={`${pluginClass} forPublish`}>
			<StoreEmbed attributes={attributes} />
		</div>
	);
};

export default Save;
