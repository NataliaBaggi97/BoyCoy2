import robo from './img/robo_hand_arm.png'
import robo1 from './img/robo_hand_left.png'
import robo2 from './img/robo_hand_right.png'
import list from './img/paper_yellow.png'
import logos from './img/logos.png'


const About = () => {
    return(
      <div className='bg-yellow-600 flex justify-between px-60 h-screen w-screen pt-20'>
          <div className='pt-24'>
            <img src={list}/>
          </div>
          <div>
            <img src={robo}/>
          </div>
          <div>
            <h2 className='text-2xl'>Brend experience</h2>
            <p>We are in the business for over 6 years.</p>
            <p>Our team members had pleasure to</p>
            <p>create for following brands in the past.</p>
            <img src={logos} className="pt-8"/>
          </div>
      </div>

    )
}




export default About;