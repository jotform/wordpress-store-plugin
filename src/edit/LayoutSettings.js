import {
	CustomSelectControl,
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';

const alignOptions = [
	{
		name: 'None (max 650px)',
		key: 'none',
		className: 'for-align-none',
	},
	{
		name: 'Wide width (max 1000px)',
		key: 'wide',
		className: 'for-align-wide',
	},
	{
		name: 'Full width',
		key: 'full',
		className: 'for-align-full-width',
	},
	{
		name: 'Align left',
		key: 'left',
		className: 'for-align-left',
	},
	{
		name: 'Align center',
		key: 'center',
		className: 'for-align-center',
	},
	{
		name: 'Align right',
		key: 'right',
		className: 'for-align-right',
	},
];

const LayoutSettings = ({ attributes, setAttributes }) => {
	const { height, align } = attributes;

	const handleHeightChange = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	const handleAlignChange = ({ selectedItem }) => {
		setAttributes({ align: selectedItem.key });
	};

	const selectedOption = alignOptions.find((option) => option.key === align);

	return (
		<PanelBody title="Layout Settings">
			<div className="jf-right-panel-setting">
				<CustomSelectControl
					label="Width & Alignment"
					value={selectedOption}
					onChange={handleAlignChange}
					options={alignOptions}
					className="jf-custom-select-control"
				/>
			</div>
			<div className="jf-right-panel-setting">
				<UnitControl
					label="Height"
					value={height}
					onChange={handleHeightChange}
					className="jf-custom-unit-control"
				/>
			</div>
		</PanelBody>
	);
};

export default LayoutSettings;
