import React from 'react'

import DeliveryTruck from '../../assets/E Com/DeliveryTruck.json'
import ProductReturn from '../../assets/E Com/ProductReturn.json'
import SecurePayment from '../../assets/E Com/SecurePayment.json'
import Support from '../../assets/E Com/Support.json'
import Lottie from "lottie-react";

const BottomHero = () => {
  return (
    <React.Fragment>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center text-center pb-16'>
            <div className='items-center flex px-5 lg:px-20 flex-col'>
                <div>
                <Lottie className='w-48' animationData={DeliveryTruck}/>
                </div>
                <h1 className='text-xl -mt-10 font-bold'>Free Delivery</h1>
                <p className='text-sm mt-2'>Get Free Delivery to anywhere in the country</p>
            </div>
            <div className='items-center flex px-5 lg:px-20 flex-col'>
                <div>
                <Lottie className='w-36' animationData={ProductReturn}/>
                </div>
                <h1 className='text-xl -mt-10 font-bold'>30 Day Return</h1>
                <p className='text-sm mt-2'>Return your product within maximum 30 days</p>
            </div>
            <div className='mt-14 items-center flex px-5 lg:px-20 flex-col'>
                <div>
                <Lottie className='w-24' animationData={SecurePayment}/>
                </div>
                <h1 className='text-xl font-bold'>Secure Payment</h1>
                <p className='text-sm mt-2'>Payment through card, bikash or nagad</p>
            </div>
            <div className='mt-16 items-center flex px-5 lg:px-20 flex-col'>
                <div>
                <Lottie className='w-20' animationData={Support}/>
                </div>
                <h1 className='text-xl font-bold'>24/7 Support</h1>
                <p className='text-sm mt-2'>Shop and get support from out team support from anytime</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default BottomHero