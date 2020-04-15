<?php
$current_page = isset($current_page) ? $current_page : '';

?>
<header id="header">
    <div class="container-fluid head-top">
        <div class="container">
            aaaaaaaaaaa
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3 logo">
                <a href="01-home.php" title="logo">
                    <img src="../../Img/logo_header.jpg" class="py-3" >
                </a>
            </div>
            <div class="col-sm-9 col-md-9  col-lg-9 main-menu-items">
                <div class="mobile-nav-opener">
                    <div id="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="main-menu">
                    <div class="main-menu-navs semi-white-bg">
                        <div class="main-nav">
                            <nav id="main-navigation">
                                <ul class="first-level-menu">
                                    <li class="has-dropdown <?php echo $current_page == 'home' ? 'active' : ''; ?>">
                                        <a href="#">Unsere Versorgungsprogramme<span class="open-mobile-menu"></span> </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" title="news">news</a></li>
                                            <li><a href="#" title="about us">about us</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown <?php echo $current_page == 'Research' ? 'active' : ''; ?>">
                                        <a href="#">Anwenderberichte <span class="open-mobile-menu"></span></a>
                                        <ul class="dropdown-menu">
                                            <li class="has-dropdown"><a href="#" title="Research" >Research</a>
                                                <ul>
                                                    <li><a href="#" title="Medizintechnik" >Medizintechnik</a></li>
                                                    <li><a href="#" title="Laseroptische Medizintechnik" >Laseroptische Medizintechnik</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#" title="Projects" >Projects</a></li>
                                        </ul>

                                    </li>
                                    <li class=" <?php echo $current_page == 'Advancement' ? 'active' : ''; ?>"><a href="#" title="Advancement">Über das WZAT</a></li>
                                    <li class="<?php echo $current_page == 'Kontakt' ? 'active' : ''; ?>"><a href="#" title="Kontakt">Kontakt</a></li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
