import { useEffect, useState } from 'react'
import SingleProductShow from '../SingleProductShow/SingleProductShow'

const HotDeals = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
            fetch('https://dummyjson.com/products')
                .then((res) =>
                    res.json())
                .then((response) => {
                    setDatas([...response.products]);
                }) }, [])


    return (
        <div className='py-10'>
            <h1 className='pl-5 text-3xl font-bold mb-3 text-center'>Most Selled Product !</h1>
            <p className='text-center mb-16'>Most sell porduct of the year </p>
            <div className='px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {datas.slice(0,8).map((one)=><SingleProductShow key={one.id} data={one}/>)}
            </div>
        </div>
    )
}

export default HotDeals