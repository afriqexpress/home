import "./FeatureAfriq.css"
import QR from "./qr-code 1.png"
import Transact from "./transaction-history.png"
import Transfer from "./money-transfer.png"
import Bubble from "./Group 1000001328.png"
import Bubble2 from "./Group 1000001329.png"
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next"

function FeatureAfriq() {
    const [activeDot, setActiveDot] = useState<number>(0);
    const featureRef = useRef<HTMLDivElement | null>(null);

    const { t } = useTranslation();

  
    useEffect(() => {
        const handleScroll = () => {
          if (featureRef.current) {
            const scrollPosition = featureRef.current.scrollLeft;
            const itemWidth = 250 + 20; // Width of each payment box + gap
    
            const activeDotIndex = Math.floor((scrollPosition + itemWidth / 2) / itemWidth);
            setActiveDot(activeDotIndex);
          }
        };
    
        if (featureRef.current) {
          featureRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (featureRef.current) {
            featureRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);

      const handleDotClick = (index: number) => {
        setActiveDot(index);
        if (featureRef.current) {
          featureRef.current.scrollTo({ left: index * (250 + 20), behavior: 'smooth' });
        }
      };
  return (
    <>
    <div className="feature_afriq">
        <div className="feature_heading_container">
        <h3 className="feature_heading">{t("Découvrez AfriQPay")}</h3>
        <span className="feature_sub_heading">
        {t("Découvrez comment nous rendons les transactions financières non seulement possibles mais également agréables, à tout moment et partout")}
        </span>
        </div>
        <div className="feature_info">
            <div className="payment_box">
                <img src={QR} alt="" />
                <span className="payment_heading">{t("Scanner et Payer")}</span>
                <div className="paragraph_span">
                <span>
                {t("Oubliez les longues numéros de compte et les erreurs de transfert. Avec QR Pay, un simple scan suffit pour régler vos achats, factures ou rembourser un ami, combinant commodité et sécurité.")}
                  </span>
           </div>
            </div>
            <div className="payment_box">
                <img src={Transfer} alt="" />
                <span className="payment_heading">{t("Envoyer de l'Argent")}</span>
                <div className="paragraph_span">
                <span>
                {t("Envoyez de l'argent instantanément avec juste quelques clics. Notre application assure que votre argent atteint sa destination rapidement et en toute sécurité")}
          
                  </span>
           </div>
            </div>
            <div className="payment_box">
                <img src={Transact} alt="" />
                <span className="payment_heading">{t("Demander de l'Argent")}</span>
                <div className="paragraph_span">
                <span>
                {t("Avec la fonctionnalité de demande d'argent, recevez les paiements que vous attendez de manière simple et directe. Parfait pour partager les frais entre amis ou recevoir des paiements pour services rendus")}
                  </span>
           </div>
            </div>
        </div>
       </div>
       <div className="mobile_feature_afriq">
        <div className="feature_heading_container mobile_feature_heading_container">
        <h3 className="feature_heading mobile_feature_heading">{t("Découvrez AfriQPay")}</h3>
        <span className="feature_sub_heading mobile_feature_sub_heading">
        {t("Découvrez comment nous rendons les transactions financières non seulement possibles mais également agréables, à tout moment et partout")}
        </span>
        </div>
        <div className="mobile_feature_info" ref={featureRef}>
            <div className="mobile_payment_box">
                <img src={QR} alt="" />
                <span className="mobile_payment_heading">{t("Scanner et Payer")}</span>
                <div className="mobile_paragraph_span">
                <span>
                {t("Oubliez les longues numéros de compte et les erreurs de transfert. Avec QR Pay, un simple scan suffit pour régler vos achats, factures ou rembourser un ami, combinant commodité et sécurité.")}
                </span>
           </div>
            </div>
            <div className="mobile_payment_box">
                <img src={Transfer} alt="" />
                <span className="mobile_payment_heading">{t("Envoyer de l'Argent")}</span>
                <div className="mobile_paragraph_span">
                <span>
                {t("Envoyez de l'argent instantanément avec juste quelques clics. Notre application assure que votre argent atteint sa destination rapidement et en toute sécurité")}
                </span>
           </div>
            </div>
            <div className="mobile_payment_box">
                <img src={Transact} alt="" />
                <span className="mobile_payment_heading">{t("Demander de l'Argent")}</span>
                <div className="mobile_paragraph_span">
                <span>
                {t("Avec la fonctionnalité de demande d'argent, recevez les paiements que vous attendez de manière simple et directe. Parfait pour partager les frais entre amis ou recevoir des paiements pour services rendus")}
                </span>
           </div>
            </div>
        </div>

        <div className="dot">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`dot-item ${index === 1 ? 'first-item' : ''} ${index === activeDot ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="feature_mobile_bubble_image">
        <img src={Bubble} alt="" />
      </div>
      <div className="feature_mobile_bubble_image2">
        <img src={Bubble2} alt="" />
      </div>
        </div>
       </>
  )
}

export default FeatureAfriq