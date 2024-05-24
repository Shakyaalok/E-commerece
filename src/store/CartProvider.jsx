import React,{useReducer} from 'react'
import cartContext from './cart-context'

const initialState = {
  items:[],
  totalAmount:0
}

const cartReducer = (state,action)=>{
  if(action.type==='ADD'){
    
    // haddling the adding case
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity
    const existingProductIndex = state.items.findIndex((product)=>product.id=== action.item.id);
    const existingProduct = state.items[existingProductIndex];

   console.log('provider')
    let updatedItems;
    if(existingProduct){
      const updatedItem = {
        ...existingProduct,
        quantity:existingProduct.quantity + action.item.quantity
      }

      updatedItems = [...state.items];
      updatedItems[existingProductIndex] = updatedItem
    }else{
      updatedItems = state.items.concat(action.item)
    }


    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }


  if(action.type==='REMOVE'){
    const existingProductIndex = state.items.findIndex((product)=>product.id===action.id);
    const existingProduct = state.items[existingProductIndex];
    const updatedTotalAmount = state.totalAmount - existingProduct.price;

    let updatedItems;
    if(existingProduct.quantity===1){
      updatedItems = state.items.filter((product)=>product.id!==action.id)
    }else{

      const updatedItem = {
        ...existingProduct,
        quantity:existingProduct.quantity-1
      }
  
      updatedItems = [...state.items];
      updatedItems[existingProductIndex] = updatedItem;
    }

    
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }

  return initialState;

}

const CartProvider = (props) => {


  const [cartState,cartDispatcher] = useReducer(cartReducer,initialState);

  const addHandler = (item)=>{
    cartDispatcher({type:'ADD',item:item})
  }

  const removeHandler = (id) =>{
    cartDispatcher({type:'REMOVE',id:id})
  }

    const context = {
        items: cartState.items,
        addItem: addHandler,
        removeItem: removeHandler,
        totalAmount: cartState.totalAmount,
        message:'this is working or not'
    }
  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider
