import "./Header.css";

interface Props {
    image: string,
    imageAlt: string,
    title: string,
    text: string,
    url: string,
    buttonText: string
}

const Header = ({ image, imageAlt, title, text, url, buttonText }: Props) => {
    return(
        <header className="header">
            <div className="header__inner">
                <img className="header__image" src={image} alt={imageAlt} />

                <div className="header__content">
                    <h1 className="header__title">{title}</h1>
                    <p className="header__text">{text}</p>
                    <a className="header__button" href={url}>{buttonText}</a>
                </div>
            </div>

        </header>
    )
}

export default Header;