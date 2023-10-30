import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__contact--wrapper">
                <p className="footer__p">Neem contact met ons op!</p>
                <FontAwesomeIcon className="footer__icon" icon={faEnvelope} /><p className="footer__p">afriqexpress@gmail.com</p>
                <FontAwesomeIcon className="footer__icon" icon={faPhone} /><p className="footer__p">(+228) 70559093</p>
                <Link to="/AfriQExpress" className="footer__p">AfriQExpress</Link>
                <Link to="/AfriQPay" className="footer__p">AfriQPay</Link>
            </div>
            <div className="footer__text--wrapper">
                <p className="footer__p">Privacy</p>
                <p className="footer__p">Conditions</p>
            </div>
            <p className="footer__p">Powered By afriQExpress © 2022-2023</p>
        </section>
    );
}

export default Footer;