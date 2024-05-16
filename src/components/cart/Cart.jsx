import React from 'react'
import './Cart.css'
import {Row,Col,Button} from 'react-bootstrap';

const Cart = () => {
  return (
    <div className='container shadow'>

      <Row className='row p-2 justify-content-evenly d-flex'>

        <Col md='4'>
            <img src="https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" alt="" className='img-fluid rounded' /> 
        </Col>

        <Col md='4'>
        <h5>Description</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptas non, magni amet rem quisquam omnis aliquid nostrum nemo minima?</p>
        </Col>

        <Col md='4'>
          <h5 className='mb-1'>Product Name</h5>
          <p className='text-muted'>Price: $100</p>
          <p className='text-muted'>Quantity: 1</p>

          <div className='d-flex align-items-center gap-5'>
          <div className='d-flex gap-1 g-md-0 align-items-center plus-minus'>
            <button className='rounded-circle border-0'><span style={{ fontSize: '2rem', lineHeight: '1' }}>-</span></button>
            <input type="number" style={{width:'2rem' , height:'2rem'}}/>
            <button className='rounded-circle border-0'><span style={{ fontSize: '2rem', lineHeight: '1' }}>+</span></button>
           </div>
           <Button variant='warning' className='text-white'>Remove</Button>
           </div>
        </Col>

   

      </Row>
    </div>
  )
}

export default Cart
