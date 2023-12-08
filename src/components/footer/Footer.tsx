import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer section__padding">
        <div className="footer-links">
          <div className="footer-links_div">
            <h4 className="footer-below-links-h4">Links</h4>
            <a href="/AfriQExpress">
              <p>AfriQExpress</p>
            </a>
            <a href="/AfriQPay">
              <p>AfriQPay</p>
            </a>
            <a href="/AfriQTrans">
              <p>AfriQTrans</p>
            </a>
          </div>
          <div className="footer-links_div">
            <h4 className="footer-below-links-h4" id="Contact">Contact</h4>
            <p>afriqxpress@gmail.com</p>
            <p>(+228) 70 559 093</p>
          </div>
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p className="footer-below-links-p">
              @{new Date().getFullYear()} AfriQExpress. All rights reserved.
            </p>
          </div>
          {/* <div className="footer-below-links">
            <a href="">
              <div className="footer-below-links-div">
                <p className="footer-below-links-p">Terms & Conditions</p>
              </div>
            </a>
            <a href="">
              <div className="footer-below-links-div">
                <p className="footer-below-links-p">Privacy</p>
              </div>
            </a>
            <a href="">
              <div className="footer-below-links-div">
                <p className="footer-below-links-p">Cookies</p>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
