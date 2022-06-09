import {
	CustomSelectControl,
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';

const alignOptions = [
	{
		name: 'None (max 650px wide)',
		key: 'none',
		className: 'dashicons-before dashicons-align-none',
	},
	{
		name: 'Wide width (max 1000px wide)',
		key: 'wide',
		className: 'dashicons-before dashicons-align-wide',
	},
	{
		name: 'Full width',
		key: 'full',
		className: 'dashicons-before dashicons-align-full-width',
	},
	{
		name: 'Align left',
		key: 'left',
		className: 'dashicons-before dashicons-align-left',
	},
	{
		name: 'Align center',
		key: 'center',
		className: 'dashicons-before dashicons-align-center',
	},
	{
		name: 'Align right',
		key: 'right',
		className: 'dashicons-before dashicons-align-right',
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
			<CustomSelectControl
				label="Width & Alignment"
				value={selectedOption}
				onChange={handleAlignChange}
				options={alignOptions}
				className="jf-custom-select-control"
			/>
			<UnitControl
				label="Height"
				value={height}
				onChange={handleHeightChange}
			/>
		</PanelBody>
	);
};

export default LayoutSettings;
