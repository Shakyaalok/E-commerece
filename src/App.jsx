import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider'
import {Outlet} from 'react-router-dom'


function App() {
  
  const [showCart,setShowCart] = useState(false);
  const toggleCartHandler = (dataBool)=>{
    console.log('dataBool',dataBool)
      setShowCart(prevState=>!prevState)
  }

  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <div>
      <CartProvider>
      <Header onToggleCart={toggleCartHandler}/>
      {showCart && <Cart oncloseCart={hideCartHandler} /> }
      <Outlet/> 
      </CartProvider> 
    </div>
  );
}

export default App;

