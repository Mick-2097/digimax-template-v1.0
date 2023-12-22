<template>
    <div class="blog">
        <ScrollupSection />
        <div class="main overflow-hidden">
            <HeaderSection />
            <BreadcrumbSection />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                            <Sidebar />
                        </div>
                        <div class="col-12 col-lg-9">
                            <Blogs />
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
import BreadcrumbSection from '../../Breadcrumb/BlogDetailsLeftSidebar'
import Sidebar from '../Sidebar/SidebarOne'
import Blogs from '../BlogThree/BlogThree'
import FooterSection from '../../Footer/FooterThree'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
    name: 'BlogDetailsLeftSidebar',
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