<template>
    <article class="single-blog-details">
        <!-- Blog Thumb -->
        <div class="blog-thumb">
            <a href="#"><img src="assets/img/blog_7.jpg" alt=""></a>
        </div>
        <!-- Blog Content -->
        <div class="blog-content digimax-blog p-3">
            <!-- Meta Info -->
            <div class="meta-info d-flex flex-wrap align-items-center py-2">
                <ul>
                    <li class="d-inline-block p-2">By <a href="#">Anna Swford</a></li>
                    <li class="d-none d-md-inline-block p-2"><a href="#">05 Feb, 2020</a></li>
                    <li class="d-inline-block p-2"><a href="#">2 Comments</a></li>
                </ul>
                <!-- Blog Share -->
                <div class="blog-share ml-auto d-none d-sm-block">
                    <!-- Social Icons -->
                    <div class="social-icons d-flex justify-content-center">
                        <a class="bg-white facebook" href="#">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="bg-white twitter" href="#">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="bg-white google-plus" href="#">
                            <i class="fab fa-google-plus-g"></i>
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Blog Details -->
            <div class="blog-details">
                <h3 class="blog-title py-3"><a href="#">Blog Content Here</a></h3>
                <p class="d-none d-sm-block">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <p class="d-block d-sm-none">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                <blockquote class="blockquote px-4 py-3 my-3 ml-4">
                    <p class="font-italic d-none d-sm-block">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                    <p class="font-italic d-block d-sm-none">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </blockquote>
                <p class="d-none d-sm-block">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <p class="d-block d-sm-none">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.</p>
            </div>
        </div>
        <!-- Blog Comments -->
        <div class="blog-comments p-3">
            <!-- Admin -->
            <div class="admin media py-4">
                <!-- Admin Thumb -->
                <div class="admin-thumb avatar-lg">
                    <img class="rounded-circle" src="assets/img/avatar_1.png" alt="">
                </div>
                <!-- Admin Content -->
                <div class="admin-content media-body pl-3 pl-sm-4">
                    <h4 class="admin-name mb-2"><a href="#">Junaid Hasan</a></h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
            <!-- Comments -->
            <div class="comments mt-4 mb-3">
                <!-- Comments Title -->
                <h3 class="comments-title text-uppercase text-left text-lg-right mb-3">Recent Comments</h3>
                <!-- Single Comments -->
                <div class="single-comments media p-4">
                    <!-- Comments Thumb -->
                    <div class="comments-thumb avatar-lg">
                        <img class="rounded-circle" src="assets/img/avatar_2.png" alt="">
                    </div>
                    <!-- Comments Content -->
                    <div class="comments-content media-body pl-3">
                        <h5 class="d-flex mb-2">
                            <a href="#">Jassica William</a>
                            <a href="#" class="ml-auto">Reply</a>
                        </h5>
                        <p class="d-none d-lg-block">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        <p class="d-block d-lg-none">Many desktop publishing packages and web page editors now use.</p>
                    </div>
                </div>
                <!-- Single Comments -->
                <div class="single-comments media p-4">
                    <!-- Comments Thumb -->
                    <div class="comments-thumb avatar-lg">
                        <img class="rounded-circle" src="assets/img/avatar_3.png" alt="">
                    </div>
                    <!-- Comments Content -->
                    <div class="comments-content media-body pl-3">
                        <h5 class="d-flex mb-2">
                            <a href="#">Junaid Hasan</a>
                            <a href="#" class="ml-auto">Reply</a>
                        </h5>
                        <p class="d-none d-lg-block">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        <p class="d-block d-lg-none">But I must explain to you how all this mistaken idea.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Contact -->
        <div class="blog-contact p-3">
            <!-- Contact Title -->
            <h3 class="comments-title text-uppercase text-left text-lg-right mb-3">Post your Comments</h3>
            <!-- Comment Box -->
            <div class="contact-box comment-box">
                <form method="POST" action="#">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control" name="message" placeholder="Message" required="required"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-bordered" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </article>
</template>

<script>
export default {

}
</script>

<style>

</style>