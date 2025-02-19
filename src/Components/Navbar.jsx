import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'

const Navbar = () => {
    const [isModelOpen,setIsModelOpen]=useState(false);
    const [isLogin,setIsLogin]=useState(true);
    const [search,setSearch]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const openSignUp=()=>{
        setIsLogin(false);
        setIsModelOpen(true);
    }

    const openLogin=()=>{
        setIsLogin(true);
        setIsModelOpen(true);
    }

    const handleSearch=(e)=>{
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate("/filter-data")
    }

    const products=useSelector(state=> state.cart.products)
  return (
    <nav className='bg-white shadow-md'>
        <div >
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex  justify-between item-center items-center'>
                <h1 className='text-lg font-bold'><Link to={"/"}>PAVI FASHION</Link> </h1>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder='Enter Product Here...' className='text-xs md:text-sm w-full border border-gray-300/50 py-2 px-4' onChange={(e)=>setSearch(e.target.value)} />
                        <FaSearch className='absolute top-3 right-3 text-red-500' ></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to={"/cart"} className='relative'><FaShoppingCart/>{products.length>0 && (<span className='absolute top-0 text-xs w-3 left-3 bg-red-600 runded-full flex justify-center items-center text-white'>{products.length}</span>)}</Link>
                    <button onClick={()=>setIsModelOpen(true)} className='hidden md:block'>Login | Register</button>
                    <button className='block md:hidden'><FaUser/></button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link className='hover:underline ' to={"/"}>Home</Link>
                <Link className='hover:underline' to={"/shop"}>Shop</Link>
                <Link className='hover:underline' to={"/contact"}>Contact</Link>
                <Link className='hover:underline' to={"/about"}>About</Link>
            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                {isLogin?<Login openSignUp={openSignUp} />:<Register openLogin={openLogin}/>}
            </Modal>
        </div>
    </nav>
  )
}

export default Navbar
