<template>
    <div class="blog">
        <ScrollupSection />
        <div class="main overflow-hidden">
            <HeaderSection />
            <BreadcrumbSection />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <Blogs />
                    <Pagination />
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
import BreadcrumbSection from '../../Breadcrumb/BlogThreeColumn'
import Blogs from '../BlogTwo/BlogTwo'
import Pagination from '../Pagination/Pagination'
import FooterSection from '../../Footer/FooterThree'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
    name: 'BlogThreeColumn',
    components: {
        ScrollupSection,
        HeaderSection,
        BreadcrumbSection,
        Blogs,
        Pagination,
        FooterSection,
        ModalSearchSection,
        ModalMenuSection
    }
}
</script>

<style>

</style>