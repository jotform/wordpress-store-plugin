import {
	SelectControl,
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const LayoutSettings = ({ attributes, setAttributes }) => {
	const { height, align } = attributes;

	const handleHeightChange = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	const handleAlignChange = (newAlign) => {
		setAttributes({ align: newAlign });
	};

	return (
		<PanelBody title={__('Layout Settings')}>
			<>
				<SelectControl
					label="Width &#38; Aligment"
					value={align}
					onChange={handleAlignChange}
					options={[
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
					]}
				/>
			</>
			<UnitControl
				label={__('Height')}
				value={height}
				onChange={handleHeightChange}
			/>
		</PanelBody>
	);
};

export default LayoutSettings;
