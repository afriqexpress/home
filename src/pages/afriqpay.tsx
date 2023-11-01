import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqexpresspage/features/features";
import Navigation from "../components/nav/nav";

const AfriQPay = () => {
  return (
    <>
      <Navigation links={[
                { link: "#Features", name: "Features" },
                { link: "#Contact", name: "Contact" },
            ]} />
      <Header
        image=""
        imageAlt=""
        title="AfriQPay"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features />
      <Footer />
    </>
  );
};

export default AfriQPay;
