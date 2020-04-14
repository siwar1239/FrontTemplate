<?php
$current_page = isset($current_page) ? $current_page : '';

?>
<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-sm-3 col-md-3 col-lg-3 logo">
                <a href="01-home.php" title="logo"><img src="../Img/FOM-Logo.svg" alt="Logo"/> </a>
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
                        <div class="meta-nav">
                            <ul>
                                <li> <div class="search-form">
                                        <form action="#" method="get">
                                            <span class="icon-search"></span>
                                            <input type="text" name="q" placeholder="Suche"/>
                                        </form>
                                    </div>
                                </li>
                                <li class="<?php echo $current_page == 'Kontakt' ? 'active' : ''; ?>"><a href="#" title="Kontakt">Kontakt</a></li>
                            </ul>
                        </div>
                        <div class="main-nav">
                            <nav id="main-navigation">
                                <ul class="first-level-menu">
                                    <li class="has-dropdown <?php echo $current_page == 'home' ? 'active' : ''; ?>">
                                        <a href="#">f.o.m. <span class="open-mobile-menu"></span> </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" title="news">news</a></li>
                                            <li><a href="#" title="about us">about us</a></li>
                                            <li><a href="#" title="club structure">club structure</a></li>
                                            <li><a href="#" title="Board">Board</a></li>
                                            <li><a href="#" title="Scientific Advisory Board">Scientific Advisory Board</a></li>
                                            <li><a href="#" title="department">department</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown <?php echo $current_page == 'Research' ? 'active' : ''; ?>">
                                        <a href="#">Research <span class="open-mobile-menu"></span></a>
                                        <ul class="dropdown-menu">
                                            <li class="has-dropdown"><a href="#" title="Research" >Research</a>
                                                <ul>
                                                    <li><a href="#" title="Medizintechnik" >Medizintechnik</a></li>
                                                    <li><a href="#" title="Laseroptische Medizintechnik" >Laseroptische Medizintechnik</a></li>
                                                    <li><a href="#" title="Pflege-unterstützende Technologien, Robotik  in der Pflege" >Pflege-unterstützende Technologien, Robotik  in der Pflege</a></li>
                                                    <li><a href="#" title="3D-Visualisierung, Monitoring" >3D-Visualisierung, Monitoring</a></li>
                                                    <li><a href="#" title="Spektroskopie, Detektion, Diagnostik mit optischen Methoden" >Spektroskopie, Detektion, Diagnostik mit optischen Methoden</a></li>
                                                    <li><a href="#" title="Optische Messtechnik, Sensorik" >Optische Messtechnik, Sensorik</a></li>
                                                    <li><a href="#" title="Laserbearbeitung von Materialien, Funktionali-sierung von Oberflächen" >Laserbearbeitung von Materialien, Funktionali-sierung von Oberflächen</a></li>
                                                    <li><a href="#" title="Hochtechnologie-Materialien" >Hochtechnologie-Materialien</a></li>
                                                    <li><a href="#" title="Präzisionsmechanik für optische Anwendungen / mit optischen Methoden" >Präzisionsmechanik für optische Anwendungen / mit optischen Methoden</a></li>
                                                    <li><a href="#" title="Meta-Themen: Daten-verarbeitung, Fehler-analyse, Prozessketten, Algorithmenentwicklung" >Meta-Themen: Daten-verarbeitung, Fehler-analyse, Prozessketten, Algorithmenentwicklung</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#" title="Projects" >Projects</a></li>
                                        </ul>

                                    </li>
                                    <li class=" <?php echo $current_page == 'Advancement' ? 'active' : ''; ?>"><a href="#" title="Advancement">Advancement</a></li>
                                    <li class=" <?php echo $current_page == 'Transfer' ? 'active' : ''; ?>"><a href="#" title="Transfer">Transfer</a></li>
                                    <li class="has-dropdown <?php echo $current_page == 'Network' ? 'active' : ''; ?>"><a
                                                href="#">Network <span class="open-mobile-menu"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" title="industry partner" >industry partner</a></li>
                                            <li><a href="#" title="research partner" >research partner</a></li>
                                            <li><a href="#" title="FAM" >FAM</a></li>
                                            <li><a href="#" title="competence" >competence</a></li>
                                        </ul>
                                    </li>
                                    <li class="has-dropdown <?php echo $current_page == 'Dates' ? 'active' : ''; ?>"><a
                                                href="#">Dates <span class="open-mobile-menu"></span></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#" title="Dates" >Dates</a></li>
                                            <li><a href="#" title="Events" >Events</a></li>
                                        </ul>
                                    </li>
                                    <li class=" <?php echo $current_page == 'Service' ? 'active' : ''; ?>"><a href="#" title="Service">Service</a></li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</header>