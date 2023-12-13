import "./PayHeader.css";

interface Props {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  url: string;
  buttonText: string;
}

const Header = ({ image, title, text, url, buttonText }: Props) => {
    return(
        <header className="payheader">
            <div className="payheader__inner">
                <video className="payheader__image" muted controls autoPlay={true} src={image} />

                <div className="payheader__content">
                    <h1 className="payheader__title">{title}</h1>
                    <p className="payheader__text">{text}</p>
                    <a className="payheader__button" href={url}>{buttonText}</a>
                </div>
            </div>

        </header>
    )
}

export default Header;
