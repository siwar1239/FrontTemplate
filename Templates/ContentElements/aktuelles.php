<?php require_once '../Inc/functions.php'; //function import()?>
<section id="aktuelles">
   <div class="container">
       <div class="title">Aktuelles</div>
       <div class="row w-100">
           <?php
           import('news', [
               "class" => '',
               "date" => '',
               "title" => 'Unser neues Programm für Schlaganfall',
               "image" => "../Img/news-1.jpg",
               "description" => '
                        <p>
                            Is ini que conse vendae sunt fugitio illab ipsum conseque lam sapis es none eturitas...

                        </p>
                         ',
               "btnName" => 'Mehr erfahren >',
               "btnLink" => 'javascript:void(0)'
           ]);

           ?>



           <!--  -->


           <?php
           import('news', [
               "class" => 'bg-blue',
               "date" => '',
               "title" => 'Messe',
               "description" => '
            <p>
                Is ini que conse vendae
                sunt fugitio illab ipsum
                conseque lam sapis es
                none eturitas...
            </p>
    ',
               "btnName" => 'Mehr erfahren >',
               "btnLink" => 'javascript:void(0)'
           ]);

           ?>



           <?php
           import('news', [
               "class" => '',
               "date" => '',
               "title" => 'Thema 4',
               "description" => '
                        <p>
                        Is ini que conse vendae
                        sunt fugitio illab ipsum
                        conseque lam sapis es
                        none eturitas...
                        </p>
    ',
               "btnName" => 'Mehr erfahren >',
               "btnLink" => 'javascript:void(0)'
           ]);

           ?>

       </div>

   </div>
</section>
