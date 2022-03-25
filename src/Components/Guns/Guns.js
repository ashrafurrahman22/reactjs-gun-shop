import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

const Guns = () => {
    const [guns, setGuns]  = useState([]);

    // react modal
    const [modalIsOpen, setIsOpen] = useState(false);

    // set to cart
    const [cart, setCart] = useState([]);
    console.log(cart)

    // react modal function 
    function openModal() {
        setIsOpen(true);
      }

    // close modal 
    function closeModal() {
        setIsOpen(false);
      }

    const handleAddToCart = (gun)  => {
        const newCart = [...cart, gun]
        setCart(newCart)
    }

    useEffect( () => {
        fetch('guns.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    } , [])
    return (
        <div className='shop-container'>
            <div className="shop">
            <button onClick={openModal}>Open Modal</button>
                {/* <div>
                    {
                        cart.map(item => <h1>{item.name}</h1> )
                    }
                </div> */}
                {
                    guns.map(gun => <Gun 
                    key = {gun.id}
                    gun = {gun}
                    handleAddToCart = {handleAddToCart}
                    ></Gun> )
                }
            </div>


            {/* modal */}
            <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      > <h5>{
        cart.map(item => <h1>{item.name}</h1> )
    }</h5> 
    <button onClick={closeModal}>Close</button>
    </Modal>


            {/* order history  */}
            <div className='order-history'>
                <h4 style={{textAlign: 'center'}}>Order History</h4>
                <h5>{
                        cart.map(item => <h1>{item.name}</h1> )
                    }</h5>
            </div>
        </div>
    );
};

export default Guns;