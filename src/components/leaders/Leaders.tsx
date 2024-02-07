
import "./Leaders.css"
import Profile1 from "./p1.png"
import Profile2 from "./p2.png"
import Profile3 from "./p3.png"



function Leaders() {
    return (
        <div className="leaders">
            <div className="leader_texts">
                <h3 className="leader_heading">Our Leadership Team</h3>
                <span className="leader_sunheading">bring your Business to the next Level with us bring your Business to the next Level with us</span>
            </div>
            <div className="photo_container">
                <div className="image-container">
                    <img src={Profile2} alt="" className="image" />
                    <div className="text-container">
                        <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Profile1} alt="" className="image" />
                    <div className="text-container">
                    <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Profile3} alt="" className="image" />
                    <div className="text-container">
                    <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>


            </div>
            <div className="photo_container_mobile">
                <div className="image-container">
                    <img src={Profile2} alt="" className="image" />
                    <div className="text-container">
                        <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Profile1} alt="" className="image" />
                    <div className="text-container">
                    <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Profile3} alt="" className="image" />
                    <div className="text-container">
                    <p className="leader_text"> " bring your Business to the next Level with us bring your Business to the next Level with us
                        bring your Business to the next Level with us bring your Business to the next Level with us "
                        </p>
                    </div>
                </div>


            </div>
        </div>
        
    )
}

export default Leaders