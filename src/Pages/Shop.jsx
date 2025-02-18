import React from 'react'
import ProductCard from '../Components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {
    const productitems=useSelector(state=>state.products);
  return (
    <div className='mx-auto px-4 md:px-16 lg:px-24 mt-4'>
        <h1 className='text-xl font-bold'>Shop</h1>
        <div className='container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
            {productitems.products.map((product)=>(
                <ProductCard product={product} />
            ))}
        </div>
    </div>
  )
}

export default Shop