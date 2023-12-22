<template>
  <div>
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <HeroSection />
      <PromoSection />
      <ContentOneSection />
      <ContentFourSection />
      <ServiceSection />
      <PortfolioSection />
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
import HeroSection from '../components/Hero/HeroOne'
import PromoSection from '../components/Promo/PromoOne'
import ContentOneSection from '../components/Content/ContentOne'
import ContentFourSection from '../components/Content/ContentFour'
import ServiceSection from '../components/Services/ServiceOne'
import PortfolioSection from '../components/Portfolio/PortfolioOne'
import PricingSection from '../components/Pricing/PricingOne'
import ReviewSection from '../components/Reviews/ReviewOne'
import ContactSection from '../components/Contact/ContactOne'
import CtaSection from '../components/Cta/Cta'
import FooterSection from '../components/Footer/FooterOne'
import ModalSearchSection from '../components/Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../components/Modal/ModalMenu/ModalMenu'

export default {
  name: 'ThemeOne',
  components: {
    ScrollupSection,
    HeaderSection,
    HeroSection,
    PromoSection,
    ContentOneSection,
    ContentFourSection,
    ServiceSection,
    PortfolioSection,
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