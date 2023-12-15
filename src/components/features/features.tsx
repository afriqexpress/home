import "./features.css";

type Feature = { image: string, title: string, text: string }

type Props = {
    features: Feature[]
    text: string
}

const Features = ({ features, text }: Props) =>
    <section id="features">
        <h2>Our Features</h2>
        <p className="features__text">{text}</p>
        <div className="features__items">
            {features.map((feature, index) => (
                <div className="features__item" id={`Features${index}`} key={index}>
                    <img className="features__item__image" src={feature.image} alt="Icons for the features" />
                    <h3 className="features__item__title">{feature.title}</h3>
                    <p className="features__item__text">{feature.text}</p>
                </div>
            ))}
        </div>
    </section>

export default Features;