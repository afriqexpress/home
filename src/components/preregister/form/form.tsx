import "./form.css";
import { useRef, useState } from "react";
import { Preregister, postPreregisters } from "../../../services/api";
import FormInput from "./forminput/forminput";
import FormButton from "./formButton/formButton";

interface Props {
  addPreregister: (preregister: Partial<Preregister>) => void;
}

const Form = ({ addPreregister }: Props) => {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const avatarRef = useRef<HTMLInputElement>(null);

  const onSubmitButtonClick = () => {
    // check if values are valid.

    postPreregisters(companyName, phoneNumber, "AFRIQEXPRESS", avatar).then(
      (result) => {
        if ("error" in result) return console.log(result);

        addPreregister(result);
      }
    );
  };

  const onAvatarButtonClick = () => {
    avatarRef.current?.click();
  };

  const handleAvatarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let avatar = e.target.files?.item(0);
    if (avatar === undefined) avatar = null;

    setAvatar(avatar);
  };

  return (
    <div className="Form">
      <FormInput
        state={companyName}
        setState={setCompanyName}
        name="Company Name"
      />
      <FormInput
        state={phoneNumber}
        setState={setPhoneNumber}
        name="Phone Number"
      />

      <input
        ref={avatarRef}
        onChange={handleAvatarInput}
        type="file"
        style={{ display: "none" }}
      />
      <FormButton name="Avatar" onClickCB={onAvatarButtonClick} />

      <FormButton name="Submit" onClickCB={onSubmitButtonClick} />
    </div>
  );
};

export default Form;
