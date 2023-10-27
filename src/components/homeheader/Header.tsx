import "./Header.css";

const Header = (props:any) => {
    return(
        <header className="header">
            <h1 className="header__h1">{props.bigTitle || "Default Big Title"}</h1>
            <h2 className="header__h2">{props.smallTitle || "Default Small Title"}</h2>
            <a href="/Login"><button className="header__button">{props.buttonTitle || "Default Button Title"}</button></a>
        </header>
    )
}

export default Header;
