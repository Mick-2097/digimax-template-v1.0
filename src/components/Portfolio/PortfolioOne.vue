<template>
    <section id="portfolio" class="portfolio-area overflow-hidden ptb_100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-7">
                    <!-- Section Heading -->
                    <div class="section-heading text-center">
                        <h2>Our Recent Works</h2>
                        <p class="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        <p class="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-12">
                    <!-- Portfolio Menu -->
                    <div class="portfolio-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4 mb-md-5" data-toggle="buttons">
                        <label class="btn active d-table text-uppercase p-2">
                            <input type="radio" value="all" checked class="portfolio-btn">
                            <span>All</span>
                        </label>
                        <label class="btn d-table text-uppercase p-2">
                            <input type="radio" value="marketing" class="portfolio-btn">
                            <span>Marketing</span>
                        </label>
                        <label class="btn d-table text-uppercase p-2">
                            <input type="radio" value="agency" class="portfolio-btn">
                            <span>Agency</span>
                        </label>
                        <label class="btn d-table text-uppercase p-2">
                            <input type="radio" value="seo" class="portfolio-btn">
                            <span>SEO</span>
                        </label>
                        <label class="btn d-table text-uppercase p-2">
                            <input type="radio" value="development" class="portfolio-btn">
                            <span>App Development</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Portfolio Items -->
            <div class="row items portfolio-items">
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["marketing","development"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_1.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">Digital Marketing</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["seo","development"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_2.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">App Development</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["marketing","agency"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_4.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">Content Management</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["agency","development","seo"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_3.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">Data Analysis</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["development","marketing","development"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_5.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">SEO Marketing</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4 portfolio-item" data-groups='["agency","development","marketing","seo"]'>
                    <!-- Single Case Studies -->
                    <div class="single-case-studies">
                        <!-- Case Studies Thumb -->
                        <a href="#">
                            <img src="assets/img/case_studies_6.jpg" alt="">
                        </a>
                        <!-- Case Studies Overlay -->
                        <a href="#" class="case-studies-overlay">
                            <!-- Overlay Text -->
                            <span class="overlay-text text-center p-3">
                                <h3 class="text-white mb-3">Marketing Strategy</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectet ur adipisicing elit.</p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <a href="#" class="btn btn-bordered mt-4">View More</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>