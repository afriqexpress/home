import "./Partner.css"
import Client from "./clint logo.png"
import Bubble from "./partner_bubble.png"
import Bubble1 from "./partner_bibble1.png"
import  BubbleMobile1 from "./partner_left_mobile.png"

export default function Partner() {
  return (
    <div className="partner_section">
         <div className="bubbleImage">
                <img src={Bubble1} alt="" />
        </div>
        <h3 className="partner-heading">Our Partners</h3>
       
        <div className="logo_container">
            <img src={Client} alt="" className="logos_image"/>
            <img src={Client} alt="" className="logos_image"/>
            <img src={Client} alt="" className="logos_image"/>
            <img src={Client} alt="" className="logos_image"/>

        </div>
        <div className="bubbleImage2">
                <img src={Bubble} alt="" />
        </div>
        <div className="bubbleImage1Mobile1">
                <img src={BubbleMobile1} alt="" />
        </div>
        <div className="bubbleImage1Mobile2">
                <img src={BubbleMobile1} alt="" />
        </div>
    </div>
  )
}
