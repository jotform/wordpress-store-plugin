import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import EditMode from './edit/EditMode';
import PublishMode from './publish/PublishMode';
import { jotformIcon } from './assets/Icons';

registerBlockType('jotform/wordpress-store-plugin', {
	icon: jotformIcon,
	edit: EditMode,
	save: PublishMode,
});
