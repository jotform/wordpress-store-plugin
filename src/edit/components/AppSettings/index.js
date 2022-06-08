import { PanelBody, ToggleControl } from '@wordpress/components';

const AppSettings = ({ attributes, setAttributes }) => {
	const { headerVisiblity } = attributes;
	const handleHeaderVisiblityChange = (newHeaderVisiblity) => {
		setAttributes({ headerVisiblity: newHeaderVisiblity });
	};

	return (
		<PanelBody title={'App Settings'}>
			<div className="jf-header-visiblity-setting-section">
				{'Show/Hide app header'}
				<ToggleControl
					checked={headerVisiblity}
					onChange={handleHeaderVisiblityChange}
				/>
			</div>
		</PanelBody>
	);
};

export default AppSettings;
