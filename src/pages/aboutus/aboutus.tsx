import Nav from "../../components/nav/nav";
import AboutUsSection from "../../components/aboutUs/aboutUs";
import Footer from "../../components/footer/Footer";
import TeamMembers from "../../components/teammembers/teammembers";
import teamMembers from "./teammembers.json"


const AboutUs = () => {
  return (
    <>
      <Nav
        links={[
          { link: "#Contact", name: "Contact", special: true },
        ]}
      />
      <AboutUsSection />
      <TeamMembers teamMembers={teamMembers} />
      <Footer />
    </>
  );
};

export default AboutUs;
