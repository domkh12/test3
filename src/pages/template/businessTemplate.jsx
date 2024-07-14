import React from 'react'
import NavbarComponent from '../../components/business/NavbarComponent'
import HeroSectionBusiness from '../../components/business/HeroSectionBusiness'
import ServiceSectionBusiness from '../../components/business/ServiceSectionBusiness'

const BusinessTemplate = () => {
  return (
    <div>
      <NavbarComponent/>
      <HeroSectionBusiness/>
      <ServiceSectionBusiness/>
    </div>
  )
}

export default BusinessTemplate
