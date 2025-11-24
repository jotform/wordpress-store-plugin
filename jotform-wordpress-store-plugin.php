<?php

/**
* Plugin Name: Jotform Shopping Cart - E-commerce Solutions for Online Merchants
* Plugin URI: https://wordpress.org/plugins/jotform-shopping-cart/
* Description: Create an online store and embed it in your site.
* Author: Jotform
* License: GPLv2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Version: 2.1.3
* Author URI: https://www.jotform.com/
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit(0);
}

define('JWSC_PLUGIN_DIR', plugin_dir_path(__FILE__));

/**
 * Registers a custom oEmbed provider for Jotform Store links, so WordPress can automatically embed them using the Jotform oEmbed endpoint.
 * It is hooked into 'init' to ensure it runs after WordPress has fully loaded.
 */
function jwsc_plugin_block_init() {
    wp_oembed_add_provider("#https?://(((www\.)?jotform(pro|eu|z)?\.(com))|((www\.)?(my)?jotform\.(com))|((www\.)?jotform\.(com|net|us|ca|me|co))|((secure\.|app\.)?jotform\.(com)))(/app/store)?/[0-9]*#i", "https://www.jotform.com/oembed", true);
    register_block_type(JWSC_PLUGIN_DIR . '/build');
}
add_action('init', 'jwsc_plugin_block_init');
