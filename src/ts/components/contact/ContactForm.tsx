
import { ChangeEvent, FormEvent, useState } from "react";

import "@scss/components/contact/ContactForm.scss";
import { formValidation } from "@utils/forms/formValidations"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const results = formValidation(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <span className="heading">
                <div className="message1">Get in Touch.</div>
                <div className="message2">You can reach us anytime.</div>
                <span className="email-message">We&#39;ll never share your info.</span>
            </span>
            <div className="names d-flex mt-4">
                <span className="fname d-flex flex-column">
                    <label className="fname-label">First name</label>
                    <input type="text" name="fname" className="fname-input" placeholder="First name" onChange={handleInputChange} required />
                </span>
                <span className="lname d-flex flex-column">
                    <label className="lname-label">Last name</label>
                    <input type="text" name="lname" className="lname-input" placeholder="Last name" onChange={handleInputChange} required />
                </span>
            </div>
            <div className="email d-flex flex-column mt-3">
                <label className="email-label">E-mail</label>
                <input type="email" name="email" className="email-input" placeholder="E-mail" onChange={handleInputChange} required />
            </div>
            <div className="phone d-flex flex-column mt-3">
                <label>Phone</label>
                <input type="phone" name="phone" placeholder="Phone" onChange={handleInputChange} />
            </div>
            <div className="message d-flex flex-column mt-3">
                <label>Message</label>
                <input
                    className="textArea"
                    name="message"
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                />
            </div>
            <div className="text-center d-flex flex-column mt-5">
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
