import { forwardRef } from '@wordpress/element';

const StoreEmbed = ({ attributes, forEdit }, ref) => {
	const { storeId, storeTitle, height, headerVisibility, productListLayout } =
		attributes;
	const openAppHeader = headerVisibility ? 'Yes' : 'No';

	return (
		<div className="wp-block-embed__wrapper" style={{ height }} ref={ref}>
			<iframe
				id={`JotFormIFrame-${storeId}`}
				className="jf-app-frame"
				title={storeTitle}
				src={`https://www.jotform.com/app/${storeId}?appEmbedded=1&openAppHeader=${openAppHeader}&_productListLayout=${productListLayout}`}
				style={{ width: '100%', height: '100%' }}
			/>
			{forEdit && (
				<div className="block-library-embed__interactive-overlay" />
			)}
		</div>
	);
};

export default forwardRef(StoreEmbed);
