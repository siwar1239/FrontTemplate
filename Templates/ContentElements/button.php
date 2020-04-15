<?php

$content = isset($content) ? $content : '';

?>
<?php if ($content) { ?>
    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-md-offset-2">
                <div class="ce-button">
                    <?php if ($content) { ?>
                        <a href="#" class="btn"><?php echo $content; ?></a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>