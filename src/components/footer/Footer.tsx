import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Links</h4>
            <a href="/">
              <p>AfriQExpress</p>
            </a>
            <a href="/">
              <p>AfriQPay</p>
            </a>
            <a href="/">
              <p>Pre-register</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <p>afriqxpress@gmail.com</p>
            <p>(+228) 70559093</p>
            <p></p>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} AfriQExpress. All rights reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
