import React, { useEffect, useState } from 'react'
import SingleProductShow from '../SingleProductShow/SingleProductShow'
import { v4 as uuidv4 } from 'uuid';

const RightArea = ({datas,param,category,handleClick}) => {




const handleDone=(e)=>{
    handleClick(e.target.value)
}

return (
    <React.Fragment>
        <div className='flex-1'>
            <h1 className='text-3xl font-bold mb-2 text-center'>{param==""?"All Products":param.toUpperCase()}</h1>
                <p  className='text-center lg:mb-8'>{datas.length} product found</p>
                <select className='mb-3 lg:hidden mt-2 mx-auto block bg-red-700 font-semibold text-white rounded-lg px-3 py-1' name="" id="" onChange={handleDone}>
                    <option value="">select category</option>
                    {category && category.map((one)=>{
                        return(
                            <option value={one} key={uuidv4()}>{one}</option>
                        )
                    })}
                </select>
                        <div className='px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {datas && datas.map((one) => <SingleProductShow key={one.id} data={one} />)}
            </div>
        </div>
    </React.Fragment>
)
}

RightArea.defaultProps = {
    param: '',
  }

export default RightArea