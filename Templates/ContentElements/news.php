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
    <div class="row infos-news">
        <?php if ($image!='') {?>
            <div class="col-md-6 left-side">
                <img src="<?php echo $image; ?>" alt="">
            </div>
        <?php } ?>
            <div class="col-md-6 right-side">
                <div class="description">
                    <?php echo $description; ?>
                </div>
                <div class="more-news">
                    <a href="<?php echo $btnLink; ?>" class="btn-more"><?php echo $btnName; ?></a>
                </div>
            </div>
    </div>
</div>

