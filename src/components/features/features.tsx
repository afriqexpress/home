import "./featuresexpress.css";

type Feature = { image: string, title: string, text: string }

type Props = {
    features: Feature[]
}

const Features = ({ features }: Props) =>
    <>
        <h2 className="features__h2">Onze Features</h2>
        <p className="features__p1">Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.</p>
        <div className="features__wrapper2">
            {features.map((feature, index) => (
                <section className="features" id={`Features${index}`} key={index}>
                    <div className="features__wrapper">
                        <img className="features__image" src={feature.image} alt="Icons for the features" />
                        <h3 className="features__h3">{feature.title}</h3>
                        <p className="features__p">{feature.text}</p>
                    </div>
                </section>
            ))}
        </div>
    </>

export default Features;