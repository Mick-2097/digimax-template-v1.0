<template>
  <div>
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <BreadcrumbSection />
      <ServiceSection />
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
import BreadcrumbSection from '../../Breadcrumb/Services'
import ServiceSection from '../../Services/ServiceSeven'
import ReviewSection from '../../Reviews/ReviewOne'
import ContactSection from '../../Contact/ContactOne'
import CtaSection from '../../Cta/Cta'
import FooterSection from '../../Footer/FooterOne'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
  name: 'Services',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    ServiceSection,
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