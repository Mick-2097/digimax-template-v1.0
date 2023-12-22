<template>
  <div class="homepage-6 rtl">
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <ServiceSection />
      <ContentOneSection />
      <ContentFourSection />
      <ServiceOneSection />
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
import HeaderSection from '../components/Header/HeaderOne'
import HeroSection from '../components/Hero/HeroSix'
import ServiceSection from '../components/Services/ServiceFive'
import ContentOneSection from '../components/Content/ContentOne'
import ContentFourSection from '../components/Content/ContentFour'
import ServiceOneSection from '../components/Services/ServiceOne'
import PricingSection from '../components/Pricing/PricingTwo'
import ReviewSection from '../components/Reviews/ReviewOne'
import ContactSection from '../components/Contact/ContactOne'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterOne'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeSix',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    ServiceSection,
    ContentOneSection,
    ContentFourSection,
    ServiceOneSection,
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