import "./payfeaturesexpress.css";
import { PayFeaturesData } from "./PayFeaturesData";

const Features = () => (
  <>
    <h2 className="payfeatures__h2">Fonctionnalité</h2>
    <div className="payfeatures__wrapper2">
      {PayFeaturesData.map((payfeature, index) => (
        <section className="payfeatures" id={`Features${index}`} key={index}>
          <div className="payfeatures__wrapper">
            <img
              className="payfeatures__image"
              src={payfeature.image}
              alt="Prints"
            />
            <h3 className="payfeatures__h3">{payfeature.title}</h3>
            <p className="payfeatures__p">{payfeature.text}</p>
          </div>
        </section>
      ))}
    </div>
  </>
);

export default Features;
