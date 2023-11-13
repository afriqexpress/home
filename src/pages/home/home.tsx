import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Features from "../../components/service/products";
import Preregisters from "../../components/preregisters/preregisters";
import Footer from "../../components/footer/Footer";
import headerImage from "./header.jpg";

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
        title="The internet revolution"
        text="Bring your business to the next level Bring your business to the next level Bring your business to the next level Bring your business to the next level"
        url="#"
        buttonText="Preregister"
      />
      <Features />
      <Preregisters />
      <Footer />
    </>
  );
};

export default Home;
