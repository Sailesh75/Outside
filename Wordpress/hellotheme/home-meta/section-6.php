<?php
// Metaboxes
function section_6_metabox() {
    add_meta_box(
        'section_6_metabox', // $id is a unique id given to every meta box
        'section_6 Details', // $title is the title displayed in custom meta box
        'section_6_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the position of the meta box. It can be normal, advanced or side.
        'default' // $priority is the position of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_6_metabox' );
function section_6_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_6_nonce' );
    $section_6_header = get_post_meta($post->ID, "section_6_header", true);
    $section_6_description = get_post_meta($post->ID, "section_6_description", true);
    $owner_image = get_post_meta($post->ID, "section_6_owner_image", true);
    $section_6_owner_name = get_post_meta($post->ID, "section_6_owner_name", true);
    $section_6_owner_description = get_post_meta($post->ID, "section_6_owner_description", true);


    ?>
    <table class="table">
    <tr>
        <td><?php _e( 'section_6 header', 'team' )?></td>
        <td><input type="text" name="section_6_header" id="section_6_header" value="<?php if ( isset ( $section_6_header ) ) echo $section_6_header; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'section_6 description', 'team' )?></td>
        <td><input type="text" name="section_6_description" id="section_6_description" value="<?php if ( isset ( $section_6_description ) ) echo $section_6_description; ?>" /></td>
    </tr>
    <tr>
        <td>owner_image</td>
        <td>
            <input type="url" name="section_6_owner_image" id="section_6_owner_image" value="<?php echo esc_attr( $owner_image ); ?>"><br>
        </td>
        <td><button type="button" class="button" id="owner_image-btn" data-media-uploader-target="#section_6_owner_image"><?php _e( 'Upload Image', 'intern-demo' )?></button></td>
     </tr>
     <tr>
        <td><?php _e( 'Owner name', 'team' )?></td>
        <td><input type="text" name="section_6_owner_name" id="section_6_owner_name" value="<?php if ( isset ( $section_6_owner_name ) ) echo $section_6_owner_name; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'Owner description', 'team' )?></td>
        <td><input type="text" name="section_6_owner_description" id="section_6_owner_description" value="<?php if ( isset ( $section_6_owner_description ) ) echo $section_6_owner_description; ?>" /></td>
    </tr>
     </table>
    <?php
}

add_action("save_post", "section_6_save_metabox_data", 10, 2);

function section_6_save_metabox_data($post_id, $post) {
    // we have verfied the nonce
    if (!isset($_POST['section_6_nonce']) || !wp_verify_nonce($_POST['section_6_nonce'], basename(__FILE__))) {
        return $post_id;
    }
    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }
    //save value to db field
    $section_6_header = '';
    $section_6_description = '';
    $owner_image = '';
    $section_6_owner_name = '';
    $section_6_owner_description = '';

    if (isset($_POST['section_6_header'])) {
        $section_6_header = sanitize_text_field($_POST['section_6_header']);
    }

    if (isset($_POST['section_6_description'])) {
        $section_6_description = sanitize_text_field($_POST['section_6_description']);
    }

    if (isset($_POST['section_6_owner_image'])) {
        $owner_image = sanitize_url($_POST['section_6_owner_image']);
    }

    if (isset($_POST['section_6_owner_name'])) {
        $section_6_owner_name = sanitize_text_field($_POST['section_6_owner_name']);
    }

    if (isset($_POST['section_6_owner_description'])) {
        $section_6_owner_description = sanitize_text_field($_POST['section_6_owner_description']);
    }

    update_post_meta($post_id, "section_6_header", $section_6_header);
    update_post_meta($post_id, "section_6_description", $section_6_description);
    update_post_meta($post_id, "section_6_owner_image", $owner_image);
    update_post_meta($post_id, "section_6_owner_name", $section_6_owner_name);
    update_post_meta($post_id, "section_6_owner_description", $section_6_owner_description);

}