import React, { useContext } from 'react';
import {Card,Button} from 'react-bootstrap'// Import Card from react-bootstrap
import cartContext from '../store/cart-context';
import cartItems from '../components/cart/cartItems';
import productsList from '../components/products/productsLists';


const CustomCard = (props) => {
    const {id,title,price,imageUrl} = props.product;
    const cartCtx = useContext(cartContext);

    const AddToCartHandler = (product)=>{
        console.log('product',product)
        cartCtx.addItem({
          ...product,
          quantity:1
        });    
    }


  return (
      <Card style={{  borderRadius:'2rem' }}>
        <Card.Img variant="top" src={imageUrl} className='rounded'/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <h2>Rs-{price}</h2>
          </Card.Text>
          
           <div className='d-flex justify-content-evenly'>
           <Button variant='success' className='m-2' onClick={()=>AddToCartHandler(props.product)}>Add to Cart</Button>
            <Button className='m-2'>Go to Cart</Button>
           </div>
        </Card.Body>
      </Card>
  )
}

export default CustomCard
