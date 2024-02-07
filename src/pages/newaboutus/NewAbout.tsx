import "./NewAbout.css"
import Nav from "../../components/nav/nav";
import AboutHero from "../../components/abouthero/AboutHero";
import Info from "../../components/infosection/Info";
import Leaders from "../../components/leaders/Leaders";
import Contact from "../../components/contact/Contact";
import NewFooter from "../../components/newfooter/NewFooter";

function NewAbout() {
  return (
    <div>
          <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "#products", name: "Our Products" },
          { link: "/newabout", name: "About US", special: true },
        ]}
      />
      <AboutHero />
      <Info />
      <Leaders />
      <Contact />
      <NewFooter />
    </div>
  )
}

export default NewAbout