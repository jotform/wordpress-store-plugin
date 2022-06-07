import {
	PanelBody,
	__experimentalUnitControl as UnitControl, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const LayoutSettings = ({ attributes, setAttributes }) => {
	const { height } = attributes;

	const handleHeightChange = (newHeight) => {
		setAttributes({ height: newHeight });
	};

	return (
		<PanelBody title={__('Layout Settings')}>
			<UnitControl
				label={__('Height')}
				value={height}
				onChange={handleHeightChange}
			/>
		</PanelBody>
	);
};

export default LayoutSettings;
