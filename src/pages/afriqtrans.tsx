import { useEffect } from "react";
import Header from "../components/afriqpaypage/payheader/PayHeader";
import Footer from "../components/footer/Footer";
import TransFeatures from "../components/afriqtranspage/transfeatures/transfeatures";
import Navigation from "../components/nav/nav";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";
import Partners from "../components/afriqtranspage/partners/partners";
import TransPreregisters from "../components/afriqtranspage/transpreregisters/transpreregisters";

const AfriQPay = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation
        links={[
          { link: "#TransFeatures", name: "Features" },
          { link: "#Contact", name: "Contact" },
        ]}
      />
      <Header
        image="{headerImage}"
        imageAlt="Video of a explanation what AfriQTrans does"
        title="AfriQTrans"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />
      <TransFeatures />
      <Partners />
      <TransPreregisters />
      <PreregistrerForm appName="AFRIQTRANS" />
      <Footer />
    </>
  );
};

export default AfriQPay;
