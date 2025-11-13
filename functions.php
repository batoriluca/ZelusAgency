<?php

function lucaZelusAg_register_styles(){
  $version = wp_get_theme()->get('Version');
  wp_enqueue_style('lucaZelus-css', get_template_directory_uri()."/style.css", array(), $version, 'all');
  wp_enqueue_style('lucaZelus-fontawesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css", array(), '6.2.0', 'all');
  wp_enqueue_style('lucaZelus-fontawesome1', "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap", array(), '1.0', 'all');
  wp_enqueue_style('lucaZelus-fontawesome2', "https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap", array(), '1.0', 'all');
  wp_enqueue_style('lucaZelus-fontawesome3', "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap", array(), '1.0', 'all');

}

add_action('wp_enqueue_scripts', 'lucaZelusAg_register_styles');

function lucaZelusAg_menus(){

  $locations = array(
    'primary'=>"desktop primary top sidebar",
    'footer'=>"footer menu items"
  );
  register_nav_menus($locations);

}

add_action('init','lucaZelusAg_menus');

function load_js_assets1() {
    if( is_page( 37 ) ) {
        wp_enqueue_script('my-js1', get_template_directory_uri()."/assets/js/blog.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets1');

function load_js_assets2() {
    if( is_page( 18 ) ) {
        wp_enqueue_script('my-js2', get_template_directory_uri()."/assets/js/contact.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets2');

function load_js_assets3() {
    if( is_page( 16 ) ) {
        wp_enqueue_script('my-js3', get_template_directory_uri()."/assets/js/servicii.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets3');

function load_js_assets4() {
    if( is_page( 12 ) ) {
        wp_enqueue_script('my-js4', get_template_directory_uri()."/assets/js/script.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets4');
function load_js_assets5() {
    if( is_page( 20 ) ) {
        wp_enqueue_script('my-js5', get_template_directory_uri()."/assets/js/tc.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets5');

function load_js_assets6() {
    if( is_page( 22 ) ) {
        wp_enqueue_script('my-js6', get_template_directory_uri()."/assets/js/thankyou.js", array(), '1.0', true);
    }
}

add_action('wp_enqueue_scripts', 'load_js_assets6');

add_action('template_redirect', function() {
    // ID of the thank you page
    if (!is_page(22)) {
        return;
    }

    // coming from the form, so all is fine
    if (wp_get_referer() === 'https://zelus-agency.com/' || wp_get_referer() === 'https://zelus-agency.com/contact/') {
        return;
    }

    // we are on thank you page
    // visitor is not coming from form
    // so redirect to home
    wp_redirect(get_home_url());
    exit;
} );

?>
