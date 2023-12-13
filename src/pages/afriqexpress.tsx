import { useEffect } from "react";
import Nav from "../components/nav/nav";
import Header from "../components/afriqexpresspage/expressheader/ExpressHeader";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqexpresspage/features/features";
import Partners from "../components/afriqexpresspage/partners/partners";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";
import imageHeader from "/img/afriQHome.mp4";
import ExpressPreregisters from "../components/afriqexpresspage/expresspreregisters/expresspreregisters";

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
        text="Préinscrivez-vous ci-dessous pour rejoindre la première plateforme de trading et faire passer votre entreprise au niveau supérieur"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features />
      <Partners />
      <ExpressPreregisters />
      <PreregistrerForm appName="AFRIQEXPRESS" />
      <Footer />
    </>
  );
};

export default AfriQExpress;
