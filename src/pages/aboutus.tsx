import Nav from "../components/nav/nav";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import headerImage from "/img/svg/tech.gif";


const AboutUs = () => {
  return (
    <>
      <Nav
        links={[
          { link: "/AboutUs", name: "About Us" },
          { link: "/", name: "Products" },
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
      <Footer />
    </>
  );
};

export default AboutUs;
