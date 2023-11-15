import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Features from "../../components/service/products";
import Preregisters from "../../components/preregisters/preregisters";
import Footer from "../../components/footer/Footer";
import headerImage from "./header.svg";

const Home = () => {
  return (
    <>
      <Nav
        links={[
          { link: "#Over", name: "About Us" },
          { link: "#Features", name: "Products" },
          { link: "#Contact", name: "Contact", special: true },
        ]}
      />
      <Header
        image={headerImage}
        imageAlt=""
        title="Votre entreprise peut se développer grâce à la technologie"
        text="Inscrivez-vous ci-dessous pour vous pré-inscrire à AfriQExpress et AfriQPay. Notre nouvelle plateforme pour le commerce et le paiement !"
      />
      <Features />
      <Preregisters />
      <Footer />
    </>
  );
};

export default Home;
