import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection/HeroSection'
import BottomHero from '../components/HeroSection/BottomHero'
import HotDeals from '../components/HotDeals/HotDeals'
import Promotion from '../components/Promotion/Promotion'
import PopularItems from '../components/PopularItems/PopularItems'
import Footer from '../components/footer/Footer'


const Homepage = () => {
    return (
        <React.Fragment>
            <div className='w-full bgAll'>
                <div className='container mx-auto'>
                    <div className='  flex p-5 space-x-7'>
                        <HeroSection />
                    </div>
                    <BottomHero />
                    <HotDeals/>
                    <Promotion/>
                    <PopularItems/>
                    <Footer/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage