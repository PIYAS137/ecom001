import { useContext, useEffect, useState } from 'react';
import { getStoredCartProduct } from '../localStorage';
import { Cart } from '../components/cartView/Cart';
import { CartContext } from '../context/useContext';

const CartPage = () => {
  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);
  
  const {setLen}=useContext(CartContext)

  useEffect(() => {
    const temp = getStoredCartProduct();
    setDatas(temp);
  }, []);

  // Function to calculate the total price
  const calculateTotal = () => {
    let totalPrice = 0;
    for (const item of datas) {
      totalPrice += item.price 
    }
    return totalPrice;
  };

  const addTotal=(val)=>{
    setTotal(total=>total+val)
  }
  const outTotal=(val)=>{
    setTotal(total=>total-val)
  }

  useEffect(() => {
    // Calculate and update the total whenever 'datas' changes
    const totalPrice = calculateTotal();
    setTotal(totalPrice);
  }, [datas]);


  const handleResetCart=()=>{
    localStorage.clear()
    setDatas([])
    setTotal(0)
    setLen(0)
  }

  const handleReFilter=(val)=>{
    const temp = datas.filter(one=>one.id!==val)
    setDatas(temp)
  }

  const handleCheckout=()=>{
    alert("payment functionality is not available")
  }

  return (
    <div className='max-w-[1000px] px-5 mx-auto'>
      <h1 className='font-bold text-center py-10 text-4xl'>Cart View</h1>
      <div className='flex gap-5 md:gap-0 flex-col-reverse md:grid md:grid-cols-3 md:space-x-5'>
        <div className='flex flex-col space-y-4 col-span-2'>
          {datas.map((one) => <Cart handleReFilter={handleReFilter} addTotal={addTotal} outTotal={outTotal} key={one.id} data={one} />)}
        </div>
        <div className='text-center p-3 rounded-xl col-span-1 h-min shadow-xl border-red-700 border'>
          <h1 className='text-center py-2 text-xl text-black font-bold rounded-xl mb-3 text-semibold'>Total Price View</h1>
          <p className='text-xl font-bold'>Total Price : <span className='text-red-700'>${total}</span></p>
          <button onClick={handleCheckout} className='py-2 rounded-xl text-lg tracking-wide bg-red-700 text-white w-full mt-4'>Check out</button>
          <button onClick={handleResetCart} className='py-2 rounded-xl text-lg tracking-wide bg-red-700 text-white w-full mt-4'>Reset Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
