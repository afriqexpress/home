import "./AfriqExpreshero.css"
import Hero from "./arriqexpress.png"
import Watch from "./watch.png"
import ExpressHero from "./express_hero.png"
import Payment from "./Payment_video.mp4"

import Modal from 'react-modal';
import { useState } from "react";
import Close from "./red_icon.png"

function AfriqExpressHero() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  return (
    <>
    <div className="afriqHero">
    <div className="afriq_text_container" style={{marginTop:130}}>
        <div className="afriq_text_container">
        <span className="arriq_heading">AfriQPay</span>
        <span className="ariq_paragraph">bring  your Business to  the next Level with us bring  your Business to  the next Level with us . bring  your Business to  the next Level with us bring  your Business to  the next Level with us</span>
        <div className="afriq_button_container">
            <button className="arriq_explore_btn">Explore Now</button>
            <button className="arriq_watch_btn" onClick={openModal}><img src={Watch} alt="" className="watch_image" />Watch</button>


        </div>

        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Watch Modal"
        ariaHideApp={false}
        className="modal"
      >
        {/* Modal Content */}
        <div className="video_container">
          {/* Your video or any other content goes here */}
          <div className="close_btn" onClick={closeModal}>
            <img src={Close} alt="" style={{width:15,height:15}} />
          </div>
          <video controls className="video">
            <source src={Payment} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
        </div>
    </div>
    <div className="afriq_image_container_express">
            <img src={Hero} alt="" />
        

    </div>

</div>
<div className="afriqHero_mobile">
            
            <div className="mobile_afriq_image_container">
               
                <div className="base_mobile_image">
                    <img src={ExpressHero} alt=""/>

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

export default AfriqExpressHero