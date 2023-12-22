import Vue from 'vue'
import Router from 'vue-router'
import ThemeOne from '@/themes/theme-one'
import ThemeTwo from '@/themes/theme-two'
import ThemeThree from '@/themes/theme-three'
import ThemeFour from '@/themes/theme-four'
import ThemeFive from '@/themes/theme-five'
import ThemeSix from '@/themes/theme-six'
import ThemeSeven from '@/themes/theme-seven'
import ThemeEight from '@/themes/theme-eight'
import ThemeNine from '@/themes/theme-nine'
import ThemeTen from '@/themes/theme-ten'
import ThemeEleven from '@/themes/theme-eleven'
import ThemeTwelve from '@/themes/theme-twelve'
import About from '@/components/InnerPages/About/About'
import Services from '@/components/InnerPages/Services/Services'
import PortfolioGrid from '@/components/InnerPages/Portfolio/PortfolioGrid'
import PortfolioMinimal from '@/components/InnerPages/Portfolio/PortfolioMinimal'
import PortfolioNoGap from '@/components/InnerPages/Portfolio/PortfolioNoGap'
import PortfolioMasonry from '@/components/InnerPages/Portfolio/PortfolioMasonry'
import Team from '@/components/InnerPages/Team/Team'
import Pricing from '@/components/InnerPages/Pricing/Pricing'
import Contact from '@/components/InnerPages/Contact/Contact'
import Error from '@/components/InnerPages/Error/404'
import BlogTwoColumn from '@/components/Blogs/BlogTwoColumn/BlogTwoColumn'
import BlogThreeColumn from '@/components/Blogs/BlogThreeColumn/BlogThreeColumn'
import BlogLeftSidebar from '@/components/Blogs/BlogLeftSidebar/BlogLeftSidebar'
import BlogRightSidebar from '@/components/Blogs/BlogRightSidebar/BlogRightSidebar'
import BlogDetailsLeftSidebar from '@/components/Blogs/BlogDetailsLeftSidebar/BlogDetailsLeftSidebar'
import BlogDetailsRightSidebar from '@/components/Blogs/BlogDetailsRightSidebar/BlogDetailsRightSidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ThemeEleven',
      component: ThemeEleven
    },
    {
      path: '/theme-two',
      name: 'ThemeTwo',
      component: ThemeTwo
    },
    {
      path: '/theme-three',
      name: 'ThemeThree',
      component: ThemeThree
    },
    {
      path: '/theme-four',
      name: 'ThemeFour',
      component: ThemeFour
    },
    {
      path: '/theme-five',
      name: 'ThemeFive',
      component: ThemeFive
    },
    {
      path: '/theme-six',
      name: 'ThemeSix',
      component: ThemeSix
    },
    {
      path: '/theme-seven',
      name: 'ThemeSeven',
      component: ThemeSeven
    },
    {
      path: '/theme-eight',
      name: 'ThemeEight',
      component: ThemeEight
    },
    {
      path: '/theme-nine',
      name: 'ThemeNine',
      component: ThemeNine
    },
    {
      path: '/theme-ten',
      name: 'ThemeTen',
      component: ThemeTen
    },
    {
      path: '/theme-eleven',
      name: 'ThemeEleven',
      component: ThemeEleven
    },
    {
      path: '/theme-twelve',
      name: 'ThemeTwelve',
      component: ThemeTwelve
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/portfolio-grid',
      name: 'PortfolioGrid',
      component: PortfolioGrid
    },
    {
      path: '/portfolio-minimal',
      name: 'PortfolioMinimal',
      component: PortfolioMinimal
    },
    {
      path: '/portfolio-no-gap',
      name: 'PortfolioNoGap',
      component: PortfolioNoGap
    },
    {
      path: '/portfolio-masonry',
      name: 'PortfolioMasonry',
      component: PortfolioMasonry
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/404',
      name: 'Error',
      component: Error
    },
    {
      path: '/blog-two-column',
      name: 'BlogTwoColumn',
      component: BlogTwoColumn
    },
    {
      path: '/blog-three-column',
      name: 'BlogThreeColumn',
      component: BlogThreeColumn
    },
    {
      path: '/blog-left-sidebar',
      name: 'BlogLeftSidebar',
      component: BlogLeftSidebar
    },
    {
      path: '/blog-right-sidebar',
      name: 'BlogRightSidebar',
      component: BlogRightSidebar
    },
    {
      path: '/blog-details-left-sidebar',
      name: 'BlogDetailsLeftSidebar',
      component: BlogDetailsLeftSidebar
    },
    {
      path: '/blog-details-right-sidebar',
      name: 'BlogDetailsRightSidebar',
      component: BlogDetailsRightSidebar
    }
  ]
})