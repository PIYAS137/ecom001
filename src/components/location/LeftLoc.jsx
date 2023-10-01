import  { useEffect } from 'react'
import { LocationData } from '../../data/Location'
import OneLoc from './OneLoc'

const LeftLoc = ({clickViewPar}) => {

    const clickView=(val)=>{
        clickViewPar(val)
    }

    useEffect(()=>{
        clickView({
            id:1,
            title:"Shah Ali Tower",
            location:"Mirpur-10, Dhaka, Bangladesh",
            image:'https://i.ibb.co/Db86WXN/Petit-bateau-Jean-Jullien-Lucie-Conan-Graphiste-Freelance-Paris.jpg',
            phone:'01215513173'
        })
    },[])

    return (
        <div className='bg-white rounded-xl shadow-md p-5'>
            <h1 className='p-3 mb-3 text-red-700 text-4xl font-bold'>Shop Location</h1>
            <div className='spacce-y-3  gap-5 px-3'>
            {
                LocationData.map((one) =><OneLoc clickView={clickView} key={one.id} data={one}/>)
            }
            </div>
        </div>
    )
}

export default LeftLoc