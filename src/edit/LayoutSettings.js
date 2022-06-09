import {
	SelectControl,
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';

const LayoutSettings = ({ attributes, setAttributes }) => {
	const { height, align } = attributes;
	const alignOptions = [
		{
			label: 'None (max 650px)',
			value: 'center',
		},
		{
			label: 'Wide width (max 1000px)',
			value: 'wide',
		},
		{
			label: 'Wide width',
			value: 'full',
		},
		{
			label: 'Align right',
			value: 'right',
		},
		{
			label: 'Align left',
			value: 'left',
		},
		{
			label: 'Align center',
			value: 'center',
		},
	];

	const handleHeightChange = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	const handleAlignChange = (newAlign) => {
		setAttributes({ align: newAlign });
	};

	return (
		<PanelBody title="Layout Settings">
			<SelectControl
				label="Width &#38; Aligment"
				value={align}
				onChange={handleAlignChange}
				options={alignOptions}
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
