<?php
$pageId = get_the_ID();
$header = get_post_meta($pageId,'section_6_header', true );
$description = get_post_meta($pageId,'section_6_description', true );
$owner_image = get_post_meta($pageId,'section_6_owner_image', true );
$owner_name = get_post_meta($pageId,'section_6_owner_name',true );
$owner_description = get_post_meta($pageId,'section_6_owner_description',true );
?>


<section class="main pt-21 pb-23">
    <div class="container">
        <div class="row text-center">
            <div class="col-12 d-flex flex-column align-items-center">
                <h2><?php echo $header;?></h2>
                <div>
                    <p class="Body-Xl"><?php echo $description;?></p>
                </div>
                <div class="outer-div mt-11 mb-9">
                    <div class="inner-div">
                        <img src=<?php echo $owner_image;?> alt="owner's-pic">
                    </div>
                </div>
                <h4 class="text-sky"><?php echo $owner_name;?></h4>
                <div class="d-flex align-items-center justify-content-center pr-3 text-sky mb-5">
                    <i class="icon-linkedIn pe-3"></i>
                    <i class="icon-github pe-3"></i>
                    <i class="icon-twitter pe-3"></i>
                    <i class="icon-facebook pe-3"></i>
                </div>
                <body class="Body"><?php echo $owner_description;?></body>
            </div>
        </div>
    </div>
</section>         