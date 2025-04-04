 import CleanlinessFeature from '@/components/CleanlinessFeature'
import CorporateAndBuilding from '@/components/CorporateAndBuilding'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import WholeshellRetails from '@/components/WholeshellRetails'
import React from 'react'
 
 const page = () => {
   return (
     <div> 
      <Navbar/>
      <Slider/>
      <WholeshellRetails/>
      <CleanlinessFeature/>
      <CorporateAndBuilding/>
     </div>
   )
 }
 
 export default page