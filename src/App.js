import React, {useState} from "react";
import ImagesShoes from "./Components/ImagesShoes";
import LimitEdition from "./Components/LimitEdition";
import Nav from "./Components/Nav";


function App() {

  const [add, setAdd] = useState(0)
  const [cartTotal, setCartTotal] = useState(false)

  const addCart = () => {
    setAdd(add + 1)
  }

  const removeCart = () => {
    if(add === 0){
      setAdd(0)
    }else{
      setAdd(add - 1)
    }
  }

  const addToCart = () => {
     if(add > 0){
      setCartTotal(true)
     }
  }




      
  return (
  <>
    <Nav add={add} cartTotal={cartTotal}/>

    <a href="https://api.whatsapp.com/send?phone=543517653448"> Enviar por WhasApp </a>

    <main className="mainContainer">

      <ImagesShoes/>
      <LimitEdition addCart={addCart} add={add} removeCart={removeCart} addToCart={addToCart}/>

    </main>

  </>
  );
}

export default App;
