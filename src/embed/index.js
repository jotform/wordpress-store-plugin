const StoreEmbed = ({ attributes }) => {
	const { storeId, storeTitle } = attributes;
	return (
		<iframe
			id={`JotFormIFrame-${storeId}`}
			title={storeTitle}
			src={`https://www.jotform.com/app/${storeId}?appEmbedded=1`}
			style={{ width: '100%', height: '750px' }}
		/>
	);
};

export default StoreEmbed;
