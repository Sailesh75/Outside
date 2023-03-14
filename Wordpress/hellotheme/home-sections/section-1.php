<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_1_header', true );
$description = get_post_meta($pageId,'section_1_description', true );
$image1 = get_post_meta($pageId,'section_1_image1', true );
$image2 = get_post_meta($pageId,'section_1_image2', true );
$image3 = get_post_meta($pageId,'section_1_image3', true );
$button_title = get_post_meta($pageId,'section_1_button_title',true );
?>

<section class="leadspace bg-blush">
    <div class="container py-8 py-md-20"> 
        <div class="row">
            <div class="col-md-5" >
                <figure class="ratio ratio-486x397">
                    <img class=" object-fit-cover" src="<?php echo $image1;?>" alt="hero-section-img1">
                </figure>
            </div>

            <div class="col-md-7 d-none d-md-block">
                <div class="ratio ratio-754x397  h-100">
                    <img class="object-fit-cover" src="<?php echo $image2;?>" alt="hero-section-img2">
                </div>
            </div>
        </div>
        <div class="row mt-10">
            <div class="d-none d-md-block col-md-12 col-xl-8">
                <div class="bg-white p-18 border-top border-8 border-teal">
                    <div class="d-flex flex-column ">
                        <h2><?php echo $header;?></h2>
                        <p class="Body-Xl"><?php echo $description;?></p>
                        <a href="#" class="on-hover">
                            <button class="buttons outline bg-white text-black border border-2 border-black">
                                <?php echo $button_title;?>
                                <i class="icon-arrow-left"></i>
                            </button>
                        </a> 
                    </div>
                </div>
            </div>
            <div class="col-12 d-md-none ">
                <div class="d-flex flex-column px-8 py-10 bg-white border-top border-8 border-teal">
                    <h2>From the depths of the Earth to outer space, we are building the barely possible.</h2>
                    <p class="Body-Xl">First Mode is a creative engineering company meeting humanity’s challenges and opportunities—wherever we find them.</p>
                </div>
            </div>
            <div class="col-4 d-none d-xl-block">
                <div class="ratio ratio-1x1">
                    <img class="object-fit-cover" src="<?php echo $image3;?>" alt="hero-section-img1">
                </div>
            </div>
        </div>
    </div>
</section>