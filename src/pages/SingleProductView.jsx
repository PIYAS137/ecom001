import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { HiShoppingCart } from "react-icons/hi2";
import SingleProductShow from '../components/SingleProductShow/SingleProductShow';
import { addtoLocalStorage, getStoredCartProduct, provideLength } from '../localStorage';
import Footer from '../components/footer/Footer';
import { CartContext } from '../context/useContext';

const SingleProductView = () => {
    const data = useLocation()
    const { setLen } = useContext(CartContext)
    const [clickId, setClickId] = useState(0)
    const { brand, category, description, images, price, title } = data.state;
    const [similar, setSimilar] = useState([])


    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(response => setSimilar(response.products));
    }, [])

    const handleClick = (i) => {
        setClickId(i)
    }






    const handleClicktoAddCart = (val) => {
        const cartData = val.state;
        const reachedData = getStoredCartProduct();

        const isProductInCart = reachedData.some((one) => one.id === cartData.id);

        if (!isProductInCart) {
            addtoLocalStorage(cartData);
        }
        setLen(provideLength())
    };




    return (
        <div className='bgAll pt-10'>
            <div className='container mx-auto p-5 flex space-x-10  '>
                <div className='lg:flex w-full lg:gap-10 justify-between'>
                    <div className='flex justify-between'>
                        <div className='py-10  flex flex-col text-white  justify-around'>
                            {images.map((one, i) => <img className=' cursor-pointer' onClick={() => { handleClick(i) }} width="80px" key={i} src={one} />)}
                        </div>
                        <div className='w-[40%] lg:w-[70%] h-[50vh] bsi flex justify-center items-center'>
                            <img className=' block object-contain w-full' src={images[clickId]} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <h1 className=' text-orange-600 font-bold text-lg'>{brand}</h1>
                        <h1 className=' font-bold text-3xl capitalize mt-2'>{title}</h1>
                        <h1 className=' my-3 text-3xl font-semibold text-indigo-600'>PRICE: ${price}</h1>

                        <div className="rating rating-sm items-center">
                            <p className='font-bold mr-2'>Rating : </p>
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>

                        <div className='mt-8'>
                            <p className='font-bold text-red-500'>Pick a size </p>
                            <div className='flex space-x-5 pt-3'>
                                <div className='w-10 h-10 bg-red-300 flex justify-center items-center rounded-full text-black font-semibold text-sm'>L</div>
                                <div className='w-10 h-10 bg-red-300 flex justify-center items-center rounded-full text-black font-semibold text-sm'>M</div>
                                <div className='w-10 h-10 border-4 border-white bg-red-300 flex justify-center items-center rounded-full text-sm text-black font-semibold'>XL</div>
                                <div className='w-10 h-10 bg-red-300 flex justify-center items-center rounded-full text-black font-semibold text-sm'>XXL</div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <p className='font-bold text-red-500'>Chose Color</p>
                            <div className='flex space-x-5 pt-3'>
                                <div className='w-10 h-10 bg-gray-300 flex justify-center items-center rounded-full text-black font-semibold'></div>
                                <div className='w-10 h-10 border-4 border-white bg-pink-300 flex justify-center items-center rounded-full text-black font-semibold'></div>
                                <div className='w-10 h-10 bg-indigo-300 flex justify-center items-center rounded-full text-black font-semibold'></div>
                            </div>
                        </div>
                        <button onClick={() => { handleClicktoAddCart(data) }} className='btn btn-primary mt-8 px-10 text-sm text-white'><HiShoppingCart className='text-lg' /> Add to Cart </button>

                        <div className="mt-8">
                            <p className='text-xl font-semibold'>{description}.</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className='container mx-auto pt-16 mt-10 p-5 lg:p-0'>
                <h1 className='text-3xl pb-5 font-bold'>Similar Products </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4'>
                    {similar?.slice(0, 6).map((one, i) => <SingleProductShow key={i} data={one} />)}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default SingleProductView