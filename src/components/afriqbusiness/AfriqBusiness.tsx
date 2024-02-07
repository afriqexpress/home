import "./AfriqBusiness.css"
import Smartphone from "./smartphone.png"
import Slide from "./slidein.png"
import SmallMobile from "./mobileinhand.png"
function AfriqBusiness() {
  return (
    <>
    <div className="afriq_business">
        <div className="business_heading_container">
            <h4 className="business_heading" >Get Many More Features with AfriQPay Business </h4>
        </div>
        <div className="business_info">
                <div className="business_text">
                    <div className="business_text_container">
                        <span className="business_text_heading">1 . Generate your own QRcode to get paid</span>
                        <span className="business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="business_text_container">
                        <span className="business_text_heading">2 . Promote your products with us</span>
                        <span className="business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="business_text_container">
                        <span className="business_text_heading">3 .Ask for money by sharing ULR Links</span>
                        <span className="business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="business_text_container">
                        <span className="business_text_heading">4 .insight in your business transactions</span>
                        <span className="business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <button className="try_btn">Try Now</button>
                </div>
                <div className="business_image">
                    <div className="smartphone_container">
                            <img src={Smartphone}  alt=""/>
                            <div className="slide_image_container">
                                <img src={Slide} alt="" />
                            </div>
                    </div>
                   
                </div>
        </div>
    </div>


    <div className="mobile_afriq_business">
        <div className="mobile_business_heading_container">
            <h4 className="mobile_business_heading" >Get Many More Features with AfriQPay Business </h4>
        </div>
        <div className="mobile_business_image">
                    <div className="smartphone_container">
                            <img src={SmallMobile}  alt="" className="mobile_hand"/>
                    </div>
                   
                </div>
        <div className="mobile_business_info">
                <div className="mobile_business_text">
                    <div className="mobile_business_text_container">
                        <span className="mobile_business_text_heading">1 . Generate your own QRcode to get paid</span>
                        <span className="mobile_business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="mobile_business_text_container">
                        <span className="mobile_business_text_heading">2 . Promote your products with us</span>
                        <span className="mobile_business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="mobile_business_text_container">
                        <span className="mobile_business_text_heading">3 .Ask for money by sharing ULR Links</span>
                        <span className="mobile_business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <div className="mobile_business_text_container">
                        <span className="mobile_business_text_heading">4 .insight in your business transactions</span>
                        <span className="mobile_business_text_subheading">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business</span>

                    </div>
                    <button className="try_btn">Try Now</button>
                </div>
              
        </div>
    </div>
    </>
  )
}

export default AfriqBusiness