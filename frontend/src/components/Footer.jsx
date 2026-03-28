import React from 'react'
import { assets, footer_data } from '../assets/assets'

function Footer() {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>


        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

            <div>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
                <p className='max-w-102.5 mt-6'>Your space to think out loud, to share what matters, and to write without filters.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
             {   footer_data.map((item,index)=>(
                    <div key={index} >
                        <h3 className='text-lg font-semibold text-gray-900'>{item.title}</h3>
                        <ul>
                            {item.links.map((link,index)=>(
                                <li key={index} className='my-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-all'>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))  }
                        



            </div>




        </div>



        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2026 ©  QuickBlog. All rights Reserved.</p>



    </div>
  )
}

export default Footer