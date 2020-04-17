<?php $image = isset($image) ? $image : ''; ?>

                <?php foreach ($slides as $slide) { ?>
                        <a href="<?php echo $slide['image']; ?>" data-fancybox="fancyval-1" title="" data-toolbar=false data-infobar=false>
                            <img src="<?php echo $slide['image']; ?>">
                        </a>
                        <img src="<?php echo $slide['image']; ?>" alt="" class="slide-image visible-on-mobile">
                <?php } ?>
