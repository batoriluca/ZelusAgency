<?php
/**
 * Template Name: Contact Template
 * Template Post Type:  page
 *
 * @package WordPress
 * @subpackage zelusAg
 * @since Twenty Twenty 1.0
 */

get_header();


?>
<div class="contact-form">
	<img src="<?php echo get_template_directory_uri();?>/assets/img/zelus3.png" style="filter: brightness(30%);right: 0;z-index: 3;width: 100vw;height: 100%;object-position: center;object-fit: cover;position: absolute;">
                <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                <h2 id="contacth">CONTACT US!</h2>
                <?php
           if( have_posts() ){

             while ( have_posts() ) {

               the_post();
               the_content();

             }
           }
         ?>

            </div>


        </div>
<?php
    get_footer();
    ?>
