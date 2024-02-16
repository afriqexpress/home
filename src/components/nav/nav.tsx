import { useEffect, useState } from "react";

import "./nav.css";
import afriQExpressLogo from "./Afriqlogo.png";
import hamburgIcon from "./menu.svg";
import closeIcon from "./close.svg";
import DropDown from "./dropdown.png"
import { useLocation } from 'react-router-dom';



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
    const [mobileDrop,setmobileDrop] = useState(false)

    const location = useLocation();

    useEffect(() => {
        setmobileDrop(false); // Close dropdown on page change
      }, [location.pathname]);

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


    
    const handleRemoveDropDown = ()=> {

        isDropdownVisible === true &&
        console.log("Clicked");
        setDropdownVisible(false)
        
    } 

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleMobileDropDown = ()=> {
            setmobileDrop(!mobileDrop)
            console.log("clicked");
            
      }

      const handleLinkMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleLinkMouseLeave = () => {
        setDropdownVisible(false);
      };
    
      const handleDropdownMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleDropdownMouseLeave = () => {
        setDropdownVisible(false);
      };

    return (
        <>
            <nav className={showNav || hamburgOpen ? "navigation navigation--visible" : "navigation"} onClick={handleRemoveDropDown}
            >
                <a href='/' className="navigation__logo mobile_navigation__logo hover-dropdown"><img src={afriQExpressLogo} alt="Brand Logo" /></a>

                <div className="nav_links">
                    {links.map((link, index) => {
                        return (
                            <>
                                <a key={index} href={link.link}   className="navigation__item hamburg_navigation--visible" 
                                //   onMouseEnter={link.name === "Our Products" ? handleDropdownToggle : undefined}
                                onMouseEnter={link.name === 'Our Products' ? handleLinkMouseEnter : undefined}
                                onMouseLeave={handleLinkMouseLeave}
                                >{link.name}</a>
                                {link.name === "Our Products" &&
                                    <>
                                    <div className="drop_down_logo"
                                      onMouseEnter={handleDropdownMouseEnter}
                                      onMouseLeave={handleDropdownMouseLeave}
                                    >
                                    <img src={DropDown} alt="" className="arrow_logo"
                                     onMouseEnter={link.name === "Our Products" ? handleDropdownToggle : undefined}
                                    />
                                    </div>
                                      </>
                                }
                                {isDropdownVisible && (
                                    <div className="drop_down navigation__item navigation--visible"
                                    onMouseEnter={handleDropdownMouseEnter}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    >
                                        {/* Your dropdown content goes here */}
                                        <a href="/afriqpay" className="dropdown-link">AfriQPay</a>
                                        {/* <hr className="horizontal-line"/>
                                        <a href="/afriqpayexpress" className="dropdown-link">AfriQExpress</a> */}
                                    </div>
                                )}
                            </>
                        );
                    })}
                    
                </div>
                <div className="contact_btn_nav navigation__item"  onClick={handleScrollToContact}>Contact Us</div>
                <button onClick={toggleHamburg} className="navigation__hamburg"><img src={hamburgOpen ? closeIcon : hamburgIcon} alt="" /></button>


            </nav>

            <nav className={hamburgOpen ? "hamburg_navigation hamburg_navigation--visible" : "hamburg_navigation"}>
                {/* {links.map((link, index) => {
                    return (
                        <>
                        <a key={index} href={link.link} className={link.special ? "navigation__special navigation__item" : "navigation__item"} onClick={toggleHamburg} >
                            {link.name}

                        </a>
                        {link.name === "Our Products" &&
                                    <div className="mobile_flex">
                                          <div className="mobile_drop_down_container ">
                                    <img src={DropDown} alt="" className="arrow_logo_mobile"
                                     onClick={handleMobileDropDown}
                                    />
                                    </div>
                                    {mobileDrop && 
                                    <div>
                                          <a href="/afriqpaypage" >AfriQPay</a>
                                        <a href="/afriqpayexpress">AfriQExpress</a>
                                    </div>
                                    }
                                      </div>
                        }
                        </>
                    );
                })} */}
                <div className="mobile_links">
                    <a className={`mobile_navigation__item ${location.pathname === '/' ? 'active' : ''}`} href="/">Home</a>
                    <a className={`mobile_navigation__item ${location.pathname === '/aboutus' ? 'active' : ''}`}  href="/aboutus">About us</a>
                    <a className={`mobile_navigation__item ${location.pathname === '/afriqpay' ? 'active' : ''}`} >our product <img src={DropDown} alt="" className="arrow_logo_mobile"
                                     onClick={handleMobileDropDown}
                                    /> </a>
                                      {mobileDrop && 
                                    <div className="mobile_deopDown">
                                          <a href="/afriqpay" className={`mobile_navigation__item ${location.pathname === '/afriqpay' ? 'active' : ''}`}>AfriQPay</a>
                                        {/* <a href="/afriqpayexpress" className={`mobile_navigation__item ${location.pathname === '/afriqpayexpress' ? 'active' : ''}`}>AfriQExpress</a> */}
                                    </div>
                                    }
                   
                </div>
                <div className="contact_btn_nav_mobile navigation__item"  onClick={handleScrollToContact}>Contact Us</div>

            </nav>
        </>

    );
}

export default Navigation;