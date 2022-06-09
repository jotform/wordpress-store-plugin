import {
	Button,
	ExternalLink,
	Icon,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import { edit } from '@wordpress/icons';
import './edit.scss';
import { jotformIcon } from '../assets/Icons';
import jotformStorePluginImage from '../assets/jotform-store-plugin-preview.png';
import StorePicker from './StorePicker';
import StoreEmbed from '../embed';
import LayoutSettings from './components/LayoutSettings';
import AppSettings from './components/AppSettings';

const STORE_BUILDER_URL = 'https://www.jotform.com/products/store-builder/';

const Edit = ({ attributes, setAttributes }) => {
	const { storeId, storeTitle, storeIcon, blockPreview } = attributes;
	const storeExists = !!(storeId && storeTitle && storeIcon);
	const blockProps = useBlockProps();
	const storePickerRef = useRef(null);

	const handleStoreSelection = (storeData) => {
		if (storeData) {
			setAttributes({
				storeId: storeData.id,
				storeTitle: storeData.title,
				storeIcon: storeData.icon,
			});
		}
	};

	const openStorePicker = () => {
		if (storePickerRef && storePickerRef.current) {
			storePickerRef.current.openModal();
		}
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
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-toolbar__control"
						label="Change Store"
						icon={edit}
						onClick={openStorePicker}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<LayoutSettings
					attributes={attributes}
					setAttributes={setAttributes}
				/>
				<AppSettings
					attributes={attributes}
					setAttributes={setAttributes}
				/>
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
						<Button
							variant="primary"
							onClick={openStorePicker}
							className="jf-store-picker-button"
						>
							Select Store
						</Button>
						<ExternalLink href={STORE_BUILDER_URL}>
							Learn more about Jotform Store Builder
						</ExternalLink>
					</div>
				</div>
			)}
			{storeExists && (
				<StoreEmbed attributes={attributes} forEdit={true} />
			)}
			<StorePicker
				ref={storePickerRef}
				onStoreSelect={handleStoreSelection}
			/>
		</div>
	);
};

export default Edit;
