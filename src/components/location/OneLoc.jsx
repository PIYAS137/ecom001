import React from 'react'

const OneLoc = ({data,clickView}) => {

    const handleOnClick=(val)=>{
        clickView(val)
    }


  return (
    <div onClick={()=>{handleOnClick(data)}} className='mb-2 lg:px-7 rounded-lg hover:text-white hover:bg-orange-400 cursor-pointer border-b pb-2'>
        <h1 className='text-xl font-semibold'>{data.title}</h1>
        <p>{data.location}</p>
    </div>
  )
}

export default OneLoc