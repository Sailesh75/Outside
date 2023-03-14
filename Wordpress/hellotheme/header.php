<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package hellotheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'hellotheme' ); ?></a>

	<header id="masthead" class="site-header">

	<navbar>
    <div class="container py-3 py-md-6 py-xl-8">
        <div class="row align-items-center">
            <div class="col-1 d-xl-none me-5 me-md-0">
                <a href="#sidebar" class="d-block mt-3" data-bs-toggle="offcanvas"><i class="icon-bar"></i></a>
            </div>
            <div 
			class="col-7 col-md-2 d-xl-none justify-content-between align-items-center">
			<?php
				$header_logo = get_theme_mod('header_logo');
				$img_url = wp_get_attachment_url($header_logo);
				?>
				<img src="<?php echo $img_url;?>" class="navbar_section-logo"/>
            </div>
            <div class="col-xl-3 d-flex align-items-center d-none d-xl-block">
			<?php
				$header_logo = get_theme_mod('header_logo');
				$img_url = wp_get_attachment_url($header_logo);
				?>
				<img src="<?php echo $img_url;?>" class="navbar_section-logo"/>
            </div>
            <div class="col-md-6 col-xl-4"></div>
            <div class="col-md-3 offset-md-6 d-none d-md-block d-xl-none">
                <!-- @@include('./modules/section/buttons.html',{
                    'button-title':'Join Us Now',
                    'icon-class':'',
                    'color':'white',
                    'text-color':'black',
                    'border':'border border-2 border-black'   
                }) -->
            </div>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'container'      => 'div',
					'container_class'=> 'col-xl-4 d-flex align-items-center d-none d-xl-block',
					'menu_class'     => 'd-flex gap-10',
				)
			);
			?>
                <!-- <ul class="d-flex gap-10">
                    <li><a href="aboutPage.html">About</a></li>
                    <li><a href="blog-listing.html">Blog</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul> -->
				
        </div>
    </div>

                <!-- offcanvas -->
                
    <div class="offcanvas offcanvas-start bg-teal" tabindex="-1" id="sidebar" aria-labelledby="sidebar-label">
        <div class="offcanvas-header border border-white border-2">
            <a href="#sidebar" class="d-block mt-3 text-white" data-bs-dismiss="offcanvas"><i class="icon-cross"></i></a>
            <figure class="offcanvas-header__img">
			<?php
				$header_logo = get_theme_mod('header_logo');
				$img_url = wp_get_attachment_url($header_logo);
				?>
				<img src="<?php echo $img_url;?>" class="navbar_section-logo"/> 
            </figure>
        </div>
		<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
					'container'      => 'div',
					'container_class'=> 'offcanvas-body d-flex justify-content-center align-items-center',
					'menu_class'     => 'd-flex flex-column gap-10 text-white',
				)
			);
			?>
        <!-- <div class="offcanvas-body d-flex justify-content-center align-items-center">
            <ul class="d-flex flex-column gap-10 text-white">
                <li><a href="aboutPage.html">About</a></li>
                <li><a href="blog-listing.html">Blog</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div> -->
    </div>
</navbar> 

	</header><!-- #masthead -->
