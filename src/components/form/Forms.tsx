import Form from "react-bootstrap/Form";
import UploadButton from "../Button";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useRef } from "react";
import { postPreregisters } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Forms() {
  const companyNameRef = useRef<HTMLInputElement>(null);
  const telephoneNumberRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onsubmit = () => {
    // get all values from form
    // send all values
    const companyName = companyNameRef.current?.value;
    const telephoneNumber = telephoneNumberRef.current?.value;

    let avatar: File | null | undefined = avatarRef.current?.files?.item(0);
    if (avatar === undefined) avatar = null;

    if (companyName?.length === 0 || companyName === undefined) return;
    if (telephoneNumber?.length === 0 || telephoneNumber === undefined) return;

    postPreregisters(companyName, telephoneNumber, "AFRIQEXPRESS", avatar).then(
      (result) => {
        console.log(result);

        if (result instanceof Error) return;
        console.log(result);

        navigate(0);
      }
    );
  };

  const onUploadPressed = () => {
    if (avatarRef.current) avatarRef.current.click();
  };

  return (
    <Form>
      <Form.Group controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          ref={companyNameRef}
          type="text"
          placeholder="Enter Company Name"
        />
      </Form.Group>
      <Form.Group controlId="telephoneNumber">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control
          ref={telephoneNumberRef}
          type="text"
          placeholder="Enter Telephone Number"
        />
      </Form.Group>
      <FormGroup>
        <Form.Label>Select Service</Form.Label>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="AfriQExpress"
              value="AFRIQEXPRESS"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="AfriQPay"
              value="AFRIQPAY"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
      </FormGroup>
      <input ref={avatarRef} type="file" style={{ display: "none" }} />
      <UploadButton
        onClickCB={onUploadPressed}
        text="Upload Avatar"
      ></UploadButton>
      <UploadButton onClickCB={onsubmit} text="Submit"></UploadButton>
    </Form>
  );
}

export default Forms;
