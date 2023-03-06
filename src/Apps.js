import tv from './img/tv_screen.png'


const Apps = () => {
    return(
        <div className='flex justify-between px-60 bg-yellow-50 h-screen w-screen'>
            <button className=''>IMG</button>
            <div className='w-screen pl-40 pt-20'>
            <img src={tv} style={{ }}/>
            </div>
            <h2>TEXT</h2>
        </div>
    )
}




export default Apps;