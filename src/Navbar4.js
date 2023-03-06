const Navbar4 = ({ parallax }) => {


    return(
        <div className="px-60 bg-gray-800">
         <div className='h-32 py-6 pl-2 flex flex-row '>
          <div className="bg-black h-20 w-52 py-7 flex justify-center fixed text-white ">Logo</div>
            <div className=" h-18 pt-6 pb-2 w-full flex justify-end">
                <button type="button" className="  text-gray-00 hover:text-white focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-2 mb-2 dark:hover:bg-white "><i className="fas fa-cup"></i></button>
                <button onClick={() => parallax.current.scrollTo(1)} type="button" className="  text-white hover:text-gray-900 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-2 mb-2 dark:hover:bg-gray-600 ">APPS</button>
                <button onClick={() => parallax.current.scrollTo(2)} type="button" className="  text-white hover:text-gray-900 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-2 mb-2 dark:hover:bg-gray-600">ABOUT</button>
                <button onClick={() => parallax.current.scrollTo(3)} type="button" className="  text-white hover:text-gray-900 focus:outline-none  font-medium rounded-full text-sm px-6 py-1.5 mr-2 mb-2 dark:hover:bg-gray-600 ">CONTACT</button> 
           </div>
         </div>
         <div className="flex flex-row justify-between">
         <hr className="bg-white h-0.2 border-white w-96"></hr>
         <hr className="bg-white h-0.2 border-white w-96"></hr>
        </div>
        </div>
    )
}


export default Navbar4;