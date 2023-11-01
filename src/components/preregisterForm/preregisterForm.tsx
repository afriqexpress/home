import { useEffect, useState } from "react";
import { postPreregisters } from "../../services/api";
import FormInput, { InputValue } from "./forminput/forminput";
import FormButton from "./formButton/formButton";
import FormAvatar from "./formAvatar/formAvatar";

import "./preregisterForm.css";

interface Props {
    appName: string
}

const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;

const PreregistrerForm = ({ appName }: Props) => {
    const [companyName, setCompanyName] = useState<InputValue>({valid: false, value: ""});
    const [phoneNumber, setPhoneNumber] = useState<InputValue>({valid: false, value: ""});
    const [avatar, setAvatar] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        if(!success) return;

        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    }, [success]);
    
    const onSubmitButtonClick = () => {
        const companyNameResult =  companyNameValidator(companyName.value);
        setCompanyName(companyNameResult);

        const phoneNumberResult = phoneNumberValidator(phoneNumber.value);
        setPhoneNumber(phoneNumberResult);

        if(!companyNameResult.valid) return;
        if(!phoneNumberResult.valid) return;

        postPreregisters(companyName.value, phoneNumber.value, appName, avatar).then(
            (result) => {
              if ("error" in result) {
                setError(result.error);
                return;
            }

              setCompanyName({valid: false, value: ""});
              setPhoneNumber({valid: false, value: ""});
              setAvatar(null);
              setError(null);

              setSuccess(true);
            }
          );
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

            <FormAvatar state={avatar} setState={setAvatar}/>

            { error ? <p className="form__error">{error}</p> : null}
            <FormButton name="Submit" onClickCB={onSubmitButtonClick} />
            { success ? <p className="form__success">Succesfully preregistered!</p> : null }
        </div>
    );
}

export default PreregistrerForm;