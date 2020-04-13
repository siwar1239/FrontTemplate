<style>
    .content {
        width: 600px;
        margin: 100px auto;
        font-family: Arial, sans-serif;

    }

    .content ul {
        list-style: none;
        margin: 0;
        padding: 0;
        background: #F4F4F4;
    }

    .content li {

        border-bottom: #FFF solid 5px;
    }

    .content li:hover {
        background-color: #122841;
    }

    .content li:hover a {
        color: #fff;
    }

    .content a {
        text-decoration: none;
        color: #122841;
        font-weight: bold;
        font-family: Arial, sans-serif;
        padding: 20px;
        width: 100%;
        display: block;
    }

    .content li:last-child {

        border-bottom: none;
    }
</style>

<div class="content">
    <h1>Pages list</h1>
    <?php

    $t = dirname($_SERVER['SCRIPT_NAME']);
    if ($handle = opendir('.')) {
        echo '<ul>';
        while (false !== ($entry = readdir($handle))) {
            $ext = substr($entry, strrpos($entry, '.') + 1);
            if ($entry != "." && $entry != ".." && in_array($ext, array("php", "html")) && $entry != basename($_SERVER["SCRIPT_FILENAME"])) {

                echo '<li><a href="/Templates/' . $entry . '" target="_blank">' . $entry . '</a></li>';
            }
        }
        echo '</ul>';
        closedir($handle);
    }
    ?>
</div>
