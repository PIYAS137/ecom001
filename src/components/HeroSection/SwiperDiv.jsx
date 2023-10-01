import React from 'react'
import {useNavigate} from 'react-router-dom'

const SwiperDiv = ({data}) => {

  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('collection')
  }

  return (
    <React.Fragment>
        <div className={`w-full ${data.bgClass} overflow-hidden items-center h-full p-8 rounded-xl flex flex-col-reverse md:flex-row justify-between `}>
          <div className='h-[100%] flex flex-col items-center md:items-start'>
            <h1 className='py-6 text-2xl md:text-5xl lg:text-8xl font-bold'>{data.title}</h1>
            <p className='text-gray-600 text-center md:text-left text-sm lg:text-lg font-semibold'>{data.des}</p>
            <button onClick={handleClick} className='my-8 px-7 btn btn-primary'>Show All Products</button>
          </div>
          <img className='max-h-full' width="60%" src={data.image} alt="" />
        </div>
    </React.Fragment>
  )
}

export default SwiperDiv