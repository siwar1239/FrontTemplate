<?php
$class = isset($class) ? $class : '';
$date = isset($date) ? $date : '';
$title = isset($title) ? $title : '';
$subTitle = isset($subTitle) ? $subTitle : '';
$image = isset($image) ? $image : '';
$description = isset($description) ? $description : '';
$btnLink = isset($btnLink) ? $btnLink : '';
$btnName = isset($btnName) ? $btnName : '';

?>

<div class="news <?php echo $class; ?> col-md-4 col-lg-4 col-xs-12">
    <div class="title_news">
        <?php echo $title; ?>
    </div>

</div>

