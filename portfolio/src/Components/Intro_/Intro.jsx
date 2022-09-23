import React from 'react'
import './Intro.css'

import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import boy from '../../img/dayo_jaiye.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {useContext} from 'react'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Intro = () => {
    //..framer motion 
  const transition = {duration: 2, type: 'spring'}
     // context and darkmode...
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Temidayo Jaiyeoba</span>
                <span>Software Enginner from Nigeria with high level 
                    of experience in developing quality
                    websites and mobile apps for businesses
                </span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icons">
                <Link spy={true} to='https://www.linkedin.com/in/dayo-jaiye/' smooth={true}>
                    <img src={linkedin} alt="linkedin" /></Link>
                <img src={instagram} alt="instagram" />
                <img src={github} alt="github" />
            </div>
        </div>

        <div className="i-right">
            <img src={vector1} alt="blue vector" />
            <img src={vector2} alt="yellow vector" />
            <img src={boy} alt=""/>

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesImoji}
          alt=""/>
        
            
            <motion.div
              initial={{ top: "-4%", left: "74%" }}
              whileInView={{ left: "68%" }}
              transition={transition}
              className="floating-div" 
              //..darkMode..
            style={{top: '-4%', left: '68%', color: darkMode? "black" : ""}}>

                <FloatingDiv image={crown} txt1="Software" txt2="Engineer"/>
            </motion.div>
            {/* animation */}
            <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
            // darkMode...
            style={{top: '12rem', left: '0rem', color: darkMode? "black" : ""}}>
                <FloatingDiv image={thumbup} txt1 = 'Technical' txt2='Writer'/>
            </motion.div>
            
            {/* blur divs */}
            <div className="blur" 
            style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" 
                  style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',  
                    height: '11rem',
                    left: '-9rem'
                    }}>
            </div>
        </div>
    </div>
  )
}

export default Intro