import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import EditMode from './edit/EditMode';
import PublishMode from './publish/PublishMode';
import { jotformIcon } from './assets/Icons';

registerBlockType('create-block/wp-jotform-store-plugin', {
	icon: jotformIcon,
	edit: EditMode,
	save: PublishMode,
});
