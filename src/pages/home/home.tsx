import { Link } from "react-router-dom";

import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PreregisterSection from "../../components/preregister/preregistersection";

import headerImage from "./header.jpg";
import Apps from "../../components/apps/apps";

const Home = () => {
  return (
    <>
      <Nav
        links={[
          { link: "#Over", name: "About Us" },
          { link: "#Features", name: "Features" },
          { link: "#Contact", name: "Contact" },
          { link: "/Login", name: "Preregister", special: true },
        ]}
      />

      <Header
        image={headerImage}
        imageAlt=""
        title="Your future is bright"
        text="Start your online presence here. Bring innovation to your business and your business into the world wide web."
        url="#"
        buttonText="Preregister"
      />
      <PreregisterSection />
      <Footer />
    </>
  );
};

export default Home;
