import "./Afriqpay.css"
import Dot from "./Line 316.png"
import Phone from "./phone.png"
import Background from "./background.png"
import Base from "./base-image.png"
import Frame1 from "./frame1.png"
import Frame2 from "./frame2.png"
import Frame3 from "./frame3.png"
import Frame4 from "./frame4.png"
import Frame5 from "./frame5.png"
import Mobile from "./mobile_mobile.png"
import Bucket from "./mobile_bucket.png"
import MobileBase from "./base_mobille.png"
import { useEffect, useState } from "react"
import BubbleImage1 from "./bubble_image_afriq.png"
import BubbleImage2 from "./bubble_image_afriq2.png"
import BubbleimageMobile from "./Group 1000001333.png"

function AfriqPay() {
    const images = [Frame1, Frame2, Frame3, Frame4, Frame5];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the image index and loop back to the first image if at the end
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <>
            <div className="afriq">
                <div className="afrix_text_container">
                    <div className="afriz_text_wraper">
                        <h3 className="afriq_heading">AfriQPay</h3>
                        <h3 className="afriq_heading2">Simple,Rapide & Sécurisé</h3>
                        <div className="text_wrapped">
                            <div className="text_wraper">
                                <img src={Dot} alt="" style={{ width: 25, height: 20, objectFit: 'contain' }} />
                                <span className="sub_heading">Les Transferts Instantanés</span>
                            </div>
                            <span className="afriq_para">
                            facilitent la gestion de vos finances. En quelques clics, envoyez de l'argent à vos amis, votre famille, ou toute autre personne en quelques secondes.
                            </span>
                            <div className="text_wraper">
                                <img src={Dot} alt="" style={{ width: 25, height: 20, objectFit: 'contain' }} />
                                <span className="sub_heading">Les Demandes Intelligentes</span>
                            </div>
                            <span className="afriq_para">révolutionnent la manière dont vous partagez les dépenses.</span>
                            {/* <div className="text_wraper">
                                <img src={Dot} alt="" style={{ width: 25, height: 20, objectFit: 'contain' }} />
                                <span className="sub_heading">Maintain Your Payment History</span>
                            </div>
                            <span className="afriq_para">bring  your Business to  the next Level with us bring  your Business to  the next Level with us . bring  your Business</span> */}
                        </div>
                    </div>
                    <button className="explore_btn"><a style={{textDecoration:'none',color:'white'}}  href="/afriqpay">Explorer</a></button>
                </div>

                <div className="afrix_image_container">
                    <div className="phone_image_container">
                        <img src={Phone} alt="" className="mobile_img" />
                        <div className="frames">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                                className="frame_img"
                            />
                        </div>
                        <div className="background_image_container">
                            <img src={Background} alt="" className="background_image_container_img" />
                        </div>
                        <div className="base_image_container">
                            <img src={Base} alt="" className="base_image_container_img" />
                        </div>

                    </div>
                </div>
                <div className="bubble_image">
                    <img src={BubbleImage1} alt="" />
                </div>
                <div className="bubble_image2">
                    <img src={BubbleImage2} alt="" />
                </div>
            </div>
            <div className="afriq_mobile">
                <div className="mobile_heading">
                    <h3 className="mobile_afriq_heading">AfriQPay</h3>
                    <p className="mobile_afriq_heading2">Simple , Rapide & Sécurisé</p>
                </div>
                <div className="mobile_image_container">
                    <div>
                        <div className="mobile_phone_image_container">
                            <img src={Mobile} alt="" className="mobile_mobile_img" />
                            <div className="mobile_frames_images">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Image ${currentImageIndex + 1}`}
                                    className="frame_img"
                                />
                            </div>

                        </div>
                        <div className="mobile_background_image_container">
                            <img src={Bucket} alt="" className="mobile_background_image_container_img" />
                        </div>
                        <div className="mobile_base_image_container">
                            <img src={MobileBase} alt="" className="mobile_base_image_container_img" />
                        </div>
                    </div>
                </div>
                <div className="mobile_text_wrapped">
                    <div className="mobile_text_wraper">
                        <img src={Dot} alt="" style={{ width: 20, height: 10, objectFit: 'contain' }} />
                        <span className="mobile_sub_heading">Les Transferts Instantanés</span>
                    </div>
                    <span className="mobile_afriq_para">
                    facilitent la gestion de vos finances. En quelques clics, envoyez de l'argent à vos amis, votre famille, ou toute autre personne en quelques secondes.
                        </span>
                    <div className="mobile_text_wraper">
                        <img src={Dot} alt="" style={{ width: 20, height: 10, objectFit: 'contain' }} />
                        <span className="mobile_sub_heading">Les Demandes Intelligentes</span>
                    </div>
                    <span className="mobile_afriq_para">révolutionnent la manière dont vous partagez les dépenses</span>
                    {/* <div className="mobile_text_wraper">
                        <img src={Dot} alt="" style={{ width: 20, height: 10, objectFit: 'contain' }} />
                        <span className="mobile_sub_heading">Maintain Your Payment History</span>
                    </div>
                    <span className="mobile_afriq_para">bring  your Business to  the next Level with us bring  your Business to  the next Level with us . bring  your Business</span> */}
                </div>
                <button className="mobile_explore_btn"><a style={{textDecoration:'none',color:'white'}}  href="/afriqpay">Explorer</a></button>
                <div className="mobile_bubble_explore">
                    <img src={BubbleimageMobile} />
                </div>

            </div>
        </>
    )
}

export default AfriqPay