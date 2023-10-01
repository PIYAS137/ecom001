
const getStoredCartProduct=()=>{
    const storedString = localStorage.getItem("cart");
    if(storedString){
        return JSON.parse(storedString)
    }
    return [];
}

const saveCartToLocalStorage=(cart)=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const removeFromLS=(val)=>{
    const cart = getStoredCartProduct();
    const temp = cart.filter((one)=>one.id!==val)
    saveCartToLocalStorage(temp)

}


const addtoLocalStorage=(data)=>{
    const cart = getStoredCartProduct();
    cart.push(data)
    // save to ls
    saveCartToLocalStorage(cart)
}

const provideLength=()=>{
    const temp = getStoredCartProduct()
    return temp.length;
}



export {addtoLocalStorage,getStoredCartProduct,provideLength,removeFromLS}