import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const LeftBar = ({hanldeClickProductCategory}) => {
    const [category,setCategory]=useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) =>
                res.json())
            .then((response) => {
                setCategory([...response]);
            })
    }, [])
    
    const handleClick=(val)=>{
        hanldeClickProductCategory(val)
        
    }


  return (
    <div className='w-[20%] hidden lg:block'>
        <ul className=' text-center space-y-2 overflow-y-scroll'>
        <li id={uuidv4()} className='bg-slate-500 capitalize cursor-pointer hover:bg-[#021027] text-white py-1 text-lg rounded-lg' onClick={()=>handleClick("",uuidv4())} >All Product</li>
            {category.map((one)=><li id={uuidv4()} className='bg-slate-500 capitalize cursor-pointer hover:bg-[#021027] text-white py-1 text-lg rounded-lg' onClick={()=>handleClick(one)} key={uuidv4()}>{one}</li>)}
        </ul>
    </div>
  )
}

export default LeftBar