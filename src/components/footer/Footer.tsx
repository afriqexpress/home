import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer section__padding">
        <div className="footer-links">
          <div className="footer-links_div">
            <h4>Links</h4>
            <a href="/afriqexpress">
              <p>AfriQExpress</p>
            </a>
            <a href="/afriqpay">
              <p>AfriQPay</p>
            </a>
          </div>
          <div className="footer-links_div">
            <h4>Contact</h4>
            <p>afriqxpress@gmail.com</p>
            <p>(+228) 70 559 093</p>
          </div>
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              @{new Date().getFullYear()} AfriQExpress. Tous droits réservés.
            </p>
          </div>
          {/* <div className="footer-below-links">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
