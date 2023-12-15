import { Link } from "react-router-dom";
import "./Products.css";

type Product = { image: string, title: string, text: string, url: string, buttonText: string }

type Props = {
    products: Product[]
}

const Features = ({ products }: Props) => (
    <section id="products">
        <h2>Products</h2>
        <ul className="products__list">
            {products.map((product) => (
            <div className="products__item">
                <img className="products__item__image" src={product.image} alt="Logo of the product" />
                <h3 className="products__item__title">{product.title}</h3>
                <p className="products__item__text">{product.text}</p>
                <Link to={`${product.url}`} className="products__item__button">
                    {product.buttonText}
                </Link>
            </div>
            ))}
        </ul>
    </section>
);

export default Features;
