import React from 'react'
import SocialMeta from '../components/SocialMeta'
import SponsorationLayout from '../components/Sponsorship/Layout'
import Header from '../components/Sponsorship/Header'
import PastSummary from '../components/Sponsorship/PastSummary'
import Attendees from '../components/Sponsorship/Attendees'
import Reach from '../components/Sponsorship/Reach'
import NextYear from '../components/Sponsorship/NextYear'
import PastSponsors from '../components/Sponsorship/PastSponsors'
import SponsorGallery from '../components/Sponsorship/SponsorGallery'
import Packages from '../components/Sponsorship/Packages'
import Perks from '../components/Sponsorship/Perks'
import Contact from '../components/Sponsorship/Contact'
import Impressum from '../components/Sponsorship/Impressum'


import GuideLines from '../components/GuideLines'
import styles from './sponsorship.module.scss'

const IndexPage = () => (
  <><SponsorationLayout className={styles.sponsoration}>
    <SocialMeta image="social_card_sponsorship.jpg" />
    <Header />
    <PastSummary />
    <Attendees />
    <Reach />
    <PastSponsors />
    <SponsorGallery />
    <NextYear />
    <Packages />
    <Perks />
    <Contact />
    <Impressum />
  </SponsorationLayout>
  <GuideLines />
  </>
)

export default IndexPage
