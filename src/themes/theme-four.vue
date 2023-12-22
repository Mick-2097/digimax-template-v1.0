<template>
  <div class="homepage-4">
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <BrandingSection />
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
import HeaderSection from '../components/Header/HeaderOne'
import HeroSection from '../components/Hero/HeroFour'
import BrandingSection from '../components/Branding/Branding'
import ContentOneSection from '../components/Content/ContentOne'
import ContentFourSection from '../components/Content/ContentFour'
import ServiceSection from '../components/Services/ServiceFour'
import PricingSection from '../components/Pricing/PricingTwo'
import ReviewSection from '../components/Reviews/ReviewOne'
import ContactSection from '../components/Contact/ContactOne'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterOne'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeFour',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    BrandingSection,
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