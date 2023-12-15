import Nav from "../../components/nav/nav";
import Header, { ContentType } from "../../components/header/Header";
import Features from "../../components/service/products";
import Preregisters from "../../components/preregisters/preregisters";
import Footer from "../../components/footer/Footer";
import headerImage from "/img/svg/tech.gif";
import "./home.css";

const Home = () => {
  return (
    <>
      <Nav
        links={[
          { link: "/AboutUs", name: "About Us" },
          { link: "#Features", name: "Products" },
          { link: "#Contact", name: "Contact", special: true },
        ]}
      />
      <Header
        contentType={ContentType.IMAGE}
        content={headerImage}
        contentAlt="GIF of tech solutions"
        title="The internet revolution"
        text="Bring your business to the next level Bring your business to the next level Bring your business to the next level Bring your business to the next level"
        // url="#"
        // buttonText ="Preregister"
      />
      <Features />
      <Preregisters />
      <Footer />
    </>
  );
};

export default Home;
