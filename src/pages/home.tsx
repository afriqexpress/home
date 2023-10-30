import Nav from "../components/nav/nav";
import Features from "../components/service/Features";
import Footer from "../components/footer/Footer";
import App from "../components/app/app";
import Card from "../components/card/card";

const Home = () => {
  return (
    <>
      {/* <Nav
        links={[
          { link: "#Over", name: "About Us" },
          { link: "#Features", name: "Features" },
          { link: "#Contact", name: "Contact" },
          { link: "/Login", name: "Preregister", special: true },
        ]}
      /> */}
      <App />
      <Footer />
    </>
  );
};

export default Home;
