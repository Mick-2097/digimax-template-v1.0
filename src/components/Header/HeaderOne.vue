<template>
    <header id="header">
        <!-- Navbar -->
        <nav data-aos="zoom-out" data-aos-delay="800" class="navbar navbar-expand">
            <div class="container header">
                <!-- Navbar Brand-->
                <a class="navbar-brand" href="/">
                    <img class="navbar-brand-regular" src="assets/img/logo-white.png" alt="brand-logo">
                    <img class="navbar-brand-sticky" src="assets/img/logo.png" alt="sticky brand-logo">
                </a>
                <div class="ml-auto"></div>
                <!-- Navbar -->
                <ul class="navbar-nav items">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Home <i class="fas fa-angle-down ml-1"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Multi-Page <i class="fas fa-angle-right ml-1"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="/" class="nav-link">Homepage 1</a></li>
                                    <li class="nav-item"><a href="/theme-two" class="nav-link">Homepage 2</a></li>
                                    <li class="nav-item"><a href="/theme-three" class="nav-link">Homepage 3</a></li>
                                    <li class="nav-item"><a href="/theme-four" class="nav-link">Homepage 4</a></li>
                                    <li class="nav-item"><a href="/theme-five" class="nav-link">Homepage 5</a></li>
                                    <li class="nav-item"><a href="/theme-six" class="nav-link">Homepage 6</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">One-Page <i class="fas fa-angle-right ml-1"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="/theme-seven" class="nav-link">Homepage 1</a></li>
                                    <li class="nav-item"><a href="/theme-eight" class="nav-link">Homepage 2</a></li>
                                    <li class="nav-item"><a href="/theme-nine" class="nav-link">Homepage 3</a></li>
                                    <li class="nav-item"><a href="/theme-ten" class="nav-link">Homepage 4</a></li>
                                    <li class="nav-item"><a href="/theme-eleven" class="nav-link">Homepage 5</a></li>
                                    <li class="nav-item"><a href="/theme-twelve" class="nav-link">Homepage 6</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="/about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="/services" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Pages <i class="fas fa-angle-down ml-1"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="/about" class="nav-link">About Us</a></li>
                            <li class="nav-item"><a href="/services" class="nav-link">Our Services</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Our Portfolio <i class="fas fa-angle-right ml-1"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="/portfolio-grid" class="nav-link">Portfolio Grid</a></li>
                                    <li class="nav-item"><a href="/portfolio-minimal" class="nav-link">Portfolio Minimal</a></li>
                                    <li class="nav-item"><a href="/portfolio-no-gap" class="nav-link">Portfolio No Gap</a></li>
                                    <li class="nav-item"><a href="/portfolio-masonry" class="nav-link">Portfolio Masonry</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a href="/team" class="nav-link">Our Team</a></li>
                            <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                            <li class="nav-item"><a href="/404" class="nav-link">404</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Blog Pages <i class="fas fa-angle-down ml-1"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Blog Grid <i class="fas fa-angle-right ml-1"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="/blog-two-column" class="nav-link">Grid 2 Column</a></li>
                                    <li class="nav-item"><a href="/blog-three-column" class="nav-link">Grid 3 Column</a></li>
                                    <li class="nav-item"><a href="/blog-left-sidebar" class="nav-link">Left Sidebar</a></li>
                                    <li class="nav-item"><a href="/blog-right-sidebar" class="nav-link">Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Blog Single <i class="fas fa-angle-right ml-1"></i></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="/blog-details-left-sidebar" class="nav-link">Single Left Sidebar</a></li>
                                    <li class="nav-item"><a href="/blog-details-right-sidebar" class="nav-link">Single Right Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- Navbar Icons -->
                <ul class="navbar-nav icons">
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#search">
                            <i class="fas fa-search"></i>
                        </a>
                    </li>
                    <li class="nav-item social">
                        <a href="#" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item social">
                        <a href="#" class="nav-link"><i class="fab fa-twitter"></i></a>
                    </li>
                </ul>

                <!-- Navbar Toggler -->
                <ul class="navbar-nav toggle">
                    <li class="nav-item">
                        <a href="#" class="nav-link" data-toggle="modal" data-target="#menu">
                            <i class="fas fa-bars toggle-icon m-0"></i>
                        </a>
                    </li>
                </ul>

                <!-- Navbar Action Button -->
                <ul class="navbar-nav action">
                    <li class="nav-item ml-3">
                        <a href="#" class="btn ml-lg-auto btn-bordered-white"><i class="fas fa-paper-plane contact-icon mr-md-2"></i>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>