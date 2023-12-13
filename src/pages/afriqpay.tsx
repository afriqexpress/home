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
        imageAlt="Video of a explanation what AfriQPay does"
        title="AfriQPay"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
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
