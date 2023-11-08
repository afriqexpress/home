import Nav from "../components/nav/nav";
import Header from "../components/afriqexpresspage/expressheader/ExpressHeader";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqexpresspage/features/features";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";
import imageHeader from "/img/afriQHome.mp4";

const AfriQExpress = () => {
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
        imageAlt=""
        title="AfriQExpress"
        text="Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium. Et natus magnam non optio alias sit quia ducimus est soluta optio nam deleniti natus?"
        url="#"
        buttonText="Preregister Now!"
      />
      <Features />
      <PreregistrerForm appName="AFRIQEXPRESS" />
      <Footer />
    </>
  );
};

export default AfriQExpress;
