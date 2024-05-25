import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import CarouselBody from './components/Carousel';
import ProductDisplay from './components/products/ProductDisplay';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About'


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
    
      <Router>
      <CartProvider>
      <Header onToggleCart={toggleCartHandler}/>
      {showCart && <Cart oncloseCart={hideCartHandler} /> }
      <Routes>
         <Route exact path='/home'  element={ <ProductDisplay/>}/>
         <Route exact path='/about' element={<About/>}/>
      </Routes>
      </CartProvider> 
      </Router>
   
   
    

    </div>
  );
}

export default App;
