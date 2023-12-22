<template>
  <div class="homepage-5 dark">
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <ServiceSection />
      <ContentOneSection />
      <ContentFourSection />
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
import HeroSection from '../components/Hero/HeroFive'
import ServiceSection from '../components/Services/ServiceSix'
import ContentOneSection from '../components/Content/ContentThree'
import ContentFourSection from '../components/Content/ContentFive'
import PricingSection from '../components/Pricing/PricingThree'
import ReviewSection from '../components/Reviews/ReviewThree'
import ContactSection from '../components/Contact/ContactTwo'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterTwo'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeFive',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    ServiceSection,
    ContentOneSection,
    ContentFourSection,
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