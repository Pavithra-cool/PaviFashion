import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch=useDispatch();
  function handleAddToCart(e,product){
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("product added successfully");
  }
  return (
    <Link to={`/product/${product.id}`}>
    <div className='border border-gray-300/50 p-3 shadow-md bg-white rounded relative transform transition-transform duration-300 hover:scale-105'  key={product.id}>
        <img src={product.image} alt="" />
        <h3 className='text-lg text-semibold pt-1'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500 text-xs'/>
            <FaStar className='text-yellow-500 text-xs'/>
            <FaStar className='text-yellow-500 text-xs'/>
            <FaStar className='text-yellow-500 text-xs'/>
        </div>
        <div  className='absolute bottom-4 right-2 flex items-center cursor-pointer justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 ' onClick={(e)=>handleAddToCart(e,product)}>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block '>Add to Cart</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard