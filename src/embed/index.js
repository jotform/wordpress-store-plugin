const StoreEmbed = ({ attributes, forEdit }) => {
	const { storeId, storeTitle, height, headerVisibility, productListLayout } =
		attributes;
	const openAppHeader = headerVisibility ? '1' : '0';
	let frameSrc = `https://www.jotform.com/app/${storeId}?appEmbedded=1&openAppHeader=${openAppHeader}&_productListLayout=${productListLayout}`;
	if (forEdit) frameSrc = `${frameSrc}&noAuth=1`;

	return (
		<div className="wp-block-embed__wrapper" style={{ height }}>
			<iframe
				id={`JotFormIFrame-${storeId}`}
				className="jf-app-frame"
				title={storeTitle}
				src={frameSrc}
				style={{ width: '100%', height: '100%' }}
			/>
			{forEdit && (
				<div className="block-library-embed__interactive-overlay" />
			)}
		</div>
	);
};

export default StoreEmbed;
