import "./AfriqPayHero.css"
import Bucket from "./arriqbucket.png"
import Side1 from "./sideimage.png"
import Side2 from "./sideimage1.png"
import Main from "./mainMobile.png"
import Base from "./basehero.png"
import Slidein from "./slidein.png"
import Watch from "./watch.png"
import SmallMobile from "./mobile_mobie.png"
import MobileBase from "./mobile_bucket_base.png"

function AfriqPayHero() {
    return (
        <>
        <div className="afriqHero">
            <div className="afriq_text_container">
                <div className="afriq_text_container">
                <span className="arriq_heading">AfriQPay</span>
                <span className="ariq_paragraph">bring  your Business to  the next Level with us bring  your Business to  the next Level with us . bring  your Business to  the next Level with us bring  your Business to  the next Level with us</span>
                <div className="afriq_button_container">
                    <button className="arriq_explore_btn">Explore Now</button>
                    <button className="arriq_watch_btn"><img src={Watch} alt="" className="watch_image" />Watch</button>


                </div>
                </div>
            </div>
            <div className="afriq_image_container">
                <div className="bucket_image_container">
                    <img src={Bucket} alt="" />
                </div>
                <div className="mobie_images_container">
                    <div className="side1">
                        <img src={Side2} alt="" />
                        <div className="sidein">
                            <img src={Slidein} alt="" />
                        </div>
                    </div>
                    <div className="main">
                        <img src={Main} alt="" />
                    </div>
                    <div className="side2">
                        <img src={Side1} alt="" />
                    </div>

                </div>
                <div className="basehero_container">
                    <img src={Base} alt="" />
                </div>

            </div>

        </div>
        <div className="afriqHero_mobile">
            
            <div className="mobile_afriq_image_container">
                <div className="small_mobile_container">
                <img src={SmallMobile} alt="" />
                </div>
               
                <div className="base_mobile_image">
                    <img src={MobileBase} alt=""/>

                </div>
            </div>
            <div className="mobile_text_container">
            <span className="mobile_arriq_heading">AfriQPay</span>
                <span className="mobile_ariq_paragraph">bring  your Business to  the next Level with us bring  your Business to  the next Level with us . bring  your Business to  the next Level with us</span>
                <div className="mobile_afriq_button_container">
                    <button className="mobile_arriq_explore_btn">Explore Now</button>
                    <button className="mobile_arriq_watch_btn"><img src={Watch} alt="" className="mobile_watch_image" /><span style={{marginLeft:10}}>Watch</span></button>


                </div>
            </div>
        </div>
        </>
    )
}

export default AfriqPayHero