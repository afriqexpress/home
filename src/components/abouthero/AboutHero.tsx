import "../herosection/HeroSection.css"
import Hero from "./about_hero.png"
import "./AboutHero.css"
import SmallHero from "./small_hero.png"










function AboutHero() {
  return (
    <div className="hero_section">
        <div className="hero_container desktop_hero">
          <div className="text_container">
            <div className="about_text_wrapper">
              <h3 className="heading">The Internet Revolution</h3>
              <p className="paragraph">bring your Business to the next Level with us bring your Business to the next Level with us . bring your Business to the next Level with us bring your Business to the next Level with us</p>
              <button className="hero_contact_btn">Contact Us</button>
          </div>
          </div>
          <div className="desktop_image_container">
            <div className="position_image">
            <img src={Hero} alt="" className="about_hero_img"/>
            </div>
          
            <div  className="smallimage">
                <img src={SmallHero} alt="" className="small_hero" />
            </div>
            </div>
          <div className="image_container">
            <img src={Hero} alt="" className="hero_img"/>
            {/* <div className="bubble_image_container">
                <img src={Bubble} alt="" />
            </div> */}
            </div>
        </div>
  </div>
  )
}

export default AboutHero