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

<div class="ce-news <?php echo $class; ?>">
    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-md-offset-2">
                <div class="row">
                    <div class="col-md-12">
                        <div class="date"><?php echo $date; ?></div>
                        <h3 class="title">
                            <?php echo $title; ?>
                        </h3>
                        <h4 class="sub-title">
                            <?php echo $subTitle; ?>
                        </h4>
                    </div>
                </div>

                <div class="row infos-news">
                    <div class="col-md-6 left-side"><img src="<?php echo $image; ?>" alt=""></div>
                    <div class="col-md-6 right-side">
                        <div class="description">
                            <?php echo $description; ?>
                        </div>
                        <div class="more-news">
                            <a href="<?php echo $btnLink; ?>" class="btn"><?php echo $btnName; ?></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
