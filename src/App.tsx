import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import cloud from './img/1.png'
import Apps from './Apps'
import Navbar2 from './Navbar2'
import cloud3 from './img/7.png'
import cloud4 from './img/10.png'
import cloud5 from './img/13.png'
import cloud6 from './img/6.png'
import About from './About'
import Navbar3 from './Navbar3'
import gor from './img/gor.png'
import gor1 from './img/8.png'
import Navbar4 from './Navbar4'
import Contact from './Contact'
import voln from './img/voln.png'
import voln1 from './img/voln1.png'
import voln2 from './img/voln2.png'
import cloudphon2 from './img/22.png'
import Home from './Home'


export default function App() {
  const parallax = useRef<IParallax>(null!)
  
  return (

    <div className="w-100 h-screen w-screen bg-red-400">
      <Parallax ref={parallax} pages={4}>

      <ParallaxLayer offset={0} speed={1}>
           <Home parallax={parallax}/>
        </ParallaxLayer>
               
        <ParallaxLayer offset={0.8} style={{ opacity: 1 }}>
          <img src={cloudphon2} style={{ display: 'block',  width: 'screen' }}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.74} style={{ opacity: 1, display: 'flex'}} >
           <img src={cloud} style={{  width: '26%', height: '160px', marginLeft: '30%'  }}/>
           <img src={cloud} style={{  width: '22%', height: '140px', marginLeft: '%' }}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} style={{ opacity: 1, display: 'flex'}} speed={0.1}>
           <img src={cloud3} style={{width: '6%', height: '58px', marginLeft: '8%'}} />
           <img src={cloud6} style={{ width: '4%', height: '32px', marginLeft: '10%' }}/>
           <img src={cloud5} style={{ width: '10%', height: '80px', marginLeft: '3%'}}/>
           <img src={cloud4} style={{ width: '10%', height: '80px', marginLeft: '6%' }}/>
           <img src={cloud4} style={{ width: '8%', height: '70px', marginLeft: '3%' }}/>
           <img src={cloud6} style={{width: '3%', height: '23px', marginLeft: '3%' }}/>
           <img src={cloud5} style={{ width: '8%', height: '65px', marginLeft: '2%'}}/>
        </ParallaxLayer>

        
        <ParallaxLayer offset={0.98} style={{ opacity: 1, display: 'flex'}}  speed={0.2} className="pt-9">
           <img src={cloud4} style={{ width: '9%', height: '85px', marginLeft: '24%' }}/>
           <img src={cloud4} style={{ width: '14%', height: '120px', marginLeft: '8%' }}/>
           <img src={cloud5} style={{width: '18%', height: '130px', marginLeft: '5%' }}/>
        </ParallaxLayer>

       

        <ParallaxLayer offset={1}
         speed={0.2}
         onClick={() => parallax.current.scrollTo(2)}
         style={{
          display: 'fixed'
        }}
          >
          <Navbar2 parallax={parallax} />
           <Apps />
        </ParallaxLayer>

        <ParallaxLayer offset={1.74} style={{ opacity: 1, display: 'flex'}} >
           <img src={gor} />
        </ParallaxLayer>

        <ParallaxLayer  offset={1.77} speed={0.2} style={{ opacity: 1, display: 'flex'}} className="pt-48" >
         <div className='flex flex-row'>
          <img src={gor1} style={{width:'40%', height:'120px',marginLeft: '8%'}}/>
          <img src={gor1} style={{width:'40%', height:'120px',marginLeft: '57%'}}/>
          <img src={gor1} style={{width:'40%', height:'120px',marginLeft: '60%'}}/>
         </div>
        </ParallaxLayer>




        <ParallaxLayer offset={2} 
        speed={0.2} 
        onClick={() => parallax.current.scrollTo(3)}
        style={{
          display: 'fixed'
        }} >
            <Navbar3 parallax={parallax} />
            <About />
        </ParallaxLayer>

            
        <ParallaxLayer offset={2.91} speed={0.2} style={{ opacity: 1, display: 'flex'}}>
          <img src={voln2} style={{ height:'450px'}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.92} speed={0.15} style={{ opacity: 1, display: 'flex'}} className=''>
          <img src={voln1} style={{ height:'450px'}}/>
        </ParallaxLayer>
        <ParallaxLayer  offset={2.96} speed={0.1} style={{ opacity: 1, display: 'flex'}} >
          <img src={voln} style={{ height:'450px'}}/>
        </ParallaxLayer>
       


        <ParallaxLayer offset={3} speed={0.2}
         onClick={() => parallax.current.scrollTo(0)}
         style={{
          display: 'fixed'
        }} >
            <Navbar4 parallax={parallax} />
             <Contact />
        </ParallaxLayer>
     
      </Parallax>
    </div>
  )
}
