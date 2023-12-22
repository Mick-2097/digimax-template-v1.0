<template>
  <div>
    <ScrollupSection />
    <div class="main overflow-hidden">
      <HeaderSection />
      <BreadcrumbSection />
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
import BreadcrumbSection from '../../Breadcrumb/Team'
import TeamSection from '../../Team/TeamTwo'
import ContactSection from '../../Contact/ContactThree'
import CtaSection from '../../Cta/Cta'
import FooterSection from '../../Footer/FooterOne'
import ModalSearchSection from '../../Modal/ModalSearch/ModalSearch'
import ModalMenuSection from '../../Modal/ModalMenu/ModalMenu'

export default {
  name: 'Team',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
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