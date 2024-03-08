import "./Info.css"
import Group1 from "./Group1.png"
import Group2 from "./Group2.png"
import Bubble from "./bubble.png"
import MobileGroup1 from "./MobileGroup1.png"
import MobileGroup2 from "./MobileGroup2.png"
import MobileBubble from "./Group 1000001328.png"
import { useTranslation } from "react-i18next"

function Info() {
    const { t } = useTranslation()
  return (
    <>
    <div className="info">
        <div className="info_one">
            <div className="text_info">
                <h3 className="info_heading">{t("Innovateurs en Technologie SaaS")}</h3>
                <div className="text_wrap">
                <span className="info_para">
                {t("Chez afriQExpress, nous ne nous contentons pas d'offrir des logiciels ; nous transformons radicalement la manière dont les entreprises opèrent. Nos solutions SaaS sur mesure sont conçues pour répondre aux défis spécifiques de chaque client, en alliant innovation constante et facilité d'intégration.")}
                </span>
                </div>
            </div>
            <div className="image_info">
                    <img src={Group1} alt=""/>
            </div>

        </div>
        <div className="info_one">
            <div className="image_info">
                    <img src={Group2} alt="" style={{marginLeft:0,marginTop:50,zIndex:99,position:'absolute'}}/>
            </div>
            <div className="text_info">
                <h3 className="info_heading">{t("Partenaires de Croissance")}</h3>
                <div className="text_wrap">
                <span className="info_para">
                {t("En tant que partenaire stratégique, afriQExpress va au-delà du simple fournisseur de logiciels. Nous nous engageons à comprendre les ambitions uniques de votre entreprise et à les accompagner avec des solutions SaaS évolutives. Notre approche centrée sur le client et notre expertise technologique assurent que votre entreprise reste à l'avant-garde de l'innovation, prête à saisir chaque opportunité de croissance")}
                </span>
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
                <h3 className="mobile_info_heading">{t("Innovateurs en Technologie SaaS")}</h3>
                <div className="mobile_text_wrap">
                <span className="mobile_info_para">
                {t("Chez afriQExpress, nous ne nous contentons pas d'offrir des logiciels ; nous transformons radicalement la manière dont les entreprises opèrent. Nos solutions SaaS sur mesure sont conçues pour répondre aux défis spécifiques de chaque client, en alliant innovation constante et facilité d'intégration.")}
                    
                    </span>
                </div>
            </div>
          

        </div>
        <div className="mobile_info_one">
            <div className="mobile_image_info">
                    <img src={MobileGroup2} alt=""/>
            </div>
            <div className="mobile_text_info">
                <h3 className="mobile_info_heading">{t("Partenaires de Croissance")}</h3>
                <div className="mobile_text_wrap2">
                <span className="mobile_info_para">
                {t("En tant que partenaire stratégique, afriQExpress va au-delà du simple fournisseur de logiciels. Nous nous engageons à comprendre les ambitions uniques de votre entreprise et à les accompagner avec des solutions SaaS évolutives. Notre approche centrée sur le client et notre expertise technologique assurent que votre entreprise reste à l'avant-garde de l'innovation, prête à saisir chaque opportunité de croissance")}
                    
                    </span>
                </div>
            </div>
        </div>
        <div className="mobile_bubbleImage_container">
            <img src={MobileBubble} alt=""/>
            </div>
            <div className="mobile_bubbleImage_container2">
            <img src={MobileBubble} alt=""/>
            </div>
            <div className="mobile_bubbleImage_container3">
            <img src={MobileBubble} alt=""/>
            </div>
            <div className="mobile_bubbleImage_container4">
            <img src={MobileBubble} alt=""/>
            </div>
    </div>
    </>
  )
}

export default Info