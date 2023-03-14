<?php
// Metaboxes
function section_7_metabox() {
    add_meta_box(
        'section_7_metabox', // $id is a unique id given to every meta box
        'section_7 Details', // $title is the title displayed in custom meta box
        'section_7_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the position of the meta box. It can be normal, advanced or side.
        'default' // $priority is the position of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_7_metabox' );
function section_7_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_7_nonce' );
    $section_7_header = get_post_meta($post->ID, "section_7_header", true);
    $section_7_description = get_post_meta($post->ID, "section_7_description", true);
    $section_7_button_title = get_post_meta($post->ID, "section_7_button_title", true);
    ?>
    <table class="table">
    <tr>
        <td><?php _e( 'section_7 header', 'team' )?></td>
        <td><input type="text" name="section_7_header" id="section_7_header" value="<?php if ( isset ( $section_7_header ) ) echo $section_7_header; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'section_7 description', 'team' )?></td>
        <td><input type="text" name="section_7_description" id="section_7_description" value="<?php if ( isset ( $section_7_description ) ) echo $section_7_description; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'Button title', 'team' )?></td>
        <td><input type="text" name="section_7_button_title" id="section_7_button_title" value="<?php if ( isset ( $section_7_button_title ) ) echo $section_7_button_title; ?>" /></td>
    </tr>
     </table>
    <?php
}

add_action("save_post", "section_7_save_metabox_data", 10, 2);

function section_7_save_metabox_data($post_id, $post) {
    // we have verfied the nonce
    if (!isset($_POST['section_7_nonce']) || !wp_verify_nonce($_POST['section_7_nonce'], basename(__FILE__))) {
        return $post_id;
    }
    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }
    //save value to db field
    $section_7_header = '';
    $section_7_description = '';
    $section_7_button_title = '';

    if (isset($_POST['section_7_header'])) {
        $section_7_header = sanitize_text_field($_POST['section_7_header']);
    }

    if (isset($_POST['section_7_description'])) {
        $section_7_description = sanitize_text_field($_POST['section_7_description']);
    }

    if (isset($_POST['section_7_button_title'])) {
        $section_7_button_title = sanitize_text_field($_POST['section_7_button_title']);
    }

    update_post_meta($post_id, "section_7_header", $section_7_header);
    update_post_meta($post_id, "section_7_description", $section_7_description);
    update_post_meta($post_id, "section_7_button_title", $section_7_button_title);
}