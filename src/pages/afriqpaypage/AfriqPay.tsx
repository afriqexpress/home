import { useEffect } from "react"
import AfriqBusiness from "../../components/afriqbusiness/AfriqBusiness"
import AfriqPayHero from "../../components/afriqpayHero/AfriqPayHero"
import Contact from "../../components/contact/Contact"
import FeatureAfriq from "../../components/featureofafriq/FeatureAfriq"
import Nav from "../../components/nav/nav"
import NewFooter from "../../components/newfooter/NewFooter"
import { useTranslation } from "react-i18next";


function AfriqPay() {
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
    <>
    <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "#products", name: t("Nos Produits")},
          { link: "/aboutus", name: t("A propos de nous"), special: true },
        ]}
      />
        <div style={{position:'fixed',top:70,right:5,zIndex:9999}}>
      </div>
      <AfriqPayHero />
      <FeatureAfriq />
      <AfriqBusiness />
      <Contact />
      <NewFooter />
      </>
  )
}

export default AfriqPay