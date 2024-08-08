import React from 'react'
import Profile from '../assets/Hasselkus-profile-square.webp'
function Benefits() {
  return (
    <div className='text-center py-10'>
        <h5 className='text-heading_color'>Benefits</h5>
        <h2 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
            Read What others Have to Say
        </h2>
        <div className='flex max-w-5xl mx-auto gap-8 group'>

            <div className='bg-blue-600/10 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={Profile} alt="Jason Hasselkus Profile" className='h-20 mx-auto' />
            <h4 className='uppercase text-xl font-bold'>Meet OpenText</h4>
            <p className='text-sm leading-7 my-3 font-light opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam similique quisquam necessitatibus totam maiores.
            </p>
            </div>

            <div className='bg-blue-600 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <img src={Profile} alt="Jason Hasselkus Profile" className='h-20 mx-auto' />
            <h4 className='uppercase text-xl font-bold'>Meet OpenText</h4>
            <p className='text-sm leading-7 my-3 font-light opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam similique quisquam necessitatibus totam maiores.
            </p>
            </div>

            <div className='bg-blue-600/10 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <div className='avatar'>
                <div className='w-24 rounded-full'>
                <img src={Profile} alt="Jason Hasselkus Profile"/>
                </div>
            </div>

            <h4 className='uppercase text-xl font-bold'>Meet OpenText</h4>
            <p className='text-sm leading-7 my-3 font-light opacity-50'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam similique quisquam necessitatibus totam maiores.
            </p>
            </div>

        </div>
    </div>
  )
}

export default Benefits