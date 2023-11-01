
import Nav from "../../components/nav/nav";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Apps from "../../components/apps/apps";
import Preregisters from "../../components/preregisters/preregisters";
import Header from "../../components/header/Header";
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
        title="Your future is bright"
        text="Start your online presence here. Bring innovation to your business and your business into the world wide web."
        url="#"
        buttonText="Preregister"
      />
      
      <Apps />
      <Preregisters />
      <Footer />
    </>
  );
};

export default Home;
