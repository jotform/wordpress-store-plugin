const StoreEmbed = ({ attributes }) => {
	const { storeId, storeTitle, height } = attributes;
	return (
		<iframe
			id={`JotFormIFrame-${storeId}`}
			title={storeTitle}
			src={`https://www.jotform.com/app/${storeId}?appEmbedded=1`}
			style={{ width: '100%', height }}
		/>
	);
};

export default StoreEmbed;
