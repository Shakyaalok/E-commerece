import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import CarouselBody from './components/Carousel';
import ProductDisplay from './components/products/ProductDisplay'
import {Button} from 'react-bootstrap'
import Cart from './components/cart/Cart';

function App() {
  
  const [showCart,setShowCart] = useState(false);
  const toggleCartHandler = (dataBool)=>{
    console.log('dataBool',dataBool)
      setShowCart(prevState=>!prevState)
  }
  return (
    <div>
      <Header onToggleCart={toggleCartHandler}/>
      {showCart && <Cart/>}
      <CarouselBody/>
      <ProductDisplay/>
      


    </div>
  );
}

export default App;
