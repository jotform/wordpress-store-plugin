import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './EditMode.scss';
import StorePicker from './StorePicker';

const EditMode = () => {
	const [storeProps, setStoreProps] = useState(null);

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
					{storeProps && (
						<div>
							{storeProps.title}
						</div>
					)}
					<StorePicker onStoreSelect={setStoreProps} />
				</div>
			</div>
		</div>
	);
};

export default EditMode;
