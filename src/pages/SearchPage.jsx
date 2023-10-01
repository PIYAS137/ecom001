import React, { useEffect, useState } from 'react'
import SingleProductShow from '../components/SingleProductShow/SingleProductShow';

const SearchPage = () => {

  const [datas, setDatas] = useState([])
  const [foundProduct, setFoundProduct] = useState([])


  const hanldeChangeProductCategory = (param) => {
    console.log(param);
    const text = param;


    const temp = datas.filter((one) => one.category.toLowerCase().includes(text.toLowerCase()));
    console.log(temp);
    setFoundProduct(temp)

  }
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) =>
        res.json())
      .then((response) => setDatas(response.products))
  }, [])


  return (
    <React.Fragment>
      <div className='bgAll min-h-screen'>
        <div className='container mx-auto'>
          <div className='flex justify-between gap-0'>
            <input onChange={(e) => hanldeChangeProductCategory(e.target.value)} type="text" className='bg-white w-full p-5 rounded-xl m-5 text-lg shadow-xl' placeholder='Search product by category' />
          </div>
        </div>
        <div className='px-5 container mx-auto  p-3 rounded-lg'>
          <h1 className='text-lg font-bold pb-5'>{foundProduct.length} product found</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {foundProduct && foundProduct.map((one) => <SingleProductShow key={one.id} data={one} />)}
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default SearchPage