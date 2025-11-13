<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    wp_head();
    ?>
    <title>What's Zelus? | Zelus Agency</title>
    <link rel="shortcup icon" type="image/png" href="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1).png">


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

        <div class="p1">
                        <h2 id="motto">We maximize the online potential with marketing solutions</h2>

                        <div class="card1">
							<img src="<?php echo get_template_directory_uri();?>/assets/img/zelusmain.png" >
                            <!--<div class="face">
                                <h1 id="wtszls"><span>W</span><span>H</span><span>A</span><span>T</span><span>'</span><span>S</span> <span>Z</span><span>E</span><span>L</span><span>U</span><span>S</span><span>?</span></h1>
                                <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                            </div>-->
                            <div class="back">
								<img src="<?php echo get_template_directory_uri();?>/assets/img/zelusmain.png" style="filter: brightness(30%);right: 0;z-index: 3;width: 100vw;height: 100%;object-position: center;object-fit: cover;position: absolute;top: 0;">
                                <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                <h4 id="wtszlsb">WHAT'S ZELUS?</h4>
                                <p id="wtszlsp">Welcome to Zelus Agency, a top digital marketing agency dedicated to helping businesses reach their online complete potential. With a team of experienced and qualified professionals, we offer a wide range of services to help you
                                    to achieve your goals, including optimizing for search engines optimization (SEO), pay-per-click (PPC) advertising, marketing on social media and more. Whether you want to improve the visibility of your website, to increase
                                    your customer base or to improve online sales, Zelus Agency has the expertise and resources to help you succeed. Contact us today to find out more about how we can help your business thrive in the digital world.
                                </p>
                            </div>
                        </div>
                        <div class="cards">

                            <div class="r1">
                                <div class="card info1">
                                    <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                    <i class="fa-solid fa-arrow-pointer"></i>
                                    <h3 class="title" id="ppch">
                                        PAY PER CLICK
                                    </h3>
                                    <p id="ppcp">Pay-per-click (PPC) advertising is a digital advertising strategy that involves placing ads on sear..</p>
                                    <a href="https://zelus-agency.com/services/"><button id="rm">Read more</button></a>
                                </div>
                                <div class="flex">
                                    <div class="card info2">
                                        <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                        <i class="fa-solid fa-chess-pawn"></i>
                                        <h3 class="title" id="inth">
                                            DIGITAL STRATEGIES INTEGRATION
                                        </h3>
                                        <p id="intp">Integrated digital strategies involve coordinating and integrating different digital marketing chan..</p>
                                        <a href="https://zelus-agency.com/services/"><button id="rm">Read more</button></a>
                                    </div>
                                    <div class="card info3">
                                        <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                        <i class="fa-solid fa-chart-simple"></i>
                                        <h3 class="title" id="anlh">
                                            ANALYTICS
                                        </h3>
                                        <p id="anlp">Marketing analysis is the process of evaluating the market to identify opportunities and threats and..</p>
                                        <a href="https://zelus-agency.com/services/"><button id="rm">Read more</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex r2">
                                <div class="card info4">
                                    <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                    <i class="fa-solid fa-chart-line"></i>
                                    <h3 class="title" id="inch">
                                        INCREASE CONVERSIONS
                                    </h3>
                                    <p id="incp">Increasing conversions refers to increasing the number or percentage of website visitors, who take..</p>
                                    <a href="https://zelus-agency.com/services/"><button id="rm">Read more</button></a>
                                </div>
                                <div class="card info5">
                                    <img src="<?php echo get_template_directory_uri();?>/assets/img/Zelus_Alb_Transparent (1) - Copy.png" alt="">
                                    <i class="fa-solid fa-code"></i>
                                    <h3 class="title" id="wsh">
                                        APPS & WEBSITES DEVELOPMENT
                                    </h3>

                                    <p id="wsp">Creating websites and programs involves designing, coding and the implementation of software solutio..</p>

                                    <a href="https://zelus-agency.com/services/"><button id="rm">Read more</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
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
