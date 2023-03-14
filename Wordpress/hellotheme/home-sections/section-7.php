<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_7_header', true );
$description = get_post_meta($pageId,'section_7_description', true );
$button_title = get_post_meta($pageId,'section_7_button_title',true );
?>

<section class="before-footer bg-blush">
    <div class="container py-10 py-md-20">
        <div class="row">
            <h3><?php echo $header;?></h3>
            <p class="Body-Xl pb-10"><?php echo $description;?></p>
        </div>
        <a href="../../../blog-single.html">        
        <a href="#" class="on-hover">
                    <button class="buttons fill bg-sky text-white border border-0">
                        <?php echo $button_title;?>
                        <i class="icon-arrow-left"></i>
                    </button>
                </a> 
        </a>
    </div>
</section>     