<?php require_once '../Inc/functions.php'; //function import()?>
<section id="team">
   <div class="container">
       <div class="title">Ihr WZAT Team</div>

       <div class="slider">
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/10004088_1491055334449687_1187165020_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/10817863_856543214397968_517239188_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/10919749_326992714172441_299394464_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/10617007_939025979457209_6938406_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/1168617_1435408473368301_409182770_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/11189836_754178218029431_2102772742_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/10843869_1658219887738208_2033326788_n.jpg" />
           <img src="https://www.maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg" />
       </div>





       <?php
       //************Slider team***************//
       import('sliderteam', [
           "slides" => [
               0 => [
                   "image" => '../../Img/team/team1.png',
               ],
               1 => [
                   "image" => '../../Img/team/team2.png',
               ],
               2 => [
                   "image" => '../../Img/team/team3.png',
               ],
               3 => [
                   "image" => '../../Img/team/team4.png',
               ]

           ]
       ]);
       ?>
   </div>
</section>
