import "./nav.css";
import afriQExpressLogo from "./afriQExpress-01.png";


const Navigation = () => {
    return (
        <nav className="navigation">
            <figure>
                <a href='/'><img src={afriQExpressLogo} className="navigation__logo" alt="Brand Logo" /></a>
            </figure>
            <ul className="navigation__list">
                <li><a href="#Over">About Us</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href='/Login'><button className='navigation__list--login'>preregister</button></a></li>
            </ul>
        </nav>
    );
}

export default Navigation;