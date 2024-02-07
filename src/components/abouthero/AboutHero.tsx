import "../herosection/HeroSection.css"
import Line8 from "../herosection/Line 8.png";
import Line9 from "../herosection/Line 9.png";
import Line10 from "../herosection/Line 9.png";
import Line11 from "../herosection/Line 9.png";
import Line12 from "../herosection/Line 9.png";
import Line13 from "../herosection/Line 9.png";
import Line14 from "../herosection/Line 9.png";
import Line15 from "../herosection/Line 9.png";
import Line16 from "../herosection/Line 9.png";
import Line17 from "../herosection/Line 9.png";
import Line18 from "../herosection/Line 9.png";
import Line19 from "../herosection/Line 9.png";
import Line20 from "../herosection/Line 20.png";
import Line21 from "../herosection/Line 21.png";
import Line22 from "../herosection/Line 22.png";
import Line23 from "../herosection/Line 23.png";
import Line24 from "../herosection/Line 24.png";
import Line25 from "../herosection/Line 25.png";
import Line26 from "../herosection/Line 26.png";
import Line27 from "../herosection/Line 27.png";
import Hero from "./about_hero.png"
import Bubble from "../herosection/bubble.png"
import "./AboutHero.css"
import Mobile_line10 from "../herosection/line10mobile.png"








function AboutHero() {
  return (
    <div className="hero_section">
    <div className="mobile_lines">
    <img src={Line20} alt="" className="hozontal_line_image" />
        <img src={Line21} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line22} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line23} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line24} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line25} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line26} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line27} alt="" className="hozontal_line_image mobile_horizontal_image" />
        <img src={Line27} alt="" className="hozontal_line_image mobile_horizontal_image" style={{marginTop:350}} /> 
        <img src={Mobile_line10} alt="" className="hozontal_line_image mobile_horizontal_image" style={{marginTop:5}} />
          <img src={Mobile_line10} alt="" className="hozontal_line_image mobile_horizontal_image" style={{marginTop:10}} />
          <img src={Mobile_line10} alt="" className="hozontal_line_image mobile_horizontal_image" style={{marginTop:15}} />
        
        
    </div>
      <div className="lines">
        <img src={Line8} alt=""  className="line_image"  />
        <img src={Line9} alt=""  className="line_image" />
        <img src={Line10} alt="" className="line_image" />
        <img src={Line11} alt="" className="line_image" />
        <img src={Line12} alt="" className="line_image" />
        <img src={Line13} alt="" className="line_image" />
        <img src={Line14} alt="" className="line_image" />
        <img src={Line15} alt="" className="line_image" />
        <img src={Line16} alt="" className="line_image" />
        <img src={Line17} alt="" className="line_image" />
        <img src={Line18} alt="" className="line_image" />
        <img src={Line19} alt="" className="line_image" />
        </div>
        <div className="horizontal-lines">
        <img src={Line20} alt="" className="hozontal_line_image" />
        <img src={Line21} alt="" className="hozontal_line_image" />
        <img src={Line22} alt="" className="hozontal_line_image" />
        <img src={Line23} alt="" className="hozontal_line_image" />
        <img src={Line24} alt="" className="hozontal_line_image" />
        <img src={Line25} alt="" className="hozontal_line_image" />
        <img src={Line26} alt="" className="hozontal_line_image" />
        <img src={Line27} alt="" className="hozontal_line_image" />
        </div>
        <div className="hero_container">
          <div className="text_container">
            <div className="text_wrapper">
              <h3 className="heading">The Internet Revolution</h3>
              <p className="paragraph">bring your Business to the next Level with us bring your Business to the next Level with us . bring your Business to the next Level with us bring your Business to the next Level with us</p>
              <button className="hero_contact_btn">Contact Us</button>
          </div>
          </div>
          <div className="image_container">
            <img src={Hero} alt="" className="hero_img"/>
            <div className="bubble_image_container">
                <img src={Bubble} alt="" />
            </div>
            </div>
        </div>
  </div>
  )
}

export default AboutHero