import "./card.css";

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}: Props) => {
  return (
    <div className="card-container">
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="card-img" />}
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <a href={link} className="card-btn">
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
