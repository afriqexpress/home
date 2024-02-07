import { useEffect, useState } from "react";

import "./nav.css";
import afriQExpressLogo from "./Afriqlogo.png";
import hamburgIcon from "./menu.svg";
import closeIcon from "./close.svg";
import DropDown from "./dropdown.png"

interface Props {
    links: {
        special?: boolean,
        name: string,
        link: string
    }[]
}

const Navigation = ({ links }: Props) => {
    const [hamburgOpen, setHamburgOpen] = useState<boolean>(false);
    const [showNav, setShowNav] = useState<boolean>(true);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleHamburg = () => setHamburgOpen(current => !current);
    const handleDropdownToggle = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        let oldPosition = document.documentElement.scrollTop;

        document.addEventListener("scroll", () => {
            const position = document.documentElement.scrollTop;

            setShowNav(position < oldPosition);

            oldPosition = position <= 0 ? 0 : position;
        });

    }, []);

    return (
        <>
            <nav className={showNav || hamburgOpen ? "navigation navigation--visible" : "navigation"}>
                <a href='/' className="navigation__logo mobile_navigation__logo"><img src={afriQExpressLogo} alt="Brand Logo" /></a>

                <div className="nav_links">
                    {links.map((link, index) => {
                        return (
                            <>
                                <a key={index} href={link.link}   className="navigation__item hamburg_navigation--visible" >{link.name}</a>
                                {link.name === "Our Products" &&
                                    <>
                                    <div className="drop_down_logo">
                                    <img src={DropDown} alt="" className="arrow_logo"
                                        onClick={handleDropdownToggle}
                                    />
                                    </div>
                                      </>
                                }
                                {isDropdownVisible && (
                                    <div className="drop_down navigation__item navigation--visible">
                                        {/* Your dropdown content goes here */}
                                        <a href="/afriqpaypage" className="dropdown-link">AfriQPay</a>
                                        <hr className="horizontal-line"/>
                                        <a href="/afriqpayexpress" className="dropdown-link">AfriQExpress</a>
                                    </div>
                                )}
                            </>
                        );
                    })}
                    
                </div>
                <div className="contact_btn_nav navigation__item">Contact Us</div>
                <button onClick={toggleHamburg} className="navigation__hamburg"><img src={hamburgOpen ? closeIcon : hamburgIcon} alt="" /></button>


            </nav>

            <nav className={hamburgOpen ? "hamburg_navigation hamburg_navigation--visible" : "hamburg_navigation"}>
                {links.map((link, index) => {
                    return (
                        <a key={index} href={link.link} className={link.special ? "navigation__special navigation__item" : "navigation__item"} onClick={toggleHamburg} >{link.name}</a>
                    );
                })}
            </nav>
        </>

    );
}

export default Navigation;