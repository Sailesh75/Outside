<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hellotheme
 */

?>
<footer class="footer theme-footer text-white bg-sky">
    <div class="container px-6 py-10 pt-md-20 pb-md-40">
        <div class="row">
            <div class="col-6 col-md-3 pb-10 pb-md-20">
            <?php
				$footer_logo = get_theme_mod('footer_logo');
				$img_url = wp_get_attachment_url($footer_logo);
				?>
				<img src="<?php echo $img_url;?>" class="navbar_section-logo"/>
                <!-- <a href="#"><img src="images/logo-footer.png" alt="logo"></a> -->
            </div>  
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <h6 class="eyebrow mb-10 "><?php
					echo wp_get_nav_menu_name("footer-menu-1");
				?></h6>
				<?php
				wp_nav_menu(array(
					"theme_location" => "footer-menu-1",
					"container"      => "",
					"menu_class"     => "d-none d-xl-block mb-0 pb-10 pb-xl-0 list-unstyled m-0"
				));
				?>
            </div>

            <div class="col-md-6 col-xl-3">
                <h6 class="eyebrow mb-10 mb-xxl-6 opener"><?php
					echo wp_get_nav_menu_name("footer-menu-2");
				?></h6>
                				<?php
				wp_nav_menu(array(
					"theme_location" => "footer-menu-2",
					"container"      => "",
					"menu_class"     => "d-none d-xl-block mb-0 pb-10 pb-xl-0 list-unstyled m-0"
				));
				?>                
            </div>
            <div class="col-md-6 col-xl-3"> 
                <h6 class="eyebrow mb-10 mb-xxl-6  opener"><?php
					echo wp_get_nav_menu_name("footer-menu-3");
				?></h6>
              
                				<?php
				wp_nav_menu(array(
					"theme_location" => "footer-menu-3",
					"container"      => "",
					"menu_class"     => "d-none d-xl-block mb-0 pb-10 pb-xl-0 list-unstyled m-0"
				));
				?>                
            </div>
            <div class="col-md-6 col-xl-3 ">
                <h6 class="eyebrow mb-10 mb-xxl-6 opener"><?php
					echo wp_get_nav_menu_name("footer-menu-4");
				?></h6>
                				<?php
				wp_nav_menu(array(
					"theme_location" => "footer-menu-4",
					"container"      => "",
					"menu_class"     => "d-none d-xl-block mb-0 pb-10 pb-xl-0 list-unstyled m-0"
				));
				?>  
            </div>         
        </div>  
        <div class="row"> 
            <div class="col-md-6 col-xl-3 pt-xl-20">
                <h6 class="eyebrow mb-10 mb-xxl-6 opener"><?php
					echo wp_get_nav_menu_name("footer-menu-5");
				?></h6>    
                                				<?php
				wp_nav_menu(array(
					"theme_location" => "footer-menu-4",
					"container"      => "",
					"menu_class"     => "d-none d-xl-block list-unstyled mb-0 pb-10 pb-lg-0 m-0"
				));
				?>             
                <!-- <ul class="d-none d-xl-block list-unstyled mb-0 pb-10 pb-lg-0">
                    <li class="mb-4"><a href="#">Contact form </a></li>
                    <li><a href="mailto:allowed@test.com">allowed@test.com</a></li>
                </ul> -->
            </div>
            <div class="col-xl-6 pt-xl-20">
                <span class="fst-italic d-block mb-4">Sign up for our newsletter:</span>
                <form action="#" class="d-md-flex">
                    <div class="form-wrap flex-grow-1">
                        <input type="text" placeholder="Email address" class="bg-sky w-100 border border-2 border-white h-100 py-2 px-3 mb-6 mb-md-0 mr-4"> 
                    </div>
                    <div class="footer__button ms-md-4">
                        <!-- @@include('./modules/section/buttons.html',{
                            'button-title':'Submit',
                            'color':'sky',
                            'icon-class':'icon-arrow-left',
                            'text-color':'white',
                            'border':'border border-2',
                            'on-hover':'fill'
                        }) -->
                    </div>
                </form>
            </div>
        </div>
            <div class="body mt-10 mt-md-20">
                <p>Site content copyright © 2021 Allowded Text</p>
            </div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
