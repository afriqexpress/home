import { useEffect, useRef, useState } from "react";
import "./formAvatar.css";
import FormButton from "../formButton/formButton";

interface Props {
    setState: React.Dispatch<React.SetStateAction<File | null>>,
    state: File | null
}

const FormAvatar = ({ setState, state }: Props) => {
    const avatarRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>();

    useEffect(() => {
        if(!state) {
            setPreview(null);
            return;
        }

        const reader = new FileReader;

        reader.addEventListener("loadend", e => {
            if(e.target?.result) setPreview(e.target?.result as string);
        });

        reader.readAsDataURL(state);
    }, [state]);

    const onAvatarButtonClick = () => {
        avatarRef.current?.click();
    }

    const handleAvatarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let avatar = e.target.files?.item(0);
        if(avatar === undefined) avatar = null;

        setState(avatar);
    }

    return(
        <div className="form__avatar">
            {preview ? <img src={preview} alt="avatar" className="form__avatar__preview" /> : <figure className="form__avatar__preview form__avatar__preview--empty" /> }
            <input ref={avatarRef} onChange={handleAvatarInput} type="file" style={{ display: "none" }} accept="image/*" />
            <FormButton name="Avatar" onClickCB={onAvatarButtonClick} />
        </div>
    );
}

export default FormAvatar;