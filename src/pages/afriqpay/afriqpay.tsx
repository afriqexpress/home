import { useEffect } from "react";
import Header, { ContentType } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/features/features";
import Nav from "../../components/nav/nav";
import headerImage from "/img/afriQPay.mp4";
import PreregistrerForm from "../../components/preregisterForm/preregisterForm";
import Partners from "../../components/partners/partners";
import Preregisters from "../../components/preregisters/preregisters";
import partners from "./partners.json";
import features from "./features.json";

const AfriQPay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav
        links={[
          { link: "#features", name: "Features" },
          { link: "#preregister", name: "Preregister now!", special: true },
        ]}
      />
      <Header
        contentType={ContentType.VIDEO}
        content={headerImage}
        contentAlt="AfriQPay Logo"
        title="Paiement sûr et facile"
        text="Avec notre nouvelle plateforme de paiement. Votre portefeuille dans votre téléphone. Payer et transférer de l'argent facilement à votre famille et vos amis"
        url="#preregister"
        buttonText="Pré-inscrivez-vous maintenant!"
      />
      <Features
        features={features}
        text="payez et recevez de l'argent en toute sécurité et rapidement avec notre nouvelle application qui connecte les gens et vous permet de disposer de votre portefeuille en ligne."
      />
      <Partners partners={partners} />
      <Preregisters />
      <PreregistrerForm appName="AFRIQPAY" />
      <Footer />
    </>
  );
};

export default AfriQPay;
