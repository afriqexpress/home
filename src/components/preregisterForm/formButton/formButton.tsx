import "./formButton.css";

interface Props {
    onClickCB: () => void,
    name: string
}

const FormButton = ({ onClickCB, name }: Props) => {
    return(
        <button className="form__button" onClick={onClickCB}>{name}</button>
    );
}

export default FormButton;