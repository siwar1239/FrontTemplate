<?php require_once '../Inc/functions.php'; //function import()?>
<?php include 'Globals/head.php'; ?>
<main>
    <style>
        @media (min-width: 1200px)
        {
            .container, .container-sm, .container-md, .container-lg, .container-xl {
                max-width: 940px;
            }
        }
    </style>


    <div class="lateral-menu">
            <a href="#" class="btn info_anfordern"></i><span>Information anfordern ></span></a>
    </div>



    <?php include 'Partials/header.php'; ?>
    <?php include 'ContentElements/slider.php'; ?>
    <?php include 'ContentElements/blocks.php'; ?>
    <?php
    /* import('button', [
        "content" => 'Information oder Broschüre anfordern >'
    ]);
    */
    ?>
    <?php include 'ContentElements/textbody.php'; ?>
    <?php include 'ContentElements/aktuelles.php'; ?>
    <?php
    import('news', [
        "class" => '',
        "date" => '25.02.2019',
        "title" => 'Neue Messmöglichkeiten optischer Beschichtungen',
        "subTitle" => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
        "image" => "../Img/news-1.jpg",
        "description" => '
                        <p>
                            Der heutigen Komplexität vieler optischen Beschichtungen für industrielle Anwendungen werden
                            verfügbare Qualitätskontrollen nicht mehr ausreichend gerecht, z. B. bei der Absolutgenauigkeit,
                            der spektralen Auflösung und den Messzeiten.
                        </p>
                        <p>
                            Wissenschaftler am Laser Zentrum Hannover wollen in dem Projektvorhaben "Entwicklung...
                        </p>
    ',
        "btnName" => 'weiterlesen',
        "btnLink" => 'javascript:void(0)'
    ]);

    ?>



    <!--  -->


    <?php
    import('news', [
        "class" => 'bg-blue',
        "date" => '18.02.2019',
        "title" => 'Fortschritt in der Phasenkontrastmikroskopie - Ergebnisse des IGF-Projekts APERITIf',
        "subTitle" => 'Eine Zusammenfassung der Ergebnisse sowie die IGF-Erfolgsnote finden Sie auf der Projektseite.',
        "image" => "../Img/news-1.jpg",
        "description" => '
            <p>
                Das IGF-Projekt "Adaptive Phasenkontrastmikroskopie zur Eliminierung des Randeffektes in Mikrotiterplatten" (APERITIf; 19083 N) des Fraunhofer-Instituts für Produktionstechnologie IPT in Aachen wurde am 30.06.2018 erfolgreich abgeschlossen. Unter der Leitung von Niels König konnte das Projektziel - die vollständige Wiederherstellung des Phasenkontrasts durch eine automatische optische Kompensation der unerwünschten Flüssigkeitslinse...
            </p>
    ',
        "btnName" => 'weiterlesen',
        "btnLink" => 'javascript:void(0)'
    ]);

    ?>



    <?php
    import('news', [
        "class" => '',
        "date" => '08.02.2019',
        "title" => 'AiF-Pressemitteilung zu IGF-Projekt Opti-Bond',
        "subTitle" => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
        "image" => "../Img/news-1.jpg",
        "description" => '
                        <p>
                            Integriert optische Systeme finden Verwendung in ganz unterschiedlichen Bereichen. Von der Lasertechnik über Medizin und Mobilität bis hin zu Luft- und Raumfahrt. Gerade hier werden funktionell Mikro- und Nanostrukturen zu hochpräzisen Messungen in extremen Umgebungsbedingungen eingesetzt. Entsprechend hoch sind die Anforderungen an die Verbindung der optischen Flächen, das so genannte Bonden...
                        </p>
    ',
        "btnName" => 'weiterlesen',
        "btnLink" => 'javascript:void(0)'
    ]);

    ?>
    <?php include 'ContentElements/platzhalter.php'; ?>
    <?php include 'ContentElements/qualitypromise.php'; ?>
    <?php include 'ContentElements/team.php'; ?>
    <?php include 'ContentElements/logos.php'; ?>



</main>
<?php include 'Partials/footer.php'; ?>
<?php include 'Globals/foot.php'; ?>
