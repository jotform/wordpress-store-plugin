import { Icon, PanelBody, ToggleControl } from '@wordpress/components';
import {
	productListSingleCol,
	productListTwoCols,
	productListThreeCols,
} from '../assets/Icons';

const AppSettings = ({ attributes, setAttributes }) => {
	const { headerVisibility, productListLayout } = attributes;
	const productListLayoutOptions = [
		{
			value: 'HR',
			icon: productListSingleCol,
		},
		{
			value: 'V2C',
			icon: productListTwoCols,
		},
		{
			value: 'V3C',
			icon: productListThreeCols,
		},
	];

	const handleHeaderVisibilityChange = (newHeaderVisibility) => {
		setAttributes({ headerVisibility: newHeaderVisibility });
	};

	const handleProductListLayoutChange = (newProductListLayout) => {
		setAttributes({ productListLayout: newProductListLayout });
	};

	return (
		<PanelBody title={'App Settings'}>
			<div className="jf-header-visibility-setting-section">
				{'Show App Header'}
				<ToggleControl
					checked={headerVisibility}
					onChange={handleHeaderVisibilityChange}
				/>
			</div>
			<div className="jf-product-list-layout-setting-section">
				{'Product List Layout'}
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
