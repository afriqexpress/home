import { useState } from "react";

import "./nav.css";
import afriQExpressLogo from "./logo.svg";
import hamburgIcon from "./menu.svg";
import closeIcon from "./close.svg";


const Navigation = () => {
    const [hamburgOpen, setHamburgOpen] = useState<boolean>(false);

    return (
        <>
            <nav className="navigation">
                <a href='/' className="navigation__logo"><img src={afriQExpressLogo} alt="Brand Logo" /></a>
                <a href="#Over" className="navigation__item">About Us</a>
                <a href="#Features" className="navigation__item">Features</a>
                <a href="#Contact" className="navigation__item">Contact</a>
                <a href='/Login' className="navigation__special">preregister</a>

                <button onClick={() => setHamburgOpen(current => !current)} className="navigation__hamburg"><img src={hamburgOpen ? closeIcon : hamburgIcon} alt="" /></button>
            </nav>

            <nav className={hamburgOpen ? "hamburg_navigation hamburg_navigation--visible" : "hamburg_navigation"}>
                <a href="#Over" className="navigation__item">About Us</a>
                <a href="#Features" className="navigation__item">Features</a>
                <a href="#Contact" className="navigation__item">Contact</a>
                <a href='/Login' className="navigation__special">preregister</a>
            </nav>
        </>

    );
}

export default Navigation;