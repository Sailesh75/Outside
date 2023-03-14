<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_2_header', true );
$description = get_post_meta($pageId,'section_2_description', true );
$video = get_post_meta($pageId,'section_2_video', true );
$video_thumbnail = get_post_meta($pageId,'section_2_video_thumbnail', true );
$video_title = get_post_meta($pageId,'section_2_video_title',true );
$button_title = get_post_meta($pageId,'section_2_button_title',true );
?>


<article class="module1">
    <div class="container">
        <div class="row py-10 py-md-30">
            <div class="col-md-6 col-12 pb-10">
                <h6 class="eyebrow"><?php echo $header;?></h6>
                <h3><?php echo $description; ?></h3>
                <a href="#" class="on-hover">
                    <button class="buttons fill bg-sky text-white border border-0">
                        <?php echo $button_title;?>
                        <i class="icon-arrow-left"></i>
                    </button>
                </a> 
            </div>
            <div class="col-1"></div>
            <div class="col-md-5 col-12">
                <div class="bg-moon p-8">
                    <h6 class="eyebrow"><?php echo $video_title;?></h6>
                    <video width="400" height="350" controls poster=<?php echo $video_thumbnail;?> class="pb-@@padding ratio ratio-@@aspect-ratio module1__video">
                        <source src=<?php echo $video;?> type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </div>
</article>