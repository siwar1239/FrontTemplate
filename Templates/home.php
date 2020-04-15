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
    <?php
    //************Slider team***************//
    import('sliderteam', [
        "slides" => [
            0 => [
                "image" => 'https://via.placeholder.com/921X413',
            ],
            1 => [
                "image" => 'https://via.placeholder.com/922X413',
            ]
        ]
    ]);
    ?>

</main>
<?php include 'Partials/footer.php'; ?>
<?php include 'Globals/foot.php'; ?>
