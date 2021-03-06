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
import LayoutSettings from './LayoutSettings';
import AppSettings from './AppSettings';

const STORE_BUILDER_URL =
	'https://www.jotform.com/products/store-builder/?utm_source=wordpress&utm_medium=shopping-cart-plugin';

const Edit = ({ attributes, setAttributes }) => {
	const { align, storeId, storeTitle, storeIcon, blockPreview } = attributes;
	const storeExists = !!(storeId && storeTitle && storeIcon);
	const { className, ...otherProps } = useBlockProps();
	const storePickerRef = useRef(null);

	const handleStoreSelection = (storeData) => {
		if (storeData) {
			setAttributes({
				storeId: storeData.id,
				storeTitle: storeData.title,
				storeIcon: storeData.icon,
				headerVisibility: storeData.openAppHeader,
				productListLayout: storeData.productListLayout,
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

	if (!storeExists) {
		return (
			<div className={`${className} align${align}`} {...otherProps}>
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
				<StorePicker
					ref={storePickerRef}
					onStoreSelect={handleStoreSelection}
				/>
			</div>
		);
	}

	return (
		<div className={`${className} align${align}`} {...otherProps}>
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
			<StoreEmbed attributes={attributes} forEdit={true} />
			<StorePicker
				ref={storePickerRef}
				onStoreSelect={handleStoreSelection}
			/>
		</div>
	);
};

export default Edit;
