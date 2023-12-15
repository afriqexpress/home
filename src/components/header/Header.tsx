import "./Header.css";

export enum ContentType {
  IMAGE,
  VIDEO
}
interface Props {
  contentType: ContentType;
  content: string;
  contentAlt: string;
  title: string;
  text: string;
  url?: string;
  buttonText?: string;
}

const Header = ({ contentType, content, contentAlt, title, text, url, buttonText }: Props) => {
  return (
    <header className="header">
      <div className="header__inner">
        { contentType == ContentType.IMAGE ?
          <img className="header__content header__image" src={content} alt={contentAlt} /> :
          <video className="header__content header__video" muted controls autoPlay={true} src={content} />
        }

        <div className="header__content">
          <h1 className="header__title">{title}</h1>
          <p className="header__text">{text}</p>
          { url ? <a className="header__button" href={url}>
            {buttonText}
          </a> : null }
        </div>
      </div>
    </header>
  );
};

export default Header;
