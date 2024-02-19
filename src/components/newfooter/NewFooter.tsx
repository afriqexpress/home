import "./NewFooter.css"
import Logo from "./footerLogo.png"
import Tel from "./tel.png"
import Location from "./loc.png"
import Mail from "./mail.png"
// import FB from "./fblogo.png"
// import Linked from "./linkedin_logo.png"
// import Pexel from "./pexel.png"
// import X from "./teiter_logo.png"
 
function NewFooter() {
  return (
    
    <div className="footer">
        <div className="footer_wraper">
        <div className="address">
            <div className="address_info">
            <img src={Logo} alt="" className="footerLogo" />
            <div className="address_container">
            <div className="logo_text">
                <img src={Tel} alt=""/>
                <span className="text">(+228) 91606958, (+31) 618874429</span>   
            </div>
            <div className="logo_text">
                <img src={Mail} alt=""/>
                <span className="text">afriqxpress@gmail.com</span>
            </div>
            <div className="logo_text">
                <img src={Location} alt=""/>
                <span className="text">Paasheuvelweg8, 1105BH  Amsterdam  <br />
                   Adoboukome 88, rue, Lome</span>
            </div>
            </div>
            </div>
           
        </div>
        <div className="product_wraper">
        <div className="about">
            <span className="about_heading">A propos de nous</span>
            <a href="/aboutus" className="sub_text">Qui sommes-nous</a>
        </div>
        <div className="product">
        <span className="about_heading">Produits</span>
            {/* <span className="sub_text">AfriQExpress</span> */}
            <a href="/afriqpay" className="sub_text">AfriQPay</a>

        </div>
        </div>
        <div className="social-links">
        {/* <span className="about_heading">Follow us On</span> */}
        {/* <div className="social_links_container">
            <img src={FB} alt="" className="logo_image"/>
            <img src={Linked} alt="" className="logo_image"/>
            <img src={Pexel} alt="" className="logo_image"/>
             <img src={X} alt="" className="logo_image"/>
        </div> */}
        </div>
        </div>
       <div style={{height:1,backgroundColor:'white',marginTop:30,width:"90%",marginLeft:'5%'}}></div>
       <div className="disclaimer_text">© 2020 AfriQExpress. Tous droits réservés. AfriqExpress.net est une marque déposée d'AfriQExpress</div>
    </div>
  )
}

export default NewFooter