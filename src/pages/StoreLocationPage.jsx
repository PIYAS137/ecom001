import React, { useState } from 'react'
import LeftLoc from '../components/location/LeftLoc'
import RightLoc from '../components/location/RightLoc'
import Footer from '../components/footer/Footer'

const StoreLocationPage = () => {
  const [res,setRes]=useState({})

  const clickViewPar=(val)=>{
    setRes(val)
  }

  return (
    <React.Fragment>
      <div className=' bgAll  sideBarFreez'>
      <div className='container flex flex-col-reverse mx-auto gap-4 p-5 lg:gap-6 lg:grid lg:grid-cols-3'>
      <LeftLoc clickViewPar={clickViewPar}/>
      <RightLoc data={res}/>
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  )
}

export default StoreLocationPage