 import CleanlinessFeature from '@/components/CleanlinessFeature'
import CorporateAndBuilding from '@/components/CorporateAndBuilding'
import Navbar from '@/components/Navbar'
import ProductDeal from '@/components/ProductDeal'
import Slider from '@/components/Slider'
import Testimonial from '@/components/Testimonial'
import WholeshellRetails from '@/components/WholeshellRetails'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
 
 const page = () => {
   return (
     <div> 
      <Navbar/>
      <Slider/>
      <WholeshellRetails/>
      <CleanlinessFeature/>
      <CorporateAndBuilding/>
      <WhyChooseUs/>
      <ProductDeal/>
      <Testimonial/>
    
      
     </div>
   )
 }
 
 export default page