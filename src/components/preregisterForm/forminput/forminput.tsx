import "./forminput.css";

export interface InputValue {
    valid: boolean,
    error?: string,
    value: string
}

interface Props {
    className?: string;
    state: InputValue,
    setState: React.Dispatch<React.SetStateAction<InputValue>>,
    name: string

    validator: (value: string) => InputValue;
}

const FormInput = ({ state, setState, name, validator }: Props) => {

    const check = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = validator(e.target.value);
        setState(result);
    }

    return(
        <>
            <label className="form__label" htmlFor={name}>{name}</label>
            { state.error ? <p className="form__error">{state.error}</p> : null }
            <input className="form__field" name={name} type="text" value={state.value} onChange={(e) => check(e)} />
        </>
    );
}

export default FormInput;