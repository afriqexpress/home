import Nav from "../components/nav/nav";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import headerImage from "/img/svg/tech.gif";


const Contact = () => {
  return (
    <>
      <Nav
        links={[
          { link: "/AboutUs", name: "About Us" },
          { link: "/", name: "Products" },
          { link: "/Contact", name: "Contact", special: true },
        ]}
      />
      <Header
        image={headerImage}
        imageAlt="GIF of a girl doing tech."
        title="The internet revolution"
        text="Bring your business to the next level Bring your business to the next level Bring your business to the next level Bring your business to the next level"
        url="#"
        buttonText="Preregister"
      />
      <Footer />
    </>
  );
};

export default Contact;
