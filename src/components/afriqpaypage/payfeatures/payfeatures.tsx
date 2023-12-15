import "./payfeaturesexpress.css";
import { PayFeaturesData } from "./PayFeaturesData";

const Features = () =>
    <>
        <h2 className="payfeatures__h2" id="PayFeatures">Onze Features</h2>
        <p className="payfeatures__p1">Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.</p>
        <div className="payfeatures__wrapper2">
            {PayFeaturesData.map((payfeature, index) => (
                <section className="payfeatures" id={`Features${index}`} key={index}>
                    <div className="payfeatures__wrapper">
                        <img className="payfeatures__image" src={payfeature.image} alt="Icons for the features" />
                        <h3 className="payfeatures__h3">{payfeature.title}</h3>
                        <p className="payfeatures__p">{payfeature.text}</p>
                    </div>
                </section>
            ))}
        </div>
    </>

export default Features;    