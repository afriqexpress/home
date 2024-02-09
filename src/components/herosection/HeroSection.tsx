import "./HeroSection.css";
import Hero from "./hero_image.png";
import { useParallax } from 'react-scroll-parallax';









function HeroSection() {
  const mage = useParallax<HTMLDivElement>({
    scale: [1,0.9, 'easeInQuad'],
  });
  const frog = useParallax<HTMLDivElement>({
    scaleX: [1, 0.9, 'easeInQuad'],
  });
  const moon = useParallax<HTMLDivElement>({
    scale: [1, 0.9, 'easeInQuad'],
  });
 
  return (

<>
    <div  className="hero_section"></div>
      <div className="hero_section_wrapper">
          <div className="hero_container">
            <div className="text_container">
              <div className="moon" ref={moon.ref}>
              <div className="text_wrapper">
                <h3 className="heading">The Internet Revolution</h3>
                <p className="paragraph">bring your Business to the next Level with us bring your Business to the next Level with us . bring your Business to the next Level with us bring your Business to the next Level with us</p>
                <div className="frog" ref={frog.ref}>
                <button  className="hero_contact_btn" >Contact Us</button>
                </div>
            </div>
            </div>
            </div>
            <div className="mage" ref={mage.ref}>
              <img src={Hero} alt="" className="hero_img" />
              </div>
          </div>
    </div>
    </>
  )
}

export default HeroSection