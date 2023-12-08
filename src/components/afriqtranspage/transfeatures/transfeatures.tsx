import "./transfeatures.css";
import { TransFeaturesData } from "./TransFeaturesData";

const TransFeatures = () =>
    <>
        <h2 className="transfeatures__h2" id="TransFeatures">Onze Features</h2>
        <p className="transfeatures__p1">Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.</p>
        <div className="transfeatures__wrapper2">
            {TransFeaturesData.map((transfeature, index) => (
                <section className="transfeatures" id={`Features${index}`} key={index}>
                    <div className="transfeatures__wrapper">
                        <img className="transfeatures__image" src={transfeature.image} alt="Prints" />
                        <h3 className="transfeatures__h3">{transfeature.title}</h3>
                        <p className="transfeatures__p">{transfeature.text}</p>
                    </div>
                </section>
            ))}
        </div>
    </>

export default TransFeatures;    