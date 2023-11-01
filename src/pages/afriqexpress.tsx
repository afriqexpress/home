import { Link } from "react-router-dom";
import Nav from "../components/nav/nav";
import Header from "../components/afriqexpresspage/header/Header";
import Footer from "../components/footer/Footer";
import Features from "../components/afriqexpresspage/features/features";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";

const AfriQExpress = () => {
    return(
        <>
            <Nav links={[
                { link: "#Features", name: "Features" },
                { link: "#Contact", name: "Contact" },
            ]} />
            <Header
                image=""
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
}

export default AfriQExpress