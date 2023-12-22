<template>
  <div class="homepage-3">
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <PromoSection />
      <ContentOneSection />
      <ContentFourSection />
      <ServiceSection />
      <PricingSection />
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
import ScrollupSection from '../components/Scrollup/Scrollup'
import HeaderSection from '../components/Header/HeaderThree'
import HeroSection from '../components/Hero/HeroThree'
import PromoSection from '../components/Promo/PromoTwo'
import ContentOneSection from '../components/Content/ContentTwo'
import ContentFourSection from '../components/Content/ContentFour'
import ServiceSection from '../components/Services/ServiceThree'
import PricingSection from '../components/Pricing/PricingTwo'
import ReviewSection from '../components/Reviews/ReviewTwo'
import ContactSection from '../components/Contact/ContactOne'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterOne'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeNine',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    PromoSection,
    ContentOneSection,
    ContentFourSection,
    ServiceSection,
    PricingSection,
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