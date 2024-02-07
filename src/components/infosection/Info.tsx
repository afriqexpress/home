import "./Info.css"
import Group1 from "./Group1.png"
import Group2 from "./Group2.png"
import Bubble from "./bubble.png"
import MobileGroup1 from "./MobileGroup1.png"
import MobileGroup2 from "./MobileGroup2.png"

function Info() {
  return (
    <>
    <div className="info">
        <div className="info_one">
            <div className="text_info">
                <h3 className="info_heading">we provide tech solution</h3>
                <div className="text_wrap">
                <span className="info_para">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
                </div>
            </div>
            <div className="image_info">
                    <img src={Group1} alt=""/>
            </div>

        </div>
        <div className="info_one">
            <div className="image_info">
                    <img src={Group2} alt="" style={{marginLeft:70,marginTop:50,zIndex:99,position:'absolute'}}/>
            </div>
            <div className="text_info">
                <h3 className="info_heading">we provide tech solution</h3>
                <div className="text_wrap">
                <span className="info_para">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
                </div>
            </div>
        </div>
        <div className="bubbleImage_container">
            <img src={Bubble}/>
            </div>
    </div>
    <div className="mobile_info">
        <div className="mobile_info_one">
        <div className="image_info">
                    <img src={MobileGroup1} alt=""/>
            </div>
            <div className="text_info">
                <h3 className="mobile_info_heading">we provide tech solution</h3>
                <div className="mobile_text_wrap">
                <span className="mobile_info_para">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
                </div>
            </div>
          

        </div>
        <div className="mobile_info_one">
            <div className="mobile_image_info">
                    <img src={MobileGroup2} alt=""/>
            </div>
            <div className="mobile_text_info">
                <h3 className="mobile_info_heading">we provide tech solution</h3>
                <div className="mobile_text_wrap2">
                <span className="mobile_info_para">bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us bring your Business to the next Level with us</span>
                </div>
            </div>
        </div>
        <div className="mobile_bubbleImage_container">
            <img src={Bubble}/>
            </div>
    </div>
    </>
  )
}

export default Info