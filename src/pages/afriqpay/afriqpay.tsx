import { useEffect } from "react";
import Header, { ContentType } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/features/features";
import Navigation from "../../components/nav/nav";
import headerImage from "/img/afriQPay.mp4";
import PreregistrerForm from "../../components/preregisterForm/preregisterForm";
import Partners from "../../components/partners/partners";
import PayPreregisters from "../../components/afriqpaypage/paypreregisters/paypreregisters";
import partners from "./partners.json"
import features from "./features.json"

const AfriQPay = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation
        links={[
          { link: "#PayFeatures", name: "Features" },
          { link: "#Contact", name: "Contact" },
        ]}
      />
      <Header
        contentType={ContentType.VIDEO}
        content={headerImage}
        contentAlt="AfriQPay Logo"
        title="Paiement sûr et facile"
        text="Avec notre nouvelle plateforme de paiement. Votre portefeuille dans votre téléphone. Payer et transférer de l'argent facilement à votre famille et vos amis"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features features={features} />
      <Partners partners={partners} />
      <PayPreregisters />
      <PreregistrerForm appName="AFRIQPAY" />
      <Footer />
    </>
  );
};

export default AfriQPay;
