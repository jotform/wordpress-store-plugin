const StoreEmbed = ({ attributes, forEdit }) => {
	const { storeId, storeTitle, height } = attributes;

	return (
		<div className="wp-block-embed__wrapper" style={{ height }}>
			<iframe
				id={`JotFormIFrame-${storeId}`}
				className="jf-app-frame"
				title={storeTitle}
				src={`https://www.jotform.com/app/${storeId}?appEmbedded=1`}
				style={{ width: '100%', height: '100%' }}
			/>
			{forEdit && <div className="block-library-embed__interactive-overlay" />}
		</div>
	);
};

export default StoreEmbed;
