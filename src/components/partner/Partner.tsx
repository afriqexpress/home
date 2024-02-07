import "./Partner.css"
import Client from "./clint logo.png"
import Bubble from "./partner_image.png"
export default function Partner() {
  return (
    <div className="partner_section">
         <div className="bubbleImage">
                <img src={Bubble} alt="" />
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
    </div>
  )
}
