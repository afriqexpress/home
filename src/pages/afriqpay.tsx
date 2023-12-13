import { useEffect } from "react";
import Header from "../components/afriqpaypage/payheader/PayHeader";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqpaypage/payfeatures/payfeatures";
import Navigation from "../components/nav/nav";
import headerImage from "/img/afriQPay.mp4";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";
import Partners from "../components/afriqpaypage/partners/partners";
import PayPreregisters from "../components/afriqpaypage/paypreregisters/paypreregisters";

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
        image={headerImage}
        imageAlt="AfriQPay Logo"
        title="Paiement sûr et facile"
        text="Avec notre nouvelle plateforme de paiement. Votre portefeuille dans votre téléphone. Payer et transférer de l'argent facilement à votre famille et vos amis"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features />
      <Partners />
      <PayPreregisters />
      <PreregistrerForm appName="AFRIQPAY" />
      <Footer />
    </>
  );
};

export default AfriQPay;
