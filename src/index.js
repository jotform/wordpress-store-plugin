import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import EditMode from './edit/EditMode';
import PublishMode from './publish/PublishMode';
import { jotformIcon } from './assets/Icons';

registerBlockType('create-block/wp-jotform-store-plugin', {
	title: 'Jotform Store Embed',
	icon: jotformIcon,
	category: 'embed',
	description: 'Create your online store and embed to your website in minutes.',
	attributes: {
		align: {
			type: 'string',
			default: 'wide'
		},
		blockPreview: {
			type: 'boolean'
		},
		storeIcon: {
			type: 'string'
		},
		storeId: {
			type: 'string'
		},
		storeTitle: {
			type: 'string'
		}
	},
	example: {
		attributes: {
			blockPreview: true
		}
	},
	supports: {
		align: true,
		html: false
	},
	edit: EditMode,
	save: PublishMode,
});
