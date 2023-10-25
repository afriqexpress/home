interface Props {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    name: string
}

const FormInput = ({ state, setState, name }: Props) => {
    return(
        <>
            <label htmlFor={name}>{name}</label>
            <input name={name} type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </>
    );
}

export default FormInput;