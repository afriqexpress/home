import Nav from "../../components/nav/nav";
// import Header, { ContentType } from "../../components/header/Header";
// import Products from "../../components/products/products";
// import Preregisters from "../../components/preregisters/preregisters";
// import Footer from "../../components/footer/Footer";
// import headerImage from "/img/svg/tech.gif";
// import products from "./products.json";
import HeroSection from "../../components/herosection/HeroSection"
// import Partner from "../../components/partner/Partner";
import AfriQPay from "../../components/afriqpay/AfriqPay";
import Contact from "../../components/contact/Contact";
import NewFooter from "../../components/newfooter/NewFooter";
import { ParallaxProvider } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";

const Home = () => {
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
          { link: "", name: t("Nos Produits") },
          { link: "/aboutus", name: t("A propos de nous"), special: true },
        ]}
      />
    <div style={{position:'fixed',top:70,right:10,zIndex:9999}}>
      <button style={{backgroundColor:'#6C63FF',color:'#FFFFFF',borderStyle:'none',height:30,width:130,fontSize:15,padding:2,borderRadius:5,cursor:'pointer',border: '1px solid #FFFFFF'}} onClick={() => handleLanguageChange(i18n.language === 'en' ? 'fr' : 'en')}>
        {i18n.language === 'en' ? t('Switch to French') : t('Switch to English')}
      </button>
      </div>
  
       <ParallaxProvider>
       <HeroSection />
       </ParallaxProvider>
     
      {/* <Partner /> */}
      <AfriQPay />
      <Contact />
      <NewFooter />
      {/* <Products products={products} />
      <Preregisters /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
