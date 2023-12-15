import "./aboutus.css";
import image from "/img/svg/AboutUs.gif";

const AboutUs = () => (
    <>
        <section className="aboutus__mainwrapper">
            <div className="aboutus__wrapper">
                <h2 className="aboutus__h2">About Us</h2>
                <p className="aboutus__p">Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi.</p>
            </div>
            <div className="aboutus__wrapper2">
                <img className="aboutus__image" src={image} alt="About Us Image"/>
            </div>
        </section>
    </>
);

export default AboutUs;
