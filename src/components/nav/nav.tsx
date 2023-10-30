import "./nav.css";
import afriQExpressLogo from "./logo.svg";


const Navigation = () => {
    return (
        <nav className="navigation">
            <a href='/' className="navigation__logo"><img src={afriQExpressLogo} alt="Brand Logo" /></a>
            <a href="#Over" className="navigation__item">About Us</a>
            <a href="#Features" className="navigation__item">Features</a>
            <a href="#Contact" className="navigation__item">Contact</a>
            <a href='/Login' className="navigation__special">preregister</a>
        </nav>
    );
}

export default Navigation;