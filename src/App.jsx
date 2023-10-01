import { useState } from "react"
import Index from "./routes/Index"
import { CartContext } from "./context/useContext"
import { provideLength } from "./localStorage"


function App() {

  const [len,setLen]=useState(provideLength())


  return (
    <CartContext.Provider value={{len,setLen}}>
      <Index/>
    </CartContext.Provider>
  )
}

export default App
