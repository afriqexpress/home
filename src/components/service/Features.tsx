import { FeaturesData } from "./FeaturesData";
import "./Features.css";

const Features = () =>
    <>
        <h2 className="features__h2">Our Products</h2>
        <div className="features__wrapper2">
            {FeaturesData.map(feature => (
                <section className="features" id="Features">
                    <div className="features__wrapper">
                        <img className="features__image" src={feature.image} alt="Prints" />
                        <h3 className="features__h3">{feature.title}</h3>
                        <p className="features__p">{feature.text}</p>
                        <button className="features__button">Placeholder</button>
                    </div>
                </section>
            ))}
        </div>
    </>

export default Features;    