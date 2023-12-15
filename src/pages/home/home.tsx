import Nav from "../../components/nav/nav";
import Header, { ContentType } from "../../components/header/Header";
import Products from "../../components/products/products";
import Preregisters from "../../components/preregisters/preregisters";
import Footer from "../../components/footer/Footer";
import headerImage from "/img/svg/tech.gif";
import products from "./products.json";

const Home = () => {
  return (
    <>
      <Nav
        links={[
          { link: "/AboutUs", name: "About Us" },
          { link: "#products", name: "Products" },
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
      <Products products={products} />
      <Preregisters />
      <Footer />
    </>
  );
};

export default Home;
