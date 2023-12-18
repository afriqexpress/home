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
        title="La révolution Internet"
        text="Amenez votre entreprise au niveau supérieur. Touchez des milliers de personnes en ligne. Avec notre application AfriQExpress, nous connectons toutes sortes d'entreprises à de plus en plus de clients que jamais. Avec AfriQPay, tous vos paiements sont effectués de la manière la plus simple."
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
