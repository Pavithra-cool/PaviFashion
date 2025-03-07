import React, { useState } from 'react'
import { FaTrash, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Components/Modal'
import Changeaddress from '../Components/Changeaddress'
import { decreaseQuantity, removeFromCart,increaseQuantity } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart=useSelector(state=>state.cart)
    const [address,setAddress]=useState("639,karur,tamilnadu");
    const [isModelOpen,setIsModelOpen]=useState(false);

    const dispatch=useDispatch();

    const navigate=useNavigate();
    

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        {cart.products.length>0 ? <div>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='flex justify-between border-b border-gray-300/50 items-center mb-4 text-xs font-bold'>
                        <p>products</p>
                        <div className='flex space-x-8'>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                            <p>remove</p>
                        </div>
                    </div>
                    <div>
                        {cart.products.map((product)=>(
                            <div key={product.id} className='flex items-center justify-between p-3 border-b border-gray-300/50'>
                                <div className='md:flex items-center space-x-4'>
                                    <img src={product.image} alt="" className='w-16 h-16 object-contain rounded' />
                                    <div className='flex-1 ml-4'>
                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                    </div>
                                </div>
                                <div className='flex space-x-12 items-center'>
                                    <p>{product.price}</p>
                                    <div className='flex items-center justify-center border border-gray-300/50'>
                                        <button className='text-xl font-bold px-1.5 border-r border-gray-300/50' onClick={()=> dispatch(decreaseQuantity(product.id))}>-</button>
                                        <p className='text-xl px-2'>{product.quantity}</p>
                                        <button className='text-xl px-1 border-l border-gray-300/50' onClick={()=> dispatch(increaseQuantity(product.id))}>+</button>
                                    </div>
                                    <p>${(product.quantity*product.price).toFixed(2)}</p>
                                    <button onClick={()=>dispatch(removeFromCart(product.id))} className='text-red-500 hover:text-red-700'><FaTrashAlt/></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300/50'>
                        <h3 className='text-sm font-semibold mb-5'>Cart Total</h3>
                        <div className='flex justify-between mb-5 border-b border-gray-300/50 pb-1'>
                            <span className='text-sm'>Total Items :</span>
                            <span>{cart.totalQuantity}</span>
                        </div>
                        <div className='mb-4 border-b border-gray-300/50 pb-2'>
                            <p>Shipping :</p>
                            <p className='ml-2'>Shipping To :{" "}
                            <span className='text-xs font-bold'> {address}</span></p>
                            <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={()=>setIsModelOpen(true)}>Change Address</button>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span>Total Price :</span>
                            <span>{cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={()=>navigate("/checkout")}>Proceed To Checkout</button>
                    </div>
                </div>
                <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} ><Changeaddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/></Modal>
            </div>
        : <div>
                    <img className='w-full h-25' src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" />
        </div>}
    </div>
    
    
  )
}

export default Cart
