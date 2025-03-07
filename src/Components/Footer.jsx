import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='px-4 md:px-16 lg:px-24 text-white bg-gray-800 py-8 mt-10'>
        <div className='container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-semibold'>PAVI FASHION</h3>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut obcaecati eveniet hic beatae iusto voluptatibus consequatur
                </p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h4 className='text-lg font-semibold'>Quick Links</h4>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link className='hover:underline' to="/">Home</Link>
                    </li>
                    <li>
                    <Link className='hover:underline' to="/shop">Shop</Link>
                    </li>
                    <li>
                    <Link className='hover:underline' to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link className='hover:underline' to="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div >
                <h4 className='text-lg font-semibold'>Follow In</h4>
                <div className='flex space-x-4 mt-4'>
                    <a href="" className='hover:text-gray-400'><FaFacebook/></a>
                    <a href="" className='hover:text-gray-400'><FaTwitter/></a>
                    <a href="" className='hover:text-gray-400'><FaInstagram/></a>
                    <a href="" className='hover:text-gray-400'><FaLinkedin/></a>
                </div>
                <form action="" className='flex items-center justify-center mt-8'>
                    <input type="email" placeholder='Enter Email ' className='w-full p-2 bg-gray-800 border border-gray-600' />
                    <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-400'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='mt-8 border-t  border-gray-700/60 pt-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <p>&copy; 2025 PAVI FASHION All Rights Reserved.</p>
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href="" className='hover:underline'>Privacy Policy</a>
                    <a href="" className='hover:underline'>Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer