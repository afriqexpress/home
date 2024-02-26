import "./Contact.css"
import Star from "./star.png"
import Bubble from "./bubble_contact.png"
import Bubble2 from "./Group 1000001308.png"
import MobileBubble from "./Group 1000001308.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    // const prodBaseUrl = "http://afriqpay-api.afriqexpress.net/api/v1";




    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone_number':
                setPhoneNumber(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Validate fields
        if (!name || !phone_number || !message) {
            toast.error('Un ou plusieurs champs obligatoires ne sont pas remplis.');
            return;
        }

        try {

            const response = await axios.post('http://afriqpay-api.afriqexpress.net/api/v1/send_home_message/',
                {
                    name,
                    email: email || null,
                    phone_number,
                    message,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response) {
                toast.success('Form submitted successfully!');
                console.log('Form submitted successfully!');
                console.log(response);
                setName('');
                setPhoneNumber('');
                setEmail('');
                setMessage('');

            }
            else {

                toast.error("Quelque chose n'a pas fonctionné, réessayez plus tard ou envoyez-nous directement un courriel à afriqxpress@gmail.com.");
                console.error('Form submission failed. Please try again.');

            }
        } catch (error) {
            toast.error("Quelque chose n'a pas fonctionné, réessayez plus tard ou envoyez-nous directement un courriel à afriqxpress@gmail.com");
            console.error('An error occurred. Please try again.', error);
        }
    };

    return (
        <>
            <div className="contact" id="contact">
                <div className="mobileBubble_contact">
                    <img src={MobileBubble} alt="" className="mobile_bubble_contact" />
                </div>
                <ToastContainer
                    style={{ fontSize: '1.5rem', maxWidth: '500px', width: '100%' }}
                    autoClose={5000} // Adjust autoClose duration as needed
                />
                <div className="contact_form">
                    <div className="contact_headings">
                        <h3 className="heading_contact">Nous Contacter</h3>
                        <span className="subheading_contact">Pour toute question, n'hésitez pas à nous contacter.</span>
                    </div>
                    <div className="fields_container">
                        <div className="input_boxes">
                            <div className="name_box">
                                <label className="label">Prénom <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <input type="text" className="input" name="name" value={name} onChange={handleChange} required />

                            </div>
                            <div className="name_box_phone">
                                <label className="label">Numéro de téléphone <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <input type="text" className="input" name="phone_number" value={phone_number} onChange={handleChange} required />

                            </div>
                            <div className="business_box">
                                <label className="label">Email </label>
                                <input type="email" className="input" name="email" value={email} onChange={handleChange} />

                            </div>

                        </div>
                        <div>
                            <div className="message_box mobile_msg_box">
                                <label className="label label_mobile">Message <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <textarea className="input_msg" name="message" value={message} onChange={handleChange} required />

                            </div>
                        </div>
                    </div>
                    <div className="submit">
                        <button className="submit_btn" onClick={handleSubmit}>Soumettre</button>
                    </div>
                    <div className="mobile_fields_container">

                        <div className="mobile_input_boxes">
                            <div className="mobile_name_box">
                                <label className="label">Prénom  <img src={Star} /> </label>
                                <input type="text" className="mobile_input" name="name" value={name} onChange={handleChange} required />

                            </div>
                            <div className="mobile_name_box_phone">
                                <label className="label">Numéro de téléphone <img src={Star} /> </label>
                                <input type="text" className="mobile_input" name="phone_number" value={phone_number} onChange={handleChange} required />

                            </div>
                            <div className="mobile_business_box">
                                <label className="label">Email</label>
                                <input type="email" className="mobile_input" name="email" value={email} onChange={handleChange} />

                            </div>
                            <div className="mobile_msg_box">
                                <label className="label">Message <img src={Star} /> </label>
                                <textarea className="mobile_input_msg" name="message" value={message} onChange={handleChange} required />
                            </div>
                            <div className="submit_mobile">
                                <button className="submit_btn_mobile" onClick={handleSubmit}>Soumettre</button>
                            </div>

                        </div>

                        <div>

                        </div>
                    </div>

                </div>
                <div className="bubble_contact">
                    <img src={Bubble} alt="" />
                </div>
                <div className="bubble_contact2">
                    <img src={Bubble2} alt="" />
                </div>

            </div>

        </>
    )
}

export default Contact



