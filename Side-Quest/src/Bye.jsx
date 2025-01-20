import logo from './assets/logo.svg'
import woman from './assets/womanimg.jpg'

export default function Bye() {
    return (
      <div className='m-8 rounded-lg bg-blue-400 px-8 py-12 w-[600px]'>
        <div className='text-white flex items-end text-3xl text-center '>
          <img className=" h-11" src={logo} alt="logo" />
          <p>oogle</p>

        </div>
        <div className='flex items-center'>
          <img className=" w-[250px] mr-4 mt-5 rounded-lg  shadow-xl" src={woman} alt="woman working" />
          <div className=''>
            <h1 className='text-white text-2xl font-light leading-8'>
              You can search how ever you want.
              <span className='text-gray-800 font-semibold hover:text-blue-900 hover:transition-all  hover:font-mono'> I won't stop you..</span></h1>
            <p className='mt-2 text-gray-200 font-thin'>
              Search for treading topics, news, TV shows and fashion to your heart desires
            </p>
            
            <div className="flex justify-between mt-10">
              <a className="font-semibold inline-block active:text-white focus:outline-none focus:shadow-outline active:bg-gray-700 bg-gray-800 px-4 text-xs py-3 shadow-black rounded-lg text-white hover:transition-all  hover:font-bold hover:text-gray-800 hover:bg-white" href="#">LEARN MORE</a>

              <a className="font-semibold inline-block active:text-white focus:outline-none focus:shadow-outline active:bg-gray-700 bg-gray-800 px-4 text-xs py-3 shadow-black rounded-lg text-white hover:transition-all  hover:font-bold hover:text-gray-800 hover:bg-white" href="#">SEARCH AWAY</a>
            </div>
            
          </div>
          
        </div>

      </div>
      
    )
}