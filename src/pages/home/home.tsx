import { Link } from "react-router-dom";

import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
<<<<<<< HEAD
=======
import Features from "../../components/service/products";
>>>>>>> origin/dev
import Footer from "../../components/footer/Footer";

import headerImage from "./header.jpg";
import Apps from "../../components/apps/apps";

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
        title="Your future is bright"
        text="Start your online presence here. Bring innovation to your business and your business into the world wide web."
        url="#"
        buttonText="Preregister"
      />
<<<<<<< HEAD
      <PreregisterSection />
      <Footer />
=======
      <Apps />
      <Footer />
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>

>>>>>>> origin/dev
    </>
  );
};

export default Home;
