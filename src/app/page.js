 import CleanlinessFeature from '@/components/CleanlinessFeature'
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
     </div>
   )
 }
 
 export default page