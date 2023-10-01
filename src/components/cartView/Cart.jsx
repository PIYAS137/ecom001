import { useState,useEffect } from "react";
import { removeFromLS } from "../../localStorage";


export const Cart = ({ handleReFilter,data,addTotal,outTotal }) => {
    const { brand, category, description, price, title, stock, id, thumbnail, images } = data;

    const [quan, setQuan] = useState(1);
    const [pr, setPr] = useState(price);

    useEffect(()=>{
        setPr(quan*price)
    },[quan])
    
    
    const handleIncrement = () => {
        setQuan(quan + 1);
        addTotal(price)
    };

    const handleDecrement = () => {
        if (quan > 1) {
            setQuan(quan - 1);
            outTotal(price)
        }
    };

    const handleRemoteItem=()=>{
        outTotal(price)
        removeFromLS(id)
        handleReFilter(id)
    }

    return (
        <div className="border flex items-center border-red-700 p-3 rounded-xl">
            <img width="100px" src={images[0]} alt="" />
            <div className="flex flex-col ml-5 justify-start items-start">
                <h1 className=" capitalize">{brand}</h1>
                <h1 className="text-sm mb-2">{title}</h1>
                <div className="bg-red-700 text-white px-3 rounded-xl ">{category}</div>
            </div>
            <div className=" ml-auto">
                <h1>Price : ${pr}</h1>
                <p>Quantity : {quan}</p>
                <div className="cart-counter flex justify-between">
                    <button className="btn btn-sm bg-red-400 text-white" onClick={handleDecrement}>-</button>
                    <button className="btn btn-sm bg-red-400 text-white" onClick={handleIncrement}>+</button>
                </div>
                <div className="flex justify-center mt-1">
                <button onClick={handleRemoteItem} className="bg-red-700 px-2 rounded-lg text-white">Remove</button>
                </div>
            </div>
        </div>
    )
}
