import { useState } from "react";

import "./nav.css";
import afriQExpressLogo from "./logo.svg";
import hamburgIcon from "./menu.svg";
import closeIcon from "./close.svg";

interface Props {
    links: {
        special?: boolean,
        name: string,
        link: string
    }[]
}

const Navigation = ({ links }: Props) => {
    const [hamburgOpen, setHamburgOpen] = useState<boolean>(false);

    const toggleHamburg = () => setHamburgOpen(current => !current);

    return (
        <>
            <nav className="navigation">
                <a href='/' className="navigation__logo"><img src={afriQExpressLogo} alt="Brand Logo" /></a>

                {links.map((link, index) => {
                    return(
                        <a key={index} href={link.link} className={link.special ? "navigation__special" : "navigation__item"} >{link.name}</a>
                    );
                })}

                <button onClick={toggleHamburg} className="navigation__hamburg"><img src={hamburgOpen ? closeIcon : hamburgIcon} alt="" /></button>
            </nav>

            <nav className={hamburgOpen ? "hamburg_navigation hamburg_navigation--visible" : "hamburg_navigation"}>
            {links.map((link, index) => {
                    return(
                        <a key={index} href={link.link} className={link.special ? "navigation__special" : "navigation__item"} onClick={toggleHamburg} >{link.name}</a>
                    );
                })}
            </nav>
        </>

    );
}

export default Navigation;