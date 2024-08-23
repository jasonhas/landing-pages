import React from 'react'
import Profile from '../assets/Hasselkus-profile-square.webp'
import Collab from '../assets/collaboration_microsite.jpg'
import Launch from '../assets/product-launch.jpeg'

function Benefits() {
  return (
    <div className='text-center py-10'>
        <h2 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
            Benefits
        </h2>
        <div className='flex max-w-5xl mx-auto gap-8 group'>

            <div className='bg-blue-600/10 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <div className='avatar'>
                <div className='w-24 rounded-full'>
                    <img src={Collab} alt="Collaboration" className='' />
                </div>
                
            </div>
            
            <h4 className='uppercase text-xl font-bold'>Collaborate with Others</h4>
            <p className='font-bold leading-7 my-3 opacity-50'>
                Find out how other OpenText customers are utilizing the same products that you are using. Build a community of local knowledge.
            </p>
            </div>

            <div className='bg-blue-600 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
                <div className='avatar'>
                    <div className='w-24 rounded-full'>
                        <img src={Launch} alt="product launch" className='h-20 mx-auto' />
                    </div>
                </div>
            
            <h4 className='uppercase text-xl font-bold'>Learn</h4>
            <p className='leading-7 my-3 font-bold opacity-50'>
                Learn about product launches, new training opportunities and other exciting OpenText events.
            </p>
            </div>

            <div className='bg-blue-400/10 p-8 rounded-xl cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
            <div className='avatar'>
                <div className='w-24 rounded-full'>
                <img src={Profile} alt="Jason Hasselkus Profile"/>
                </div>
            </div>

            <h4 className='uppercase text-xl font-bold'>Meet OpenText</h4>
            <p className='leading-7 my-3 font-bold opacity-50'>
                As your local account representatives, I look forward to spending time with you and enjoying some friendly golf outside of work.
            </p>
            </div>

        </div>
    </div>
  )
}

export default Benefits