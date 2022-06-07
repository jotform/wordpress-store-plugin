import {
	ExternalLink,
	Icon,
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './edit.scss';
import { jotformIcon } from '../assets/Icons';
import jotformStorePluginImage from '../assets/jotform-store-plugin-preview.png';
import StorePicker from './StorePicker';
import StoreEmbed from '../embed';

const STORE_BUILDER_URL = 'https://www.jotform.com/products/store-builder/';

const Edit = ({ attributes, setAttributes }) => {
	const { storeId, storeTitle, storeIcon, blockPreview, height } = attributes;
	const storeExists = !!(storeId && storeTitle && storeIcon);
	const blockProps = useBlockProps();

	const handleStoreSelection = (storeData) => {
		if (storeData) {
			setAttributes({
				storeId: storeData.id,
				storeTitle: storeData.title,
				storeIcon: storeData.icon,
			});
		}
	};

	const handleHeightChange = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	if (blockPreview) {
		return (
			<img
				src={jotformStorePluginImage}
				alt="Jotform Store Plugin Preview"
				style={{ width: '100%' }}
			/>
		);
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Layout Settings">
					<UnitControl
						label="Height"
						value={height}
						onChange={handleHeightChange}
					/>
				</PanelBody>
			</InspectorControls>
			{!storeExists && (
				<div className="components-placeholder wp-block-embed is-large">
					<div className="components-placeholder__label">
						<span className="block-editor-block-icon has-colors">
							<Icon icon={jotformIcon} />
						</span>
						Jotform Shopping Cart
					</div>
					<div className="components-placeholder__instructions">
						Select a store app to embed in your site.
					</div>
					<div className="components-placeholder__fieldset">
						<StorePicker onStoreSelect={handleStoreSelection} />
						<ExternalLink href={STORE_BUILDER_URL}>
							Learn more about Jotform Store Builder
						</ExternalLink>
					</div>
				</div>
			)}
			{storeExists && (
				<StoreEmbed attributes={attributes} forEdit={true} />
			)}
		</div>
	);
};

export default Edit;
