import { Icon, PanelBody, ToggleControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import {
	productListListView,
	productListSingleCol,
	productListTwoCols,
	productListThreeCols,
} from '../assets/Icons';

const SMALL_SCREEN_TH = 769; // px

const AppSettings = ({ attributes, setAttributes }) => {
	const [isFrameWidthSmall, setIsFrameWidthSmall] = useState(false);
	const { align, headerVisibility, productListLayout } = attributes;
	const { id: blockId } = useBlockProps();
	const productListLayoutOptions = [
		{
			value: 'HR',
			icon: productListListView,
		},
		{
			value: 'V2C',
			icon: productListTwoCols,
		},
		{
			value: 'V3C',
			icon: isFrameWidthSmall
				? productListSingleCol
				: productListThreeCols,
		},
	];

	useEffect(() => {
		const block = document.getElementById(blockId);
		if (block) {
			const blockWidth = block.offsetWidth;
			setIsFrameWidthSmall(blockWidth < SMALL_SCREEN_TH);
		}
	}, [align]);

	const handleHeaderVisibilityChange = (newHeaderVisibility) => {
		setAttributes({ headerVisibility: newHeaderVisibility });
	};

	const handleProductListLayoutChange = (newProductListLayout) => {
		setAttributes({ productListLayout: newProductListLayout });
	};

	return (
		<PanelBody title={'App Settings'}>
			<div className="jf-header-visibility-setting-section jf-right-panel-setting">
				<div>{'Show App Header'}</div>
				<ToggleControl
					checked={headerVisibility}
					onChange={handleHeaderVisibilityChange}
				/>
			</div>
			<div className="jf-product-list-layout-setting-section jf-right-panel-setting">
				<div className="jf-right-panel-setting-label">
					{'Product List Layout'}
				</div>
				<div className="jf-desc">
					{'Select the default layout of the product list'}
				</div>
				<div className="jf-pllss-options-container">
					{productListLayoutOptions.map((option, index) => {
						const optionClass =
							option.value === productListLayout
								? 'jf-pllss-option jf-is-select'
								: 'jf-pllss-option';

						return (
							<button
								className={optionClass}
								key={index}
								onClick={() =>
									handleProductListLayoutChange(option.value)
								}
							>
								<Icon icon={option.icon} />
							</button>
						);
					})}
				</div>
			</div>
		</PanelBody>
	);
};

export default AppSettings;
