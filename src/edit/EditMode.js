import { useBlockProps } from '@wordpress/block-editor';
import './EditMode.scss';
import StorePicker from './StorePicker';

const EditMode = ({ attributes, setAttributes }) => {
	const handleStoreSelection = (storeData) => {
		if (storeData && storeData.id) {
			setAttributes({ storeId: storeData.id });
		}
	};

	return (
		<div {...useBlockProps()}>
			<div className='components-placeholder wp-block-embed is-large'>
				<div className='components-placeholder__label'>
					<span className='block-editor-block-icon has-colors'>
						<span className='dashicon dashicons dashicons-store'></span>
					</span>
					Jotform Store Embed
				</div>
				<div className='components-placeholder__instructions'>
					Select a store to embed to your site.
				</div>
				<div className='components-placeholder__fieldset'>
					{attributes.storeId && <span>{attributes.storeId}</span>}
					<StorePicker onStoreSelect={handleStoreSelection} />
				</div>
			</div>
		</div>
	);
};

export default EditMode;
