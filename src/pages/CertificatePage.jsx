import React from 'react'
import Certificate from '../components/certificate/Certificate'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const CertificatePage = (props) => {
  return (
    <div>
            <Navbar {...props}/>
            <Certificate/>
            <Footer/>
    </div>
  )
}

export default CertificatePage