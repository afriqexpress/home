import { Link } from "react-router-dom";
import Nav from "../components/nav/nav";
import PreregistrerForm from "../components/preregisterForm/preregisterForm";

const AfriQExpress = () => {
    return(
        <>
            <Nav links={[
                { link: "#Features", name: "Features" },
                { link: "#Contact", name: "Contact" },
            ]} />
        
            <Link to="/">Home</Link>
            <h1>AfriQExpress</h1>
            <PreregistrerForm appName="AFRIQEXPRESS" />
        </>
    );
}

export default AfriQExpress