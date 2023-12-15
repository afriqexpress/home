import { useEffect } from "react";
import Nav from "../../components/nav/nav";
import Header, { ContentType } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/features/features";
import Partners from "../../components/partners/partners";
import PreregistrerForm from "../../components/preregisterForm/preregisterForm";
import imageHeader from "/img/afriQHome.mp4";
import Preregisters from "../../components/preregisters/preregisters";
import partners from "./partners.json"
import features from "./features.json"

const AfriQExpress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav
        links={[
          { link: "#features", name: "Features" },
          { link: "#preregister", name: "Preregister now!", special: true }
        ]}
      />
      <Header
        contentType={ContentType.VIDEO}
        content={imageHeader}
        contentAlt="Video of a explanation what AfriQExpress does"
        title="AfriQExpress"
        text="Préinscrivez-vous ci-dessous pour rejoindre la première plateforme de trading et faire passer votre entreprise au niveau supérieur"
        url="#preregister"
        buttonText="Preregister Now!"
      />
      <Features features={features} text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi."/>
      <Partners partners={partners}/>
      <Preregisters />
      <PreregistrerForm appName="AFRIQEXPRESS" />
      <Footer />
    </>
  );
};

export default AfriQExpress;
