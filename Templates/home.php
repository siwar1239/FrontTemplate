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

    <?php include 'ContentElements/platzhalter.php'; ?>
    <?php include 'ContentElements/qualitypromise.php'; ?>
    <?php include 'ContentElements/team.php'; ?>
    <?php include 'ContentElements/logos.php'; ?>



</main>
<?php include 'Partials/footer.php'; ?>
<?php include 'Globals/foot.php'; ?>
