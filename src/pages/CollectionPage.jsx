import { useEffect, useState } from 'react'
import LeftBar from '../components/collection/LeftBar'
import RightArea from '../components/collection/RightArea'


const CollectionPage =() => {
  const [datas,setDatas]=useState([])
  const [searchParam,setSearchParam]=useState('')

  const hanldeClickProductCategory=(param)=>{
    setSearchParam(param)
    if(param==""){
      fetch('https://dummyjson.com/products')
              .then((res) =>
                  res.json())
              .then((response) =>setDatas(response.products))
  }else{
      fetch(`https://dummyjson.com/products/category/${param}`)
      .then(res => res.json())
      .then(response=>setDatas(response.products))
  }
  }
  useEffect(()=>{
    hanldeClickProductCategory("")
  },[])






  // ---------------------------------------------
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
        console.log(val);
        
    }

  return (
    <div className='w-full bgAll '>
      <div className='container mx-auto md:p-5 flex md:space-x-3'>
      <LeftBar hanldeClickProductCategory={hanldeClickProductCategory}/>
      <RightArea handleClick={handleClick} category={category} datas={datas} param={searchParam}/>
    </div>
    </div>
  )
}

export default CollectionPage