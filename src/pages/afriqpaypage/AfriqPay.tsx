import AfriqBusiness from "../../components/afriqbusiness/AfriqBusiness"
import AfriqPayHero from "../../components/afriqpayHero/AfriqPayHero"
import Contact from "../../components/contact/Contact"
import FeatureAfriq from "../../components/featureofafriq/FeatureAfriq"
import Nav from "../../components/nav/nav"
import NewFooter from "../../components/newfooter/NewFooter"
import { useTranslation } from "react-i18next";


function AfriqPay() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language:any) => {
    i18n.changeLanguage(language);
    console.log(`Language changed to: ${language}`);
  };
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
      <button style={{backgroundColor:'#6C63FF',color:'#FFFFFF',borderStyle:'none',height:30,width:130,fontSize:15,padding:2,borderRadius:5,cursor:'pointer',border: '1px solid #FFFFFF'}} onClick={() => handleLanguageChange(i18n.language === 'en' ? 'fr' : 'en')}>
        {i18n.language === 'en' ? t('Switch to French') : t('Switch to English')}
      </button>
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