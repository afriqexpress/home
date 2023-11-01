import { useRef, useState } from "react";
import { postPreregisters } from "../../services/api";
import FormInput, { InputValue } from "./forminput/forminput";
import FormButton from "./formButton/formButton";

import "./preregisterForm.css";

interface Props {
    appName: string
}

const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;

const PreregistrerForm = ({ appName }: Props) => {
    const [companyName, setCompanyName] = useState<InputValue>({valid: false, value: ""});
    const [phoneNumber, setPhoneNumber] = useState<InputValue>({valid: false, value: ""});
    const [avatar, setAvatar] = useState<File | null>(null);
    
    const avatarRef = useRef<HTMLInputElement>(null);

    const onSubmitButtonClick = () => {
        const companyNameResult =  companyNameValidator(companyName.value);
        setCompanyName(companyNameResult);

        const phoneNumberResult = phoneNumberValidator(phoneNumber.value);
        setPhoneNumber(phoneNumberResult);

        if(!companyNameResult.valid) return;
        if(!phoneNumberResult.valid) return;

        postPreregisters(companyName.value, phoneNumber.value, appName, avatar).then(
            (result) => {
              if ("error" in result) return console.log(result);
            }
          );
    }

    const onAvatarButtonClick = () => {
        avatarRef.current?.click();
    }

    const handleAvatarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let avatar = e.target.files?.item(0);
        if(avatar === undefined) avatar = null;

        setAvatar(avatar);
    }

    const companyNameValidator = (value: string): InputValue => {
        if(value.length == 0) return { valid: false, error: "Company name is required!", value: value };
        if(value.length > 25) return { valid: false, error: "Name is too long!", value: value };

        return { valid: true, value: value };
    }

    const phoneNumberValidator = (value: string): InputValue => {
        if(value.length == 0) return { valid: false, error: "Phone number is required!", value: value };
        if(!phoneNumberRegex.test(value)) return { valid: false, error: "Malformed phone number.", value: value};

        return { valid: true, value: value };
    }

    return(
        <div className="preregisterForm">
            <h2>Preregister</h2>
            <p>Lorem ipsum dolor sit amet. Aut fugiat culpa aut minus aliquam in natus autem et labore officia sed laudantium repellat aut animi praesentium.</p>
            <FormInput state={companyName} setState={setCompanyName} name="Company Name" validator={companyNameValidator}/>
            <FormInput state={phoneNumber} setState={setPhoneNumber} name="Phone Number" validator={phoneNumberValidator}/>

            <input ref={avatarRef} onChange={handleAvatarInput} type="file" style={{ display: "none" }} />
            <FormButton name="Avatar" onClickCB={onAvatarButtonClick} />

            <FormButton name="Submit" onClickCB={onSubmitButtonClick} />
        </div>
    );
}

export default PreregistrerForm;