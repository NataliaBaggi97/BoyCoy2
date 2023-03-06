const Navbar2 = ({ parallax }) => {


    return(
        <div className="px-60 ">
         <div className='h-32 py-6 pl-2 flex flex-row '>
          <div className="bg-yellow-200 h-20 w-52 py-7 flex justify-center fixed ">Logo</div>
            <div className=" h-18 pt-6 pb-2 w-full flex justify-end">
                <button type="button" className="  text-gray-800 hover:text-yellow-400 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-2 mb-2 dark:hover:bg-white "><i className="fas fa-cup"></i></button>
                <button onClick={() => parallax.current.scrollTo(1)} type="button" className="  text-gray-800 hover:text-yellow-400 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-1 mb-2 dark:hover:bg-white ">APPS</button>
                <button onClick={() => parallax.current.scrollTo(2)} type="button" className="  text-gray-800 hover:text-yellow-400 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-1 mb-2 dark:hover:bg-white ">ABOUT</button>
                <button onClick={() => parallax.current.scrollTo(3)} type="button" className="  text-gray-800 hover:text-yellow-400 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-1 mb-2 dark:hover:bg-white ">CONTACT</button> 
           </div>
         </div>
         <div className="flex flex-row justify-between">
         <hr className="bg-black h-0.2 border-black w-72"></hr>
         <hr className="bg-black h-0.2 border-black w-1/2"></hr>
        </div>
        </div>
    )
}


export default Navbar2;