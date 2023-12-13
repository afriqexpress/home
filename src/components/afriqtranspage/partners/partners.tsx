import "./partnersstyle.css";
import { PartnersData } from "./PartnersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Partners = () => {
    const hasPartners = PartnersData.length > 0;


    return hasPartners ? (
        <>
            <h2 className="partners__h2">It's all in the numbers</h2>
            <div className="partners__wrapper2">
                {PartnersData.map((partners, index) => (
                    <section className="partners" id={`Features${index}`} key={index}>
                        <div className="partners__wrapper">
                            {partners.image ? (
                                <img className="partners__image" src={partners.image} alt="Logo of the partners" />
                            ) : (
                                <FontAwesomeIcon icon={faQuestion} className="partners__icon" />
                            )}
                            <h3 className="partners__h3">{partners.title}</h3>
                        </div>
                    </section>
                ))}
            </div>
        </>
    ) : null;
};

export default Partners;
