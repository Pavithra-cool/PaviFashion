import React, { useEffect } from 'react'
import { categories, mockData } from '../assets/mockData'
import InfoSection from '../Components/InfoSection'
import CategorySection from '../Components/CategorySection'
import { useSelector,useDispatch } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import ProductCard from '../Components/ProductCard'
import Shop from './Shop'
import banner1 from '../assets/images/banner1.jpg'

const Home = () => {

    const dispatch=useDispatch();
    const productitems=useSelector(state=>state.products);
    console.log(mockData)
    useEffect(()=>{
        dispatch(setProducts(mockData));
    },[]);

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <section className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
            <div className='w-full md:w-3/12'>
                <h1 className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>Shop by Categories</h1>
                <ul className='space-y-4 bg-gray-100 p-3 border border-gray-300/50'>
                    {categories.map((category,index)=>(
                        <li key={index}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full md:w-9/12 mt-8 md:mt-0 h-100 relative'>
                <img className='h-full w-full ' src={banner1} alt="" />
                <div className='absolute top-16 left-12'>
                    <p className='text-black-600 font-bold'>Code with <span className='text-red-600 '>Yourself</span></p>
                    <h2 className='font-bold text-4xl mt-3'>Welcome to E-Shop</h2>
                    <p className='text-xl font-bold  mt-3 '>Millions+ Products</p>
                    <button className='text-white bg-red-600 px-6 py-1.5 mt-3 hover:bg-red-400'>Shop Now</button>
                </div>
            </div>
        </section>
        <InfoSection/>
        <CategorySection/>
        <div className='container mt-4'>
            <h1 className='text-xl font-bold'>Top Products</h1>
            <div className='container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4'>
                {productitems.products.slice(0,5).map((product)=>(
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
        
    </div>
    <Shop/>
    </div>
  )
}

export default Home