<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php the_title();?> | Zelus Agency</title>
    <link rel="shortcup icon" type="image/png" href="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1).png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php
    wp_head();
    ?>
  <!--  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">-->
</head>

<body>
    <div class="intro">
        <!--<div class="introShadow"></div>-->
        <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1).png" class="introLogo" alt="">
    </div>
    <div class="rest">
        <div class="menu">
            <div class="topbar">
                <div class="l-part">
                    <a href="https://zelus-agency.com/">
                    <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1).png" class="logo"></a>
                    <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="" class="logoResp">
                </div>
                <menu>
                <?php
                        wp_nav_menu(
                          array(
                            'menu'=>'primary',
                            'container'=>'',
                            'theme_location'=>'primary',
                            'items_wrap'=>'<ul id="" class="">%3$s</ul>'
                          )
                        );
                      ?>
                      </menu>
                <div class="r-part">

<button id="toBottom"><i class="fa-solid fa-phone"></i> & <i class="fa-solid fa-envelope"></i></button>
                    <div class="contact-info">
                        <h4> <i class="fa-solid fa-phone"></i>0758 540 130</h4>
                        <h4> <i class="fa-solid fa-phone"></i>0744 252 124</h4>
                        <a href="mailto:contact@zelus-agency.com">
                            <h4><i class="fa-solid fa-envelope"></i>contact@zelus-agency.com</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
