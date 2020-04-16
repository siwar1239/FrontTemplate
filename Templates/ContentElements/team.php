<?php require_once '../Inc/functions.php'; //function import()?>
<section id="team">
   <div class="container">
       <div class="title">Ihr WZAT Team</div>
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
               ],
               4 => [
                   "image" => '../../Img/team/team4.png',
               ],

           ]
       ]);
       ?>
   </div>
</section>
