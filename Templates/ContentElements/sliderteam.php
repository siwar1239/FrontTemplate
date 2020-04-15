<?php $image = isset($image) ? $image : ''; ?>

<div class="container">
    <div class="row">
            <div class="ce-slider w-100">
                <?php foreach ($slides as $slide) { ?>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-12 slide w-100">
                        <a href="<?php echo $slide['image']; ?>" data-fancybox="fancyval-1" title="" data-toolbar=false data-infobar=false>
                            <img src="<?php echo $slide['image']; ?>" alt="" class="slide-image">
                        </a>
                        <img src="<?php echo $slide['image']; ?>" alt="" class="slide-image visible-on-mobile">
                    </div>
                <?php } ?>
            </div>
    </div>
</div>