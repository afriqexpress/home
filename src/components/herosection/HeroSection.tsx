import { useTranslation } from "react-i18next";
import "./HeroSection.css";
import Hero from "./hero_image.png";
import { useParallax } from 'react-scroll-parallax';









function HeroSection() {
  const { t } = useTranslation();

  const mage = useParallax<HTMLDivElement>({
    scale: [1,0.9, 'easeInQuad'],
  });
  const frog = useParallax<HTMLDivElement>({
    scaleX: [1, 0.9, 'easeInQuad'],
  });
  const moon = useParallax<HTMLDivElement>({
    scale: [1, 0.9, 'easeInQuad'],
  });

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (

<>
    <div  className="hero_section"></div>
      <div className="hero_section_wrapper">
          <div className="hero_container">
            <div className="text_container">
              <div className="moon" ref={moon.ref}>
              <div className="text_wrapper">
                <h3 className="heading">{t('Réinventer le Quotidien : La Révolution Logicielle')}</h3>
                <p className="paragraph">
               { t('À afriQExpress, nous transcendons les défis technologiques. Notre mission ? Créer des solutions logicielles sur mesure qui répondent aux problèmes les plus épineux, simplifiant la complexité pour libérer votre potentiel. Innovation et simplicité nous guident, propulsant votre parcours vers un futur sans limites.')}
                </p>
                <div className="frog" ref={frog.ref}>
                <button  className="hero_contact_btn" onClick={handleScrollToContact} >Contact Us</button>
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