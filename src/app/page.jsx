import Navbar from '@/components/campaus_componets/Bouttombar'
import BrandJourney from '@/components/campaus_componets/BrandJourney'
import CampaignCTASection from '@/components/campaus_componets/CampaignCTASection'
import CampusFootprintSystem from '@/components/campaus_componets/CampusFootprintSystem'
import CampusHero from '@/components/campaus_componets/CampusHero'
import EngagementFeatures from '@/components/campaus_componets/EngagementFeatures'
import Footer from '@/components/campaus_componets/Footer'
import ProductSlider from '@/components/campaus_componets/Product'
import StatsComponent from '@/components/campaus_componets/StatsComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <CampusHero />
      <ProductSlider />
      <StatsComponent />
      <EngagementFeatures />
      <BrandJourney />
      <CampusFootprintSystem />
      <CampaignCTASection />
      <Footer />


    </div>
  )
}

export default page