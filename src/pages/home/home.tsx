import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Apps from "../../components/apps/apps";
import Preregisters from "../../components/preregisters/preregisters";

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
        text="Bring your business to the next level"
        url="#"
        buttonText="Preregister"
      />
      <Features />
      {/* <Apps /> */}
      <Footer />
    </>
  );
};

export default Home;
