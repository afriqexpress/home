import AfriqBusiness from "../../components/afriqbusiness/AfriqBusiness"
import AfriqPayHero from "../../components/afriqpayHero/AfriqPayHero"
import Contact from "../../components/contact/Contact"
import FeatureAfriq from "../../components/featureofafriq/FeatureAfriq"
import Nav from "../../components/nav/nav"
import NewFooter from "../../components/newfooter/NewFooter"

function AfriqPay() {
  return (
    <>
    <Nav
        links={[
          { link: "/", name: "Home" },
          { link: "#products", name: "Our Products" },
          { link: "/newabout", name: "About US", special: true },
        ]}
      />
      <AfriqPayHero />
      <FeatureAfriq />
      <AfriqBusiness />
      <Contact />
      <NewFooter />
      </>
  )
}

export default AfriqPay