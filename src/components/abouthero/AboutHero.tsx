import "../herosection/HeroSection.css"
import Hero from "./about_hero.png"
import "./AboutHero.css"
import SmallHero from "./small_hero.png"










function AboutHero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="about_hero_section">
        <div className="hero_container desktop_hero">
          <div className="text_container">
            <div className="about_text_wrapper">
              <h3 className="heading">Qui sommes-nous !</h3>
              <p className="paragraph_about">
              Nous sommes afriQExpress, l'incarnation de l'innovation et de la résolution de problèmes à travers le prisme de la technologie SaaS. En tant qu'entreprise dédiée à transformer les défis en opportunités, nous développons des solutions logicielles qui non seulement répondent aux besoins actuels de nos clients mais anticipent également les tendances futures du marché.
              </p>
              <button className="hero_contact_btn" onClick={handleScrollToContact}>Contactez-nous</button>
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