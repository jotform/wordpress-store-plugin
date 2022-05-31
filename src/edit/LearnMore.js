import { Icon } from '@wordpress/components';
import { newTabIcon } from '../assets/Icons';

const STORE_BUILDER_URL = 'https://www.jotform.com/products/store-builder/';

const LearnMore = () => {
	return (
		<div className="components-placeholder__learn-more">
			<a
				className="components-external-link"
				href={STORE_BUILDER_URL}
				target="_blank"
				rel="external noreferrer noopener"
			>
				Learn more about Jotform Store Builder
				<Icon icon={newTabIcon} />
			</a>
		</div>
	);
};

export default LearnMore;
