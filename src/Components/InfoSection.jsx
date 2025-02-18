import React from 'react'
import { FaShippingFast,FaHeadset,FaMoneyBillWave,FaTag } from 'react-icons/fa'

const InfoSection = () => {
  const infoItems=[
    {
      icon:<FaShippingFast/>,
      title:"Free SHipping",
      description:"get your orders delivered with no extra cost",
    },
    {
      icon:<FaHeadset/>,
      title:"Support 24/7",
      description:"We are here to assist you anytime",
    },
    {
      icon:<FaMoneyBillWave/>,
      title:"100% Money Back",
      description:"full refund if you are not satisfied",
    },
    {
      icon:<FaTag/>,
      title:"Discount",
      description:"Enjoy the best prices on our product",
    },
  ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {infoItems.map((item,index)=>(
          <div key={index} className='flex flex-col items-center hover:bg-red-100 text-center p-6 border border-gray-300/50 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 text-gray-600 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection