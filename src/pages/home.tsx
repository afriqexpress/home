import { Link } from "react-router-dom";

import Nav from "../components/nav/nav";
import Header from "../components/homeheader/Header";
import Features from "../components/service/Features";
import Footer from "../components/footer/Footer";
import PreregisterSection from "../components/preregister/preregistersection";

const Home = () => {
  return (
    <>
      <Nav />
      {/* <Header
        bigTitle="What do we do?" 
        smallTitle="about us text"
        buttonTitle="Preregister Now!"
      />
      <Features />
      <Footer />
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>

      <PreregisterSection /> */}
    </>
  );
};

export default Home;
