import "./Contact.css"
import Star from "./star.png"
import Bubble from "./bubble_contact.png"
import Bubble2 from "./Group 1000001308.png"
import MobileBubble from "./Group 1000001308.png"

function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="mobileBubble_contact">
                    <img src={MobileBubble} alt="" className="mobile_bubble_contact" />
                </div>
                <div className="contact_form">
                    <div className="contact_headings">
                        <h3 className="heading_contact">Contact Us</h3>
                        <span className="subheading_contact">For any kind or quarry please flee free to contact us</span>
                    </div>
                    <div className="fields_container">
                        <div className="input_boxes">
                            <div className="name_box">
                                <label className="label">FIRST NAME <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <input type="text" className="input" />

                            </div>
                            <div className="name_box_phone">
                                <label className="label">PHONE NUMBER <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <input type="tel" className="input" required />

                            </div>
                            <div className="business_box">
                                <label className="label">BUSINESS EMAIL <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <input type="email" className="input" />

                            </div>

                        </div>
                        <div>
                            <div className="message_box mobile_msg_box">
                                <label className="label label_mobile">MESSAGE <img src={Star} style={{ marginBottom: 5, width: 7, height: 7 }} /> </label>
                                <textarea className="input_msg" />

                            </div>
                        </div>
                    </div>
                    <div className="submit">
                                <button className="submit_btn">Submit</button>
                            </div>
                    <div className="mobile_fields_container">
                        <div className="mobile_input_boxes">
                            <div className="mobile_name_box">
                                <label className="label">FIRST NAME <img src={Star} /> </label>
                                <input type="text" className="mobile_input" />

                            </div>
                            <div className="mobile_name_box_phone">
                                <label className="label">PHONE NUMBER <img src={Star} /> </label>
                                <input type="text" className="mobile_input" />

                            </div>
                            <div className="mobile_business_box">
                                <label className="label">BUSINESS EMAIL <img src={Star} /> </label>
                                <input type="email" className="mobile_input" />

                            </div>
                            <div className="mobile_msg_box">
                                <label className="label">MESSAGE <img src={Star} /> </label>
                                <textarea className="mobile_input_msg" />
                            </div>
                            <div className="submit_mobile">
                                <button className="submit_btn_mobile">Submit</button>
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