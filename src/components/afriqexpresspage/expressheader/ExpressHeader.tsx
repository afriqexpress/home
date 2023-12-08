import "./ExpressHeader.css";

interface Props {
    image: string,
    imageAlt: string,
    title: string,
    text: string,
    url: string,
    buttonText: string
}

const Header = ({ image, title, text, url, buttonText }: Props) => {
    return (
        <header className="expressheader">
            <div className="expressheader__inner">
                <video className="expressheader__image" muted controls autoPlay={true} src={image} />

                <div className="expressheader__content">
                    <h1 className="expressheader__title">{title}</h1>
                    <p className="expressheader__text">{text}</p>
                    <a className="expressheader__button" href={url}>{buttonText}</a>
                </div>
            </div>

        </header>
    )
}

export default Header;