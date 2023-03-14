<?php
// Metaboxes
function section_2_metabox() {
    add_meta_box(
        'section_2_metabox', // $id is a unique id given to every meta box
        'section_2 Details', // $title is the title displayed in custom meta box
        'section_2_metabox_callback', // $callback is a function that outputs markup inside the custom meta box
        'page', // $page represents the admin page on which the meta box will be displayed on. It can be page, post, custom post type.
        'advanced', // $context represents the position of the meta box. It can be normal, advanced or side.
        'default' // $priority is the position of the box inside the context. It can be high, core, default or low.
    );
}
add_action( 'add_meta_boxes', 'section_2_metabox' );
function section_2_metabox_callback( $post ) {
    wp_nonce_field( basename( __FILE__ ), 'section_2_nonce' );
    $section_2_header = get_post_meta($post->ID, "section_2_header", true);
    $section_2_description = get_post_meta($post->ID, "section_2_description", true);
    $section_2_video = get_post_meta($post->ID, "section_2_video", true);
    $section_2_video_title = get_post_meta($post->ID, "section_2_video_title", true);
    $section_2_video_thumbnail = get_post_meta($post->ID, "section_2_video_thumbnail", true);
    $section_2_button_title = get_post_meta($post->ID, "section_2_button_title", true);
    ?>
    <table class="table">
    <tr>
        <td><?php _e( 'section_2 header', 'team' )?></td>
        <td><input type="text" name="section_2_header" id="section_2_header" value="<?php if ( isset ( $section_2_header ) ) echo $section_2_header; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'section_2 description', 'team' )?></td>
        <td><input type="text" name="section_2_description" id="section_2_description" value="<?php if ( isset ( $section_2_description ) ) echo $section_2_description; ?>" /></td>
    </tr>
    <tr>
        <td>Video</td>
        <td>
            <input type="url" name="section_2_video" id="section_2_video" value="<?php echo esc_attr( $section_2_video ); ?>"><br>
        </td>
        <td><button type="button" class="button" id="image1-btn" data-media-uploader-target="#section_2_video"><?php _e( 'Upload Video', 'intern-demo' )?></button></td>
     </tr>
     <tr>
        <td>Video thumbnail</td>
        <td>
            <input type="url" name="section_2_video_thumbnail" id="section_2_video_thumbnail" value="<?php echo esc_attr( $section_2_video ); ?>"><br>
        </td>
        <td><button type="button" class="button" id="image1-btn" data-media-uploader-target="#section_2_video_thumbnail"><?php _e( 'Upload Image', 'intern-demo' )?></button></td>
     </tr>
     <tr>
        <td><?php _e( 'video description', 'team' )?></td>
        <td><input type="text" name="section_2_video_title" id="section_2_video_title" value="<?php if ( isset ( $section_2_video_title ) ) echo $section_2_video_title; ?>" /></td>
    </tr>
    <tr>
        <td><?php _e( 'Button title', 'team' )?></td>
        <td><input type="text" name="section_2_button_title" id="section_2_button_title" value="<?php if ( isset ( $section_2_button_title ) ) echo $section_2_button_title; ?>" /></td>
    </tr>
     </table>
    <?php
}

add_action("save_post", "section_2_save_metabox_data", 10, 2);

function section_2_save_metabox_data($post_id, $post) {
    // we have verfied the nonce
    if (!isset($_POST['section_2_nonce']) || !wp_verify_nonce($_POST['section_2_nonce'], basename(__FILE__))) {
        return $post_id;
    }
    // verifying slug value
    $post_slug = "page";
    if ($post_slug != $post->post_type) {
        return;
    }
    //save value to db field
    $section_2_header = '';
    $section_2_description = '';
    $section_2_video = '';
    $section_2_video_thumbnail = '';
    $section_2_video_title = '';
    $section_2_button_title = '';

    if (isset($_POST['section_2_header'])) {
        $section_2_header = sanitize_text_field($_POST['section_2_header']);
    }

    if (isset($_POST['section_2_description'])) {
        $section_2_description = sanitize_text_field($_POST['section_2_description']);
    }

    if (isset($_POST['section_2_video'])) {
        $section_2_video = sanitize_url($_POST['section_2_video']);
    }

    if (isset($_POST['section_2_video_thumbnail'])) {
        $section_2_video_thumbnail = sanitize_url($_POST['section_2_video_thumbnail']);
    }

    if (isset($_POST['section_2_video_title'])) {
        $section_2_video_title = sanitize_text_field($_POST['section_2_video_title']);
    }

    if (isset($_POST['section_2_button_title'])) {
        $section_2_button_title = sanitize_text_field($_POST['section_2_button_title']);
    }

    update_post_meta($post_id, "section_2_header", $section_2_header);
    update_post_meta($post_id, "section_2_description", $section_2_description);
    update_post_meta($post_id, "section_2_video", $section_2_video);
    update_post_meta($post_id, "section_2_video_thumbnail", $section_2_video_thumbnail);
    update_post_meta($post_id, "section_2_video_title", $section_2_video_title);
    update_post_meta($post_id, "section_2_button_title", $section_2_button_title);
}