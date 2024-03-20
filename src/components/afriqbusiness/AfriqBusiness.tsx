import "./AfriqBusiness.css"
import Phone from "./undraw_stripe_payments_re_chlm 1.png"
import Promote from "./undraw_revenue_re_2bmg 1.png"
import Computer from "./undraw_online_transactions_-02-ka 1.png"
import MobileGirl from "./undraw_app_data_re_vg5c 1.png"
import Mobile1 from "./mobile1.png"
import Mobile2 from "./mobile_2.png"
import Mobile3 from "./mobile_3.png"
import Mobile4 from "./mobile_4.png"
import Image5 from "./5th_img.png"
import Mobile5 from "./mobile5.png"
import { useTranslation } from "react-i18next"

function AfriqBusiness() {
    const { t } = useTranslation()
    return (
        <>
            <div className="afriq_business">
                <div className="business_heading_container">
                    <h4 className="business_heading" >
                    {t("Débloquer un monde de fonctionnalités avancées avec AfriQPay Business")}
                         </h4>
                </div>
                <div className="business_info">
                    <div className="business_text">
                        <div className="business_text_container">
                            <div className="business_text_heading_container">
                           <div className="flex"><span className="business_text_heading">{t("Générer un QR Code pour Être Payé")}</span></div>
                                <span className="business_text_subheading">
                                {t("Transformez votre entreprise avec notre générateur de QR Code. Créez un code unique pour votre entreprise et permettez à vos clients de vous payer en un scan. Rapide, élégant, et sans contact")}
                                </span>
                            </div>

                            <div className="business_image_container">
                                <img src={Phone} alt="" />
                            </div>
                        </div>
                        <div className="business_text_container">
                           

                            <div className="business_image_container">
                                <img src={Promote} alt="" />
                            </div>
                            <div className="business_text_heading_container" style={{marginLeft:300}}> 
                           <div className="flex"><span className="business_text_heading">{t("Promouvoir Vos Produits")}</span></div>
                                <span className="business_text_subheading">
                                {t("Notre application ne se limite pas à gérer votre argent. Utilisez notre plateforme pour promouvoir vos produits directement auprès des utilisateurs de l'application, augmentant ainsi votre visibilité et vos ventes")}
                                </span>
                            </div>
                        </div>
                        <div className="business_text_container">
                            <div className="business_text_heading_container">
                           <div className="flex"><span className="business_text_heading">{t("Toutes les Banques en Un Seul Endroit")}</span></div>
                                <span className="business_text_subheading">
                                {t("Rassemblez tous vos comptes bancaires en une seule application pour une expérience de gestion de l'argent sans précédent. Visualisez vos soldes, transférez de l'argent entre comptes, et bien plus, sans jamais avoir à changer d'application")}
                                </span>
                            </div>

                            <div className="business_image_container">
                                <img src={Computer} alt="" style={{width:'80%'}} />
                            </div>
                        </div>
                        <div className="business_text_container">
                          

                            <div className="business_image_container">
                                <img src={MobileGirl} alt="" />
                            </div>
                            <div className="business_text_heading_container" style={{marginLeft:220}}>
                           <div className="flex"><span className="business_text_heading">{t("Aperçu de Vos Transactions")}</span></div>
                                <span className="business_text_subheading" >
                                {t("Gardez le contrôle de vos finances avec un aperçu détaillé de toutes vos transactions. Notre application vous offre une transparence totale, vous permettant de suivre chaque dépense et réception d'argent, pour une meilleure gestion financière")}
                                </span>
                            </div>
                        </div>

                        <div className="business_text_container">
                            <div className="business_text_heading_container">
                           <div className="flex"><span className="business_text_heading">{t("AfriQStore intrusif")}</span></div>
                                <span className="business_text_subheading">
                                {t("L'aspect le plus innovant d'afriQPay réside dans ses modules complémentaires de transaction, qui transforment l'application en une plateforme polyvalente adaptée à différents secteurs. c'est-à-dire la réservation d'hôtel, la gestion des restaurants, l'assurance et la gestion des stocks")}
                                </span>
                            </div>

                            <div className="business_image_container">
                                <img src={Image5} alt="" style={{width:'80%'}} />
                            </div>
                        </div>

                        



                        {/* <div className="business_text_container">
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
                    <button className="try_btn">Try Now</button> */}
                    </div>
                    {/* <div className="business_image">
                    <div className="smartphone_container">
                            <img src={Smartphone}  alt=""/>
                            <div className="slide_image_container">
                                <img src={Slide} alt="" />
                            </div>
                    </div>
                   
                </div> */}
                </div>
            </div>


            <div className="mobile_afriq_business">
                <div className="mobile_business_heading_container">
                    <h4 className="mobile_business_heading" >
                    {t("Débloquer un monde de fonctionnalités avancées avec AfriQPay Business")}
                         </h4>
                </div>
                <div className="mobile_feature_image">
                    <img src={Mobile1} alt="" />
                </div>
                <div className="mobile_feature_subheading">
                    <span>{t("Générer un QR Code pour Être Payé")}</span>
                </div>
                <div className="mobile_feature_texts">
                    <span>
                    {("Transformez votre entreprise avec notre générateur de QR Code. Créez un code unique pour votre entreprise et permettez à vos clients de vous payer en un scan. Rapide, élégant, et sans contact")}
                    </span>

                </div>


                <div className="mobile_feature_image">
                    <img src={Mobile2} alt="" />
                </div>
                <div className="mobile_feature_subheading">
                    <span>{t("Promouvoir Vos Produits")}</span>
                </div>
                <div className="mobile_feature_texts">
                    <span>
                    {t("Notre application ne se limite pas à gérer votre argent. Utilisez notre plateforme pour promouvoir vos produits directement auprès des utilisateurs de l'application, augmentant ainsi votre visibilité et vos ventes")}
                   
                    </span>

                </div>


                <div className="mobile_feature_image">
                    <img src={Mobile3} alt="" />
                </div>
                <div className="mobile_feature_subheading">
                    <span>{t("Toutes les Banques en Un Seul Endroit")}</span>
                </div>
                <div className="mobile_feature_texts">
                    <span>
                    {t("Rassemblez tous vos comptes bancaires en une seule application pour une expérience de gestion de l'argent sans précédent. Visualisez vos soldes, transférez de l'argent entre comptes, et bien plus, sans jamais avoir à changer d'application")}
                   
                    </span>

                </div>


                <div className="mobile_feature_image">
                    <img src={Mobile4} alt="" />
                </div>
                <div className="mobile_feature_subheading">
                    <span>{t("Aperçu de Vos Transactions")}</span>
                </div>
                <div className="mobile_feature_texts">
                    <span>
                    {t("Gardez le contrôle de vos finances avec un aperçu détaillé de toutes vos transactions. Notre application vous offre une transparence totale, vous permettant de suivre chaque dépense et réception d'argent, pour une meilleure gestion financière")}
                    
                    </span>

                </div>

                <div className="mobile_feature_image">
                    <img src={Mobile5} alt="" />
                </div>
                <div className="mobile_feature_subheading">
                    <span>{t("AfriQStore intrusif")}</span>
                </div>
                <div className="mobile_feature_texts">
                    <span>
                    {t("L'aspect le plus innovant d'afriQPay réside dans ses modules complémentaires de transaction, qui transforment l'application en une plateforme polyvalente adaptée à différents secteurs. c'est-à-dire la réservation d'hôtel, la gestion des restaurants, l'assurance et la gestion des stocks")}
                    
                    </span>

                </div>
                
                {/* <div className="mobile_business_image">
                    <div className="smartphone_container">
                        <img src={SmallMobile} alt="" className="mobile_hand" />
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

                </div> */}
            </div>
        </>
    )
}

export default AfriqBusiness