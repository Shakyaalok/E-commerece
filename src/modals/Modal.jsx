import React from 'react'
import ReactDOM from 'react-dom';
import classes from './modal.module.css'


const BackDrop = (props) =>{
  console.log(props.onClose)
  return <div className={classes.backdrop} onClick={props.onClose} />
}



const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modal = (props) => {
      const PortalElement = document.getElementById('overlays');
  return (
    <>
          {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </>
  )
}

export default Modal
