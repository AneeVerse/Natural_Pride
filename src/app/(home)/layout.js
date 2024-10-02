import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
         <NextTopLoader
         color="#8fae15"
         initialPosition={0.08}
         height={3}
         showSpinner={false}
         easing="ease"
         speed={500}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         />
        <Header/>
        {children}
        <Footer/>
      
    </div>
  )
}

export default layout
