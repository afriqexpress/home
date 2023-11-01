import "./Footer.css";

const Footer = () => {
  return (
    // <section className="footer">
    //     <div className="footer__contact--wrapper">
    //         <p className="footer__p">Neem contact met ons op!</p>
    //         <FontAwesomeIcon className="footer__icon" icon={faEnvelope} /><p className="footer__p">afriqexpress@gmail.com</p>
    //         <FontAwesomeIcon className="footer__icon" icon={faPhone} /><p className="footer__p">(+228) 70559093</p>
    //         <Link to="/AfriQExpress" className="footer__p">AfriQExpress</Link>
    //         <Link to="/AfriQPay" className="footer__p">AfriQPay</Link>
    //     </div>
    //     <div className="footer__text--wrapper">
    //         <p className="footer__p">Privacy</p>
    //         <p className="footer__p">Conditions</p>
    //     </div>
    //     <p className="footer__p">Powered By afriQExpress © 2022-2023</p>
    // </section>
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/">
              <p>Resource center</p>
            </a>
            <a href="/">
              <p>Testimonial</p>
            </a>
            <a href="/">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/">
              <p>Resource center</p>
            </a>
            <a href="/">
              <p>Testimonial</p>
            </a>
            <a href="/">
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src="" alt="" />
              </p>
              <p>
                <img src="" alt="" />
              </p>
              <p>
                <img src="" alt="" />
              </p>
              <p>
                <img src="" alt="" />
              </p>
            </div>
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
                <p>Security</p>
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
