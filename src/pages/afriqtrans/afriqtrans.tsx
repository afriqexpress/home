import { useEffect } from "react";
import Header, { ContentType } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/features/features";
import Navigation from "../../components/nav/nav";
import PreregistrerForm from "../../components/preregisterForm/preregisterForm";
import Partners from "../../components/partners/partners";
import Preregisters from "../../components/preregisters/preregisters";
import features from "./features.json"
import partners from "./partners.json"

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
        contentType={ContentType.VIDEO}
        content="{headerImage}"
        contentAlt="Video of a explanation what AfriQTrans does"
        title="AfriQTrans"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features features={features}/>
      <Partners partners={partners} />
      <Preregisters />
      <PreregistrerForm appName="AFRIQTRANS" />
      <Footer />
    </>
  );
};

export default AfriQPay;
