import "./FeatureAfriq.css"
import QR from "./qr-code 1.png"
import Transact from "./transaction-history.png"
import Transfer from "./money-transfer.png"
import Dots from "./Dots.png"

function FeatureAfriq() {
  return (
    <>
    <div className="feature_afriq">
        <div className="feature_heading_container">
        <h3 className="feature_heading">Features of AfriQPay</h3>
        <span className="feature_sub_heading">bring your Business to the next Level with us bring your Business to the next Level with us</span>
        </div>
        <div className="feature_info">
            <div className="payment_box">
                <img src={QR} alt="" />
                <span className="payment_heading">Payent History</span>
                <div className="paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
            <div className="payment_box">
                <img src={Transfer} alt="" />
                <span className="payment_heading">Payent History</span>
                <div className="paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
            <div className="payment_box">
                <img src={Transact} alt="" />
                <span className="payment_heading">Payent History</span>
                <div className="paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
        </div>
       </div>
       <div className="mobile_feature_afriq">
        <div className="feature_heading_container mobile_feature_heading_container">
        <h3 className="feature_heading mobile_feature_heading">Features of AfriQPay</h3>
        <span className="feature_sub_heading mobile_feature_sub_heading">For any kind or quarry please flee free to contact us</span>
        </div>
        <div className="mobile_feature_info">
            <div className="mobile_payment_box">
                <img src={QR} alt="" />
                <span className="mobile_payment_heading">Payent History</span>
                <div className="mobile_paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
            <div className="mobile_payment_box">
                <img src={Transfer} alt="" />
                <span className="mobile_payment_heading">Payent History</span>
                <div className="mobile_paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
            <div className="mobile_payment_box">
                <img src={Transact} alt="" />
                <span className="mobile_payment_heading">Payent History</span>
                <div className="mobile_paragraph_span">
                <span>bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
           </div>
            </div>
        </div>
        <div className="dot">
          <img src={Dots}/>
        </div>
        </div>
       </>
  )
}

export default FeatureAfriq