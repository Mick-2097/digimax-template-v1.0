<template>
    <div class="blog blog-right">
        <ScrollupSection />
        <div class="main overflow-hidden">
            <HeaderSection />
            <BreadcrumbSection />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-9">
                            <Blogs />
                        </div>
                        <div class="col-12 col-lg-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection />
            <ModalSearchSection />
            <ModalMenuSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import HeaderSection from '../../Header/HeaderOne'
import BreadcrumbSection from '../../Breadcrumb/BlogDetailsRightSidebar'
import Sidebar from '../Sidebar/SidebarTwo'
import Blogs from '../BlogFour/BlogFour'
import FooterSection from '../../Footer/FooterThree'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
    name: 'BlogDetailsRightSidebar',
    components: {
        ScrollupSection,
        HeaderSection,
        BreadcrumbSection,
        Sidebar,
        Blogs,
        FooterSection,
        ModalSearchSection,
        ModalMenuSection
    }
}
</script>

<style>

</style>