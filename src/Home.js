import robbo from './img/robbo_bodyy.png'
import txt_need from './img/txt_need.png'
import robbodetl from './img/robbo_arm_left.png'
import robbodetr from './img/robbo_arm_right.png'
import logo from './img/boycolor.png'

 
 
 
 const Home = ({ parallax }) => {
    return(
        <div>
                <div className="px-60 pt-2">
                        <div className='h-20 flex flex-row'>
                        <img src={logo} className="flex justify-center pt-6"/> 
                            <div className="pl-32 h-20 flex justify-end  w-full">
                                <button  type="button" className="  text-gray-800 hover:text-red-400 focus:outline-none  font-medium rounded-full text-sm px-6 my-10 mb-2 dark:hover:bg-white "><i className="fas fa-cup"></i></button>
                                <button onClick={() => parallax.current.scrollTo(1)} type="button" className="  text-gray-800 hover:text-red-400 focus:outline-none  font-medium rounded-full text-sm px-6 my-10 mb-2 dark:hover:bg-white ">APPS</button>
                                <button onClick={() => parallax.current.scrollTo(2)} type="button" className="  text-gray-800 hover:text-red-400 focus:outline-none  font-medium rounded-full text-sm px-6  my-10 mb-2 dark:hover:bg-white ">ABOUT</button>
                                <button onClick={() => parallax.current.scrollTo(3)} type="button" className="  text-gray-800 hover:text-red-400 focus:outline-none  font-medium rounded-full text-sm px-6  my-10 mb-2 dark:hover:bg-white ">CONTACT</button> 
                        </div>
                        </div>
                        <div className="flex flex-row justify-between">
                        <hr className="bg-black h-0.2 border-black w-52"></hr>
                        <hr className="bg-black h-0.2 border-black w-80"></hr>
                        </div>
                </div>
                <div className='flex justify-between  px-60'>
                        <div>
                            <h2 className='text-6xl text-stone-800 pl-20 pt-16'>Hello!</h2>
                            <p>Boy-Coy is a creative design studio.</p>
                            <p>The place where perfect websites,</p>
                            <p>mobile apps & games come to life.</p>
                                <button className='text-xl'>Contact</button>
                                    <img src={txt_need} alt="text" className='pl-20'/>
                        </div>
                        <div className=''>
                            <img src={robbo} alt="robbo" className='relative bottom-16 right-1/2 h-80'/>
                            <img src={robbodetl} alt="1" className='absolute right1\/3 top-60 h-16 '/>
                            <img src={robbodetr} alt="2" className='absolute left-1/4 top-60 h-16'/>
                        </div>
                        <div className='grid grid-cols-1 gap-y-1 pr-32'>
                            <button>Facebook</button>
                            <button>Google</button>
                            <button>Twitter</button>
                        </div>
                </div>
          </div>
    )
 }




 export default Home;