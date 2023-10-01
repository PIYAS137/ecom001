import React from 'react'
import {Link} from 'react-router-dom'

const SingleProductShow = ({ data }) => {
    const { brand, category, description, price, title, stock, id, thumbnail, images } = data;
    return (
        <React.Fragment>
            <Link to={title} state={data}>
            <div className="card cardHov bg-base-100 shadow-xl cursor-pointer">
                <figure>
                    <div className='w-full h-[200px] bsi' style={{backgroundImage:`url(${images[0]})`}}></div>
                </figure>
                <p className=' absolute top-3 right-4 bg-gray-500 px-4 py-1 rounded-xl text-white'>{category}</p>
                <div className="card-body">
                    <div className=' items-center justify-between'>
                        <h2 className="text-orange-600">{brand}</h2>
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <p className='text-sm text-justify pt-2'>{description}</p>
                    <div className="card-actions items-center justify-end">
                        <p className="font-bold text-xl">Price: ${price}</p>
                    </div>
                </div>
            </div>
            </Link>
        </React.Fragment>
    )
}

export default SingleProductShow