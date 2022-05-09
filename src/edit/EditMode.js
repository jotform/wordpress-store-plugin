import { useBlockProps } from '@wordpress/block-editor';
import './EditMode.scss';
import StorePicker from './StorePicker';

const EditMode = ({ attributes, setAttributes }) => {
	const { storeId, storeTitle, storeIcon } = attributes;
	const storeExists = !!(storeId && storeTitle && storeIcon);

	const handleStoreSelection = (storeData) => {
		if (storeData) {
			setAttributes({
				storeId: storeData.id,
				storeTitle: storeData.title,
				storeIcon: storeData.icon
			});
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
				<div className='components-placeholder__fieldset is-column-layout'>
					{storeExists &&
						<div className='preview-area'>
							<img src={storeIcon} className='preview-area-img' />
							<span className='preview-area-text'>{storeTitle}</span>
						</div>
					}
					<div>
						<StorePicker onStoreSelect={handleStoreSelection} forEdit={storeExists} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditMode;
