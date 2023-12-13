import { Link } from "react-router-dom";
import { ProductsData } from "./ProductsData";
import "./Products.css";

const Features = () => (
  <>
    <h2 className="products__h2">Services</h2>
    <div className="products__wrapper2">
      {ProductsData.map((product) => (
        <section className="products">
          <div className="products__wrapper">
            <img className="products__image" src={product.image} alt="Logo of the product" />
            <h3 className="products__h3">{product.title}</h3>
            <p className="products__p">{product.text}</p>
            <Link to={`${product.button}`} className="products__button">
              {product.button}
            </Link>
          </div>
        </section>
      ))}
    </div>
  </>
);

export default Features;
