import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CarouselBody from './components/Carousel';
import ProductDisplay from './components/products/ProductDisplay'
import {Button} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header/>
      <CarouselBody/>
      <ProductDisplay/>


    </div>
  );
}

export default App;
