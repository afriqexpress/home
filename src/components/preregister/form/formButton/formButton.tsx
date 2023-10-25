interface Props {
    onClickCB: () => void,
    name: string
}

const FormButton = ({ onClickCB, name }: Props) => {
    return(
        <button onClick={onClickCB}>{name}</button>
    );
}

export default FormButton;