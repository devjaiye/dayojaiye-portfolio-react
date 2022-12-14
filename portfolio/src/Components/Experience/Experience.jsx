import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>Technical </span>
        <span>Writing</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>Coding </span>
        <span>& Technologies</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4+</div>
        <span  style={{color: darkMode?'white':''}}>Work </span>
        <span>Experience</span>
      </div>
    </div>
  );
};

export default Experience;