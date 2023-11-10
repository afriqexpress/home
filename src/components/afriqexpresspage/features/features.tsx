import "./featuresexpress.css";
import { FeaturesData } from "./FeaturesData";

const Features = () =>
    <>
        <h2 className="features__h2">Onze Features</h2>
        <div className="features__wrapper2">
            {FeaturesData.map((feature, index) => (
                <section className="features" id={`Features${index}`} key={index}>
                    <div className="features__wrapper">
                        <img className="features__image" src={feature.image} alt="Prints" />
                        <h3 className="features__h3">{feature.title}</h3>
                        <p className="features__p">{feature.text}</p>
                    </div>
                </section>
            ))}
        </div>
    </>

export default Features;    