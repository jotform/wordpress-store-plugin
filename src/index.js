import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';
import { jotformIcon } from './assets/Icons';

registerBlockType('jotform/wordpress-store-plugin', {
	icon: jotformIcon,
	edit: Edit,
	save: Save,
});
