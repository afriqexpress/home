import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return(
    <footer>
        <ul className="footer__list">
            <div className="footer__item" id="footer__links">
                <h4 className="footer__item__title">Links</h4>
                <Link className="footer__item__link" to="/AfriQExpress">AfriQExpress</Link>
                <Link className="footer__item__link" to="/AfriQPay">AfriQPay</Link>
            </div>

            <div className="footer__item" id="footer__contact">
                <h4 className="footer__item__title">Contact</h4>
                <p className="footer__item__text">afriqexpress@gmail.com</p>
                <p className="footer__item__text">(+228) 70 559 093</p>
            </div>
        </ul>

        <hr className="footer__divider" />
        <p className="footer__copyright">@{new Date().getFullYear()} AfriQExpress. All rights reserved.</p>
    </footer>
    );
};

export default Footer;