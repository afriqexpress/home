import { Link } from "react-router-dom";

import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Features from "../../components/service/products";
import Footer from "../../components/footer/Footer";
import PreregisterSection from "../../components/preregister/preregistersection";

import headerImage from "./header.jpg";

const Home = () => {
  return (
    <>
      <Nav links={[
        { link: "#Over", name: "About Us" },
        { link: "#Features", name: "Products" },
        { link: "#Contact", name: "Contact", special: true },
      ]} />

      <Header
        image={headerImage}
        imageAlt=""
        title="What do we do?" 
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />

      <Features />
      <Footer />
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>

      <PreregisterSection />
    </>
  );
};

export default Home;
