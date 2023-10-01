import React from 'react'
import LeftCon from '../components/contact/LeftCon'
import RightCon from '../components/contact/RightCon'
import Footer from '../components/footer/Footer'

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className='bgAll sideBarFreez'>
        <h1 className='text-red-600 text-center py-4 text-5xl font-bold'>Contact Us</h1>
        <div className='container mx-auto px-5 gap-10 grid lg:grid-cols-3'>
          <LeftCon/>
          <RightCon/>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default ContactPage