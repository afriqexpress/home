import { useEffect } from "react";
import Nav from "../components/nav/nav";
import Header from "../components/afriqexpresspage/expressheader/ExpressHeader";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqexpresspage/features/features";
import Partners from "../components/afriqexpresspage/partners/partners";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";
import imageHeader from "/img/afriQHome.mp4";
import Preregisters from "../components/afriqexpresspage/preregisters/preregisters";

const AfriQExpress = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav
        links={[
          { link: "#Features", name: "Features" },
          { link: "#Contact", name: "Contact" },
        ]}
      />
      <Header
        image={imageHeader}
        imageAlt="Video of a explanation what AfriQExpress does"
        title="AfriQExpress"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features />
      <Partners />
      <Preregisters />
      <PreregistrerForm appName="AFRIQEXPRESS" />
      <Footer />
    </>
  );
};

export default AfriQExpress;
