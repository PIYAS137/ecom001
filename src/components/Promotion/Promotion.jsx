import { useNavigate } from "react-router"


const Promotion = () => {

    const navigate=useNavigate()
    const handleClickNavigate=()=>{
        navigate('collection')
    }


    return (
        <div className='p-5 py-8 mt-16'>
            <h1 className='pl-5 text-3xl font-bold mb-3 text-center'>Promoted Product !</h1>
            <p className='text-center mb-16'>Most sell porduct of the year </p>
            <div className='bg-red-300 flex flex-col items-end justify-center px-20 bsi w-full h-[300px] md:h-[400px] lg:h-[550px] rounded-xl p-5' style={{ 
      backgroundImage: `url("https://img.freepik.com/premium-vector/black-friday-super-sale-only-24-hour-online-header-banner-realistic-horizontal-red-poster-with-copy-space-marketing-e-commerce-promotion-campaign-vector-illustration-graphic-template_419341-251.jpg?w=2000")` 
    }}>
        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-white">Get Start Buying !</h1>
        <button onClick={handleClickNavigate} className="btn btn-gray text-black font-semibold">View Products</button>
                
            </div>
        </div>
    )
}

export default Promotion