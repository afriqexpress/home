import Nav from "../components/nav/nav";
import AboutUsSection from "../components/aboutuspage/aboutussection/aboutussection";
import Footer from "../components/footer/Footer";
import TeamMembers from "../components/aboutuspage/teammembers/teammembers";


const AboutUs = () => {
  return (
    <>
      <Nav
        links={[
          { link: "#Contact", name: "Contact", special: true },
        ]}
      />
      <AboutUsSection />
      <TeamMembers />
      <Footer />
    </>
  );
};

export default AboutUs;
