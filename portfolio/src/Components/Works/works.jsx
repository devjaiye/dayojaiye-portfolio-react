import React, {useContext} from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import {motion} from 'framer-motion'

const Works = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div className="works">
        <div className="awesome">
            <span
            style={{color: darkMode? 'white' : ''}}
            >Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 <br /> 
                 ut labore et dolore magna aliqua ut labore et 
                 <br />
                 ut labore et dolore magna aliqua ut labore et dolore magna aliqua
                 <br />
                 ut labore et dolore magna aliqua ut labore 
                 </span>
                    <button className="button s-button">Download CV</button>
                 <div className="blur s-blurl" 
                    style={{
                        background: "#ABF1FF94"
                    }}>
            </div>       
        </div>
        {/* right side with circle */}
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">

            <div className="w-secCircle">
              <img src={upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>

          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>          
        </div>
    </div>
  )
}

export default Works