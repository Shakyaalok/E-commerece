import React,{useContext} from 'react'
import './Cart.css'
import cartItems from './cartItems';
import Modal from '../../modals/Modal';
import {Row,Col,Button} from 'react-bootstrap';
import cartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  console.log('cartCtx',cartCtx);

  const addItemOnPlusHandler = (product)=>{
   cartCtx.addItem({
      ...product,
      quantity:1
    });    
  }

  const removeItemOnMinusHandler = (id)=>{
    cartCtx.removeItem(id)
  }
  return (
    <Modal>
    <div className='container shadow total_amount_parent'>
        <Row className='d-flex justify-content-end'>
            <Col xs='1' className='ml-auto close_cart'>
            <button onClick={props.oncloseCart}>X</button>
            </Col>
        </Row>

  

        {cartCtx.items.map((product,index)=>(
            <Row className='row p-2 justify-content-evenly d-flex shadow rounded' key={index}>
            <Col md='4'>
                <img src={product.imageUrl} alt="" className='img-fluid rounded' style={{ width:'55%'}} /> 
            </Col>
    
            <Col md='4'>
            <h5>Description</h5>
            <p>{product.description}</p>
            </Col>
    
            <Col md='4'>
              <h5 className='mb-1'>Product Name</h5>
              <p className='text-muted'>Price: {product.price}</p>
              <p className='text-muted'>Quantity: {product.quantity}</p>
              
    
              <div className='d-flex align-items-center gap-5'>
              <div className='d-flex gap-1 g-md-0 align-items-center plus-minus'>
                <button className='rounded-circle border-0' onClick={()=>addItemOnPlusHandler(product)}><span style={{ fontSize: '2rem', lineHeight: '1' }}>+</span></button>
                <input type="number" style={{width:'2rem' , height:'2rem'}}/>
                <button className='rounded-circle border-0' onClick={()=>removeItemOnMinusHandler(product.id)}><span style={{ fontSize: '2rem', lineHeight: '1' }}>-</span></button>
               </div>
               <Button variant='warning' className='text-white'>Remove</Button>
               </div>
            </Col>
    
          </Row>
        ))}

        <Row>
          <h3 className='text-muted total_text'>Total Amount: <span>Rs-{cartCtx.totalAmount}</span></h3>
          </Row>
    </div>
    </Modal>
  )
}

export default Cart
