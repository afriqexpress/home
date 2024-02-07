import "./HeroSection.css"
import Line8 from "./Line 8.png";
import Line9 from "./Line 9.png";
import Line10 from "./Line 9.png";
import Line11 from "./Line 9.png";
import Line12 from "./Line 9.png";
import Line13 from "./Line 9.png";
import Line14 from "./Line 9.png";
import Line15 from "./Line 9.png";
import Line16 from "./Line 9.png";
import Line17 from "./Line 9.png";
import Line18 from "./Line 9.png";
import Line19 from "./Line 9.png";
import Line20 from "./Line 20.png";
import Line21 from "./Line 21.png";
import Line22 from "./Line 22.png";
import Line23 from "./Line 23.png";
import Line24 from "./Line 24.png";
import Line25 from "./Line 25.png";
import Line26 from "./Line 26.png";
import Line27 from "./Line 27.png";
import Mobile_line10 from "./line10mobile.png"
import Hero from "./hero_image.png"
import Bubble from "./bubble.png"







function HeroSection() {
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

export default HeroSection