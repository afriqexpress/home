import "./partnersstyle.css";
import { PartnersData, Partner } from "./PartnersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const Partners = () => {
    const hasPartners = PartnersData.length > 0;

    if(!hasPartners) return null;

    return (
        <>
            <h2 className="partners__h2">It's all in the numbers</h2>
            <div className="partners__wrapper2">
                {PartnersData.map((partner: Partner, index) => (
                    <section className="partners" id={`Features${index}`} key={index}>
                        <div className="partners__wrapper">
                            {partner.image ? (
                                <img className="partners__image" src={partner.image} alt="Logo of the partners" />
                            ) : (
                                <FontAwesomeIcon icon={faQuestion} className="partners__icon" />
                            )}
                            <h3 className="partners__h3">{partner.title}</h3>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Partners;
