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
import Payment from "../afriqexpresshero/Payment_video.mp4"
import Modal from 'react-modal';
import Close from "../afriqexpresshero/red_icon.png"
import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function AfriqPayHero() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [ismobileModalopen, setIsmobileModalOpen] = useState(false)
    const [isMobileImagesVisible, setMobileImagesVisible] = useState(false);

    const { t } = useTranslation();

    const mobileOpenModal = ()=> {
        setIsmobileModalOpen(true)
    }

    const closeMobileModal = ()=> {
        setIsmobileModalOpen(false)
    }

    const openModal = () => {
      setModalOpen(true);
      setMobileImagesVisible(!isMobileImagesVisible);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setMobileImagesVisible(!isMobileImagesVisible);
    };
    return (
        <motion.div exit={{ opacity: 0 }}>
        <div className="afriqHero">
            <div className="afriq_text_container">
                <div className="afriq_text_container">
                <span className="arriq_heading">AfriQPay</span>
                <span className="ariq_paragraph">
                {t("Conçue pour simplifier chaque aspect de vos transactions monétaires, notre solution transforme votre smartphone en un puissant portefeuille électronique, permettant des opérations fluides, rapides et sécurisées.")}
                </span>
                <div className="afriq_button_container">
                    <button className="arriq_explore_btn" onClick={() => window.open('https://afriqpay.afriqexpress.net/')} >{t("Explorer")}</button>
                    <button className="arriq_watch_btn" onClick={openModal}><img src={Watch} alt="" className="watch_image" />{t("Regarder")}</button>


                </div>
     
                </div>
            </div>
            <div className="afriq_image_container">
                <div className="bucket_image_container">
                    <img src={Bucket} alt="" />
                </div>
                <div  className={`mobie_images_container ${isMobileImagesVisible ? 'visible' : ''}`}>
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
            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Watch Modal"
        ariaHideApp={false}
        className={`modal ${isModalOpen ? 'fadeIn' : ''}`}
      >
         <div className="modal-overlay">
        <div className="video_container">
          <div className="close_btn" onClick={closeModal}>
            <img src={Close} alt="" style={{width:15,height:15}} />
          </div>
          <video controls className="video">
            <source src={Payment} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
      </Modal>

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
            <Modal
        isOpen={ismobileModalopen}
        onRequestClose={closeModal}
        contentLabel="Watch Modal"
        ariaHideApp={false}
        className="modal_mobile"
      >
      
        <div className="video_container" style={{marginTop:50}}>
        
          <div className="close_btn" onClick={closeMobileModal}>
            <img src={Close} alt="" style={{width:15,height:15}} />
          </div>
          <video controls className="video">
            <source src={Payment} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
            </Modal>
            <div className="mobile_text_container">
            <span className="mobile_arriq_heading">AfriQPay</span>
                <span className="mobile_ariq_paragraph">
                {t("Conçue pour simplifier chaque aspect de vos transactions monétaires, notre solution transforme votre smartphone en un puissant portefeuille électronique, permettant des opérations fluides, rapides et sécurisées.")}
                </span>
                <div className="mobile_afriq_button_container">
                    <button className="mobile_arriq_explore_btn" onClick={() => window.open('https://afriqpay.afriqexpress.net/')}>{t("Explorer")}</button>
                    <button className="mobile_arriq_watch_btn" onClick={mobileOpenModal}><img src={Watch} alt="" className="mobile_watch_image" /><span style={{marginLeft:10}}>{t("Regarder")}</span></button>


                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default AfriqPayHero