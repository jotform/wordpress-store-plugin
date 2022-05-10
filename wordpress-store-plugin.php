<?php
/**
 * Plugin Name:       Jotform Store Embed
 * Description:       Create your online store and embed to your website in minutes.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wordpress-store-plugin
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wordpress_store_plugin_block_init() {
	wp_oembed_add_provider( "#https?://(secure\.|www\.|app\.)?(my)?jotform(pro|eu|z)?\.(com|net|us|ca|me|co)(/app/store)?/[0-9]*#i", "https://www.jotform.com/oembed", true);
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_wordpress_store_plugin_block_init' );
