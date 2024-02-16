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

const Home = () => {
  return (
    <>
      <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "", name: "Nos Produits" },
          { link: "/aboutus", name: "A propos de nous", special: true },
        ]}
      />
      {/* <Header
        contentType={ContentType.IMAGE}
        content={headerImage}
        contentAlt="GIF of tech solutions"
        title="La révolution Internet"
        text="Amenez votre entreprise au niveau supérieur. Touchez des milliers de personnes en ligne. Avec notre application AfriQExpress, nous connectons toutes sortes d'entreprises à de plus en plus de clients que jamais. Avec AfriQPay, tous vos paiements sont effectués de la manière la plus simple."
        // url="#"
        // buttonText ="Preregister"
      /> */}
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
