import "./NewAbout.css"
import Nav from "../../components/nav/nav";
import AboutHero from "../../components/abouthero/AboutHero";
import Info from "../../components/infosection/Info";
// import Leaders from "../../components/leaders/Leaders";
import Contact from "../../components/contact/Contact";
import NewFooter from "../../components/newfooter/NewFooter";
import { useTranslation } from "react-i18next";

function NewAbout() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language:any) => {
    i18n.changeLanguage(language);
    console.log(`Language changed to: ${language}`);
  };
  return (
    <div>
          <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "#products", name: t("Nos Produits") },
          { link: "/aboutus", name: t("A propos de nous"), special: true },
        ]}
      />
        <div style={{position:'fixed',top:70,right:10,zIndex:9999}}>
      <button style={{backgroundColor:'#6C63FF',color:'#FFFFFF',borderStyle:'none',height:30,width:130,fontSize:15,padding:2,borderRadius:5,cursor:'pointer',border: '1px solid #FFFFFF'}} onClick={() => handleLanguageChange(i18n.language === 'en' ? 'fr' : 'en')}>
        {i18n.language === 'en' ? t('Switch to French') : t('Switch to English')}
      </button>
      </div>  
      <AboutHero />
      <Info />
      {/* <Leaders /> */}
      <Contact />
      <NewFooter />
    </div>
  )
}

export default NewAbout