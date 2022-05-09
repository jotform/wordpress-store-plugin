import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import EditMode from './edit/EditMode';
import PublishMode from './publish/PublishMode';

registerBlockType('create-block/wordpress-store-plugin', {
	edit: EditMode,
	save: PublishMode,
	attributes: {
		storeId: {
			type: 'string'
		},
		storeTitle: {
			type: 'string'
		},
		storeIcon: {
			type: 'string'
		}
	}
});
