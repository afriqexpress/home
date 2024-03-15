import "./NewAbout.css"
import Nav from "../../components/nav/nav";
import AboutHero from "../../components/abouthero/AboutHero";
import Info from "../../components/infosection/Info";
// import Leaders from "../../components/leaders/Leaders";
import Contact from "../../components/contact/Contact";
import NewFooter from "../../components/newfooter/NewFooter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function NewAbout() {
  const { t,i18n } = useTranslation();

  const handleLanguageChange = (language:any) => {
    i18n.changeLanguage(language);
    localStorage.setItem('selectedLanguage', language); // Store selected language in localStorage
    console.log(`Language changed to: ${language}`);
  };

  useEffect(()=> {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    console.log("STORE", storedLanguage);
    
      if (storedLanguage) {
    handleLanguageChange(storedLanguage);
}
  },[])
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