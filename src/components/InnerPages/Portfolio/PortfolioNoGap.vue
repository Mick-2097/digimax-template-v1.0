<template>
  <div>
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <BreadcrumbSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
      <CtaSection />
      <FooterSection />
      <ModalSearchSection />
      <ModalMenuSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import HeaderSection from '../../Header/HeaderOne'
import BreadcrumbSection from '../../Breadcrumb/PortfolioNoGap'
import PortfolioSection from '../../Portfolio/PortfolioFive'
import ReviewSection from '../../Reviews/ReviewOne'
import ContactSection from '../../Contact/ContactOne'
import CtaSection from '../../Cta/Cta'
import FooterSection from '../../Footer/FooterOne'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
  name: 'PortfolioNoGap',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    PortfolioSection,
    ReviewSection,
    ContactSection,
    CtaSection,
    FooterSection,
    ModalSearchSection,
    ModalMenuSection
  }
}
</script>

<style>

</style>