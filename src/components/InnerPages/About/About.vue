<template>
  <div>
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <BreadcrumbSection />
      <AboutUsSection />
      <GoalSection />
      <TeamSection />
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
import BreadcrumbSection from '../../Breadcrumb/About'
import AboutUsSection from '../../AboutUs/AboutUs'
import GoalSection from '../../Goal/Goal'
import TeamSection from '../../Team/TeamOne'
import ContactSection from '../../Contact/ContactOne'
import CtaSection from '../../Cta/Cta'
import FooterSection from '../../Footer/FooterOne'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
  name: 'About',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    AboutUsSection,
    GoalSection,
    TeamSection,
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