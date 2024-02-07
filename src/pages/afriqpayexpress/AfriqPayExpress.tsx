import AfriqExpressHero from "../../components/afriqexpresshero/AfriqExpressHero"
import AriqExpressFeature from "../../components/ariqexpressfeature/AriqExpressFeature"
import Contact from "../../components/contact/Contact"
import Nav from  "../../components/nav/nav"
import NewFooter from "../../components/newfooter/NewFooter"

function AfriqPayExpress() {
  return (
    <div>
      <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "#products", name: "Our Products" },
          { link: "/newabout", name: "About US", special: true },
        ]}
      />
      <AfriqExpressHero />
      <AriqExpressFeature />
      <Contact />
      <NewFooter />
    </div>
  )
}

export default AfriqPayExpress