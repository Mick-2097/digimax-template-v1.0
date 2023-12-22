<template>
  <div class="homepage-2">
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <ServiceSection />
      <VideoSection />
      <PortfolioSection />
      <ContentOneSection />
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
import HeaderSection from '../components/Header/HeaderTwo'
import HeroSection from '../components/Hero/HeroTwo'
import ServiceSection from '../components/Services/ServiceTwo'
import VideoSection from '../components/Video/Video'
import PortfolioSection from '../components/Portfolio/PortfolioTwo'
import ContentOneSection from '../components/Content/ContentOne'
import PricingSection from '../components/Pricing/PricingTwo'
import ReviewSection from '../components/Reviews/ReviewOne'
import ContactSection from '../components/Contact/ContactOne'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterOne'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeTwo',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    ServiceSection,
    VideoSection,
    PortfolioSection,
    ContentOneSection,
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