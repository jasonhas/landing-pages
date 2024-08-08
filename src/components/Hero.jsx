
import TG from '../assets/TG-BayView.webp'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 space-x-12'>
        <div className='basis-1/2 pt-8 text-center'>
            <span className='font-bold font-sans text-5xl'>
            First Friday Topgolf
            </span>
            <div className='pt-4'>
                <span className='font-serif text-xl'>
                Get ready for the weekend with OpenText and other local customers. Happy Hour from 3:00 to 5:00 pm on the first friday of every month.
                </span>
                <div className='pt-6'>Next Tee Time: September 6th, 2024 @ Topgolf Dallas</div>
                <div className='font-semibold'>Space is limited</div>
            </div>
            <div className='pt-8'>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Name" />
                            </label>
                        </div>
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="you@otcustomer.com" />
                            </label>
                        </div>
                    </div>
                    <div className='pt-8 pb-2'>
                    <button type="button" className='btn w-full bg-success text-white hover:bg-blue-700 text-2xl'>Sign Up Now</button>
                    </div>
                </form>
                <div className='text-center mx-auto font-light'>We will never share your information!</div>
            </div>
        </div>
        <div className='basis-1/2 invisible md:visible '>
            <img src={TG} alt="Top Golf Bay View" className='shadow-lg rounded-xl'/>
        </div>

    </div>

  )
}

export default Hero