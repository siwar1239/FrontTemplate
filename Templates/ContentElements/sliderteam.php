<?php $image = isset($image) ? $image : ''; ?>

<div class="container">
    <div class="row">
        <div class="col-sm-10 col-md-offset-2">
            <div class="ce-slider">

                <?php foreach ($slides as $slide) { ?>
                    <div class="slide">
                        <a href="<?php echo $slide['image']; ?>" data-fancybox="fancyval-1" title="" data-toolbar=false data-infobar=false>
                            <img src="<?php echo $slide['image']; ?>" alt="" class="slide-image">
                        </a>
                        <img src="<?php echo $slide['image']; ?>" alt="" class="slide-image visible-on-mobile">
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</div>