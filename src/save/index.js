import { useBlockProps } from '@wordpress/block-editor';
import StoreEmbed from '../embed';

const Save = ({ attributes }) => {
	if (!attributes || !attributes.storeId) return null;
	return (
		<div {...useBlockProps.save()}>
			<StoreEmbed attributes={attributes} />
		</div>
	);
};

export default Save;
