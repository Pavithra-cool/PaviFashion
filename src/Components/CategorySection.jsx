import React from 'react'
import menprofile from '../assets/images/menprofile.avif'
import womenprofile from '../assets/images/womenprofile.jpg'
import kidprofile from '../assets/images/kidsprofile.avif'

const categories=[
    {
        title:"Men",
        imageUrl:menprofile,
    },
    {
        title:"Women",
        imageUrl:womenprofile,
    },
    {
        title:"Kids",
        imageUrl:kidprofile,
    },
];

const CategorySection = () => {
  return (
    
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer '>
        {categories.map((category,index)=>(
            <div key={index} className='relative h-64 hover:scale-105 transform transition-transform duration-300'>
                <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg'/>
                <div className='absolute top-20 left-12'>
                    <p className='font-bold text-xl '>{category.title}</p>
                    <p className='bg-red-800 text-white px-4 py-0.5 mt-2'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection